import { Span } from 'next/dist/trace'
import React from 'react'

const loading = () => {
  return (
    <div>
        <div  className='min-h-screen flex justify-center items-center text-8xl'>
        <h2>L</h2> <span className='animate-spin'>000</span>
        <h2>ADING</h2>
        </div>
    </div>
  )
}

export default loading