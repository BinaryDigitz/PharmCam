import React from 'react'
import Title from '../components/Title'

function OnCall() {
  const callDays = [
    { date: '24/05/2025', day: 'Monday'},
    { date: '24/05/2025', day: 'Wednesday'},
    { date: '24/05/2025', day: 'Monday'},
    { date: '24/05/2025', day: 'Sunday'},
  ]
  return (
    <section className='mt-8 bg-gradient-to-tr from-gray-50 h-full'>
      <Title text1={'On'} text2={'Call'}/>
       <div className='w-sm lg:w-lg mx-auto mt-12 border p-4 rounded border-gray-300'>
          {
            callDays.map((item) => (
              <article key={item.date} className='rounded py-3 my-1 bg-gray-100 hover:bg-gray-200 grid grid-cols-3 pl-4 justify-between cursor-pointer'>
                <p>{item.day}</p>
                <p className='text-green-800'>{item.date}</p>
                <button className='text-red-500 cursor-pointer hover:text-red-800 '>Delete</button>
              </article>
            ))
          }
       </div>
       <button className='flex mx-auto mt-4 bg-black text-white px-6 py-3 rounded cursor-pointer hover:opacity-90 trans'>Edith On-call days</button>
    </section>
  )
}

export default OnCall
