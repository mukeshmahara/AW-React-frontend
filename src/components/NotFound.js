import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='grid content-center font-extrabold grid-col-1 place-items-center text-9xl '>
      404
      <div className='text-5xl'>Page Not Found!</div>
      <Link to={"/"} className="p-3 my-4 text-lg bg-indigo-500 rounded shadow-lg hover:animate-pulse hover:text-indigo-50 hover:outline-indigo-600">Back to homepage</Link>
    </div>
  )
}

export default NotFound