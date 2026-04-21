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

        {message?.map((m) => (
          <p>{m}</p>
        ))}
      </div>
    </>
  )
}

export default Chats