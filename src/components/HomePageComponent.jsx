import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePageComponent({ridesObject}) {
  return (
    <>
      <div className='mt-2'>
          <main className='flex flex-col gap-6 justify-center md:gap-16'>
            <div className='mt-2 text-center md:hidden'>
              <h1 className='text-2xl font-bold text-blue-700 md:hidden'>Disneyland</h1>
              <h2 className='font-extralight text-gray-600 text-base'>Anaheim, California</h2>
            </div>
            <section className='relative w-full h-auto'>
              <img className='w-full h-auto' src="images/pixar-pier.jpg" alt="Pixar Pier at Disneyland" />
              <div className='absolute inset-0 w-7/10 bg-gradient-to-r from-gray-900/90 to-gray-500/5'></div>
              <div className='absolute h-full flex flex-col top-0 justify-center left-[13%]'>
                <h3 className='font-bold text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl'>View Wait Times</h3>
                <h3 className='mt-3 font-extralight text-neutral-200 text-base sm:block md:text-lg lg:text-2xl'>Accurate ride data updated</h3>
                <h3 className='font-extralight text-neutral-200 text-base sm:block md:text-lg lg:text-2xl'>every five minutes</h3>
                <Link to='/contact' className='px-2 py-1 mt-4 w-fit text-base font-bold bg-gradient-to-r from-blue-700 to-blue-500 text-white hover:shadow-xl hover:text-gray-200 shadow-sm shadow-neutral-600 rounded-lg sm:px-4 sm:py-2 sm:text-xl md:text-2xl sm:mt-6' href="">Call To Action</Link>
              </div>
            </section>

            <section className='flex flex-wrap flex-col md:flex-row text-black gap-8'>
            {Object.keys(ridesObject).sort((a, b) => Number(a) - Number(b)).slice(-5).reverse().map((time, index) => (
              <div className='ml-8 w-4/5 md:w-2/5' key={index}>
                <div className='flex flex-col gap-3'>
                  <p className=''>Time: {time}</p>
                {Object.keys(ridesObject[time]).sort().map((ride, index) => (
                  <div key={index} className='grid grid-cols-3 gap-4'>
                    <p className='col-span-2'>{ride}</p>
                    <p className='col-span-1'>- {ridesObject[time][ride]}</p>
                  </div>
                ))}
                </div>
              </div>
            ))}
            </section>
          </main>
      </div>
    </>
  )
}
