import React, { useState } from 'react'
import { socket } from '../../socket'

const MyForm = () => {

    const [message, setMessage] = useState('')

    const handleOnChange = (e) => {
        setMessage(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
        const trimmed = message.trim()
        if (!trimmed) return
        socket.emit('chat message', trimmed)
        setMessage('')
    }

  return (
    <div>
        <div className='flex gap-2 p-2 border-t'>
            <input 
                className='flex-1 border px-3 py-2 rounded-3xl'
                type="text"
                name='message'
                value={message}
                onChange={handleOnChange}
            />
            <button 
            className='px-4 py-2 bg-linear-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 rounded-full cursor-pointer active:scale-95 active:translate-y-1 transition duration-150'
            onClick={handleClick}>Send</button>
        </div>
    </div>
  )
}

export default MyForm