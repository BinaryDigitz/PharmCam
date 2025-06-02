import React from 'react'
import { banginic_logo, verified } from '../assets/assets'

function Footer() {
  return (
    <section className='text-center text-xs text-green-950/70 flex justify-center gap-4 my-2'>
      <p>Developed & Powered by</p>
       <p 
       title='Visit developer'
       className='text-black cursor-pointer flex gap-1 items-center'>
        <img src={banginic_logo} width={17} alt={verified} loading='lazy' />
        <span>Banginic</span>
       </p>
    </section>
  )
}

export default Footer

