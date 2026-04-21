import React, { useEffect, useState } from 'react'
import { socket } from '../socket'

const Chats = () => {
  const[message, setMessage] = useState([])

  useEffect(() => {
    socket.on('chat message', (msg, serverOffset) => {
      console.log("Mensaje desde el server: ", msg)
      socket.auth.serverOffset = serverOffset;
      setMessage((prev) => [...prev, msg])
    })
    return () => {
      socket.off('chat message')
    }
  }, [])

  return (
    <>
      <div>
        <h2 className='flex items-center justify-center text-4xl font-bold mb-5'>Chats</h2>

        <div className='flex-1 overflow-y-auto space-y-3 p-3'>
          {message?.map((m, index) => (
            <div 
              key={index}
              className='bg-gray-900 border-2 border-white rounded-2xl px-4 py-3 text-white shadow-lg'>
              {m}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Chats