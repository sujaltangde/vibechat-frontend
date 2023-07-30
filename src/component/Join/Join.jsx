import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {BsArrowRightShort} from 'react-icons/bs'

let user;

export const Join = () => {

    const [name, setName] = useState("");


    const sendUser = (e) => {
        if (!name) {
            e.preventDefault()
        } else {
            user = document.getElementById('int').value
            document.getElementById('int').value = ""
        }
    }





    return (
        <>
            <div className='min-h-screen bg-black/90 text-white flex justify-center items-start pt-14'>
                <div className=' w-2/7 '>
                    <div className=' justify-center w-full flex items-center flex-col'>
                        <h1 className='text-6xl font-bold text-purple-600 py-3 border border-x-0 border-t-0 text-center  ' >VibeChat</h1>

                        <div className='pt-14 w-full flex flex-col justify-center items-center gap-5 '>

                            <input id="int" type="text" onChange={(e) => setName(e.target.value)} placeholder='Enter your name' className='py-2 px-2 w-full outline-none text-black rounded' />

                            <Link to='/chat' className='w-full '>
                                <button className='py-2 px-2 bg-purple-900 rounded text-lg w-full font-semibold flex justify-center items-center ' onClick={sendUser} >Join Chat <BsArrowRightShort size={20}/>
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export { user };