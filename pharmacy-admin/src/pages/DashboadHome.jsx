import React from 'react'
import { placeholder_img, uk_flag } from '../assets/assets'

function DashboadHome() {
  return (
    <section className="w-full flex justify-center items-center h-full">
        <div>
          <img
            src={uk_flag}
            width={100}
            alt={placeholder_img}
            className="mx-auto mb-4"
          />
          <p className="montserrat font-bold text-lg lg:text-xl text-center">
            MERCY PHARMACY
          </p>
          <h2 className="">Welcome to your dashboard.</h2>
        </div>
      </section> 
  )
}

export default DashboadHome
