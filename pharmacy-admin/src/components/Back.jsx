import React from 'react'
import { back } from '../assets/assets'
import { Link } from 'react-router-dom'

function Back({link}) {
  return (
    <Link to={link}
    title='Go back'
     className='flex text-sm items-center  md:w-24 gap-2 bg-green-700/10 rounded px-4 py-1 cursor-pointer lg:hover:scale-x-105 trans'>
      <img src={back} alt='back' width={20} loading='lazy'/>
      <p className='hidden md:block'>Back</p>
    </Link>
  )
}

export default Back
