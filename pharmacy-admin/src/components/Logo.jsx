import React from 'react'

function Logo({ logoSize, textSize}) {
  return (
    <div className='flex gap-1 px-4  rounded text-green-800 hover:opacity-80 cursor-pointer w-35 items-center justify-around'>
      <p className={logoSize}>Pc</p>
      <p className={`${textSize} montserrat font-bold`}>Pharmcam</p>
    </div>
  )
}

export default Logo
