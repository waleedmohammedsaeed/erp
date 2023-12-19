import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Statusbar = (props) => {
  return (
    <div className='flex justify-between  items-center border gap-x-4 border-gray-200 h-10 py-3 w-full px-5 red'>
        <div className='text-blue-600'>
        </div> 
        <div className='text-blue-600'><Link to={-1}>Back</Link></div>
    </div>
  )
}

export default Statusbar