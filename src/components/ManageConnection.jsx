import React from 'react'
import { socket } from '../socket'

const ManageConnection = () => {
    const handleConection = (con) => {
      console.log({ con })

        switch (con) {
            case 'on':
                socket.connect()
                break
            case 'off':
                socket.disconnect()
                break
            default:
                break
        }
    }

  return (
    <div>
        <div className='flex gap-7'>
            <button 
            className='cursor-pointer border-2 border-green-600 py-4 px-5 rounded-full text-lg font-bold hover:bg-green-500 hover:text-white active:scale-95 active:translate-y-1 transition duration-150'
            onClick={() => handleConection('on')}>Connect</button>

            <button 
            className='cursor-pointer border-2 border-red-500 py-4 px-5 rounded-full text-lg font-bold hover:bg-red-600 hover:text-white active:scale-95 active:translate-y-1 transition duration-150'
            onClick={() => handleConection('off')}>Disconnect</button>
        </div>
    </div>
  )
}

export default ManageConnection