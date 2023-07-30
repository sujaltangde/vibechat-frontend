import React, { useEffect, useState } from 'react'
import { user } from './Join'
import socketIo from 'socket.io-client';
import { IoMdSend } from 'react-icons/io'
import { Message } from '../Message';
import ScrollToBottom from 'react-scroll-to-bottom';
import { RiLogoutCircleLine } from 'react-icons/ri'


const ENDPOINT = "https://vibechat-b.onrender.com/"

let socket;

export const Chat = () => {

    const [id, setId] = useState("");
    const [msg, setMsg] = useState([])
   


    const send = () => {
        const message = document.getElementById('val').value;

        if (message !== "") {
            socket.emit('message', { message, id });
            document.getElementById('val').value = ""
        }
    }

  
      




    useEffect(() => {
        socket = socketIo(ENDPOINT, { transports: ['websocket'] });


        socket.on('connect', () => {
            setId(socket.id)
        })

        socket.emit('joined', { user })

        socket.on("welcome", (data) => {
            
            setMsg([...msg, data])
        })


        socket.on('userJoined', (data) => {
            console.log(data)
            setMsg([...msg, data])
        })

        socket.on('disconnect', (data) => {
            console.log(data)
            setMsg([...msg, data])
        })

        socket.on('leave', (data) => {
            setMsg([...msg, data])
        })

        return () => {
            socket.off()
        }
    }, [])


    useEffect(() => {
        socket.on('sendMessage', (data) => {
            setMsg([...msg, data])
        })

        return () => {
            socket.off()
        }
    }, [msg])



    return (
        <>
            <div className='bg-black/90 h-screen flex justify-center  '>
                <div className='flex flex-col pt-20 md:w-3/5 w-4/5 '  >

                    <div className='bg-purple-900 py-2 justify-between flex items-center rounded-md rounded-b-none'>
                        <div className='text-xl px-3 text-white font-bold'>VibeChat</div>
                        <div className='text-xl text-white font-bold px-2'>
                            <a href="/"  className='text-white' > 
                            <RiLogoutCircleLine className='cursor-pointer text-white ' />  </a>
                        </div>
                    </div>

                    <ScrollToBottom className="  h-3/5 w-full bg-white inline-block">
                        {

                            msg.map((e, i) => (

                                <Message key={i} user={e.id === id ? "" : e.user} msg={e.message} classs={e.id === id ? 'text-right' : "text-left"} />

                            ))
                        }

                    </ScrollToBottom>


                    <div className='w-full flex  '>
                        <input id='val'
                            onKeyPress={(e) => e.key === 'Enter' ? send() : null}
                            className='outline-none
                        border border-x-0 border-b-0 border-gray-500
                        px-2 w-full py-2 rounded-md rounded-t-none rounded-e-none rounded-r-none ' type="text" />
                        <button onClick={send} className='bg-purple-900 w-1/5 px-2 py-2 flex justify-center items-center text-white rounded-md rounded-s-none rounded-t-none rounded-l-none '>
                            <IoMdSend size={25}  /> </button>
                    </div>

                </div>
            </div>
        </>
    )
}
