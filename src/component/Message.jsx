import React from 'react'

export const Message = ({ msg, user, classs }) => {

  

    if (user) {
        return (<div className={`my-3 mx-1 ${classs}`}>
            <span className='bg-blue-200 font-bold py-1 rounded px-2'>{ `${user} : ${msg}` }</span>
        </div>)
    }
    else{
    return (


        <div className={`my-4 mx-1 ${classs}`}>
            <span className='bg-blue-200 font-bold py-1 min-w-0 rounded px-2'>{`You : ${msg}`} 
            </span>

        </div>


    )}
}
