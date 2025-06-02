import React from 'react'
import { Back, Title } from '../components/exportComp'

function SemiAuthPharmacy() {
  return (
    <div className='relative'>
       <div className='absolute left-2 lg:left-4'>
         <Back link={'/'} />
       </div>
        <Title text1={'Pharmacy'} text2={'Owner'} />
        <div className='w-[300px] mx-auto mt-24 lg:mt-12 '>
          <div>
            <p>Already registered ? </p>
            <button className='bg-black mt-2 text-white px-6 py-3 w-full rounded-lg'>Login to your pharmacy</button>
          </div>
          <div className='mt-8'>
            <p>No account yet ?</p>
            <button className='text-black mt-2 border-1 border-black px-6 py-3 w-full rounded-lg'>Create account</button>
          </div>
        </div>
    </div>
  )
}

export default SemiAuthPharmacy
