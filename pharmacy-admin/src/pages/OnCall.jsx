import React, { useState } from 'react'
import Title from '../components/Title'
import { UpdateCallDays } from '../components/LazyExport'
import { add, placeholder_img } from '../assets/assets'

function OnCall() {
const [ showCallForm, setShowCallForm ] = useState(false)
  const callDays = [
    { date: '24/05/2025', day: 'Monday'},
    { date: '24/05/2025', day: 'Wednesday'},
    { date: '24/05/2025', day: 'Mondady'},
    { date: '24/05/2025', day: 'Sunday'},
  ]
  return (
    <section className='mx-auto max-w-lg lg:mt-8 relative'>
      <Title text1={'On'} text2={'Call'}/>
             <button
             onClick={() => setShowCallForm(true)}
              className='border my-4 rounded px-4 py-3 flex items-center gap-2 cursor-pointer hover:bg-gray-100'>
                <img src={add} width={25} loading='lazy' alt={placeholder_img} />
                Edith On-call days</button>

       <div className='w-sm lg:w-lg mx-auto mt-4 border p-4 rounded border-gray-300'>
          {
            callDays.map((item) => (
              <article key={item.day} className='rounded py-3 my-1 bg-gray-100 hover:bg-gray-200 grid grid-cols-3 pl-4 justify-between cursor-pointer'>
                <p>{item.day}</p>
                <p className='text-green-800'>{item.date}</p>
                <button className='text-red-500 cursor-pointer hover:text-red-800 '>Delete</button>
              </article>
            ))
          }
       </div>
        <div className={showCallForm ? 'fixed inset-0 bg-black/60 backdrop-blur-sm ' : 'hidden'}>
        <UpdateCallDays setShowCallForm={setShowCallForm}/>
      </div>
    </section>
  )
}

export default OnCall
