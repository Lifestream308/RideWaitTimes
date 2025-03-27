import React from 'react'

export default function ContactComponent({rideNames, rideFilter, setRideFilter}) {

  console.log(rideFilter)

  const handleFilter = (name) => {
    setRideFilter(prev => ({
      ...prev, 
      [name]: prev[name] ? false : true
    }))
  }

  const handleFilterAll = () => {
    let ridesFalseObject = rideNames.reduce((acc, ride) => {
      acc[ride] = true
      return acc
    }, {})
    setRideFilter(ridesFalseObject)
  }

  return (
    <div>
        <div className='mt-2 flex flex-col gap-8 px-[6%] bg-slate-100'>
          <h2 className='text-2xl'>Contact Page</h2>
          <button className='px-2 py-1 mt-4 w-fit text-base font-bold bg-gradient-to-r from-blue-700 to-blue-500 text-white hover:shadow-xl hover:text-gray-200 shadow-sm shadow-neutral-600 rounded-lg sm:px-4 sm:py-2 sm:text-xl md:text-2xl sm:mt-6' onClick={handleFilterAll}>Toggle All Rides Off</button>
        {rideNames.map((rideName, index) => (
          <div onClick={() => handleFilter(rideName)} key={index} className='min-h-[3rem] w-4/5 max-w-[40rem] grid grid-cols-3 gap-4 border-gray-300 border-b-2'>
            <p className='col-span-2'>{rideName}</p>
            <p className='col-span-1'>{rideFilter[rideName] ? "OFF" : "ON"}</p>
          </div>
        ))}
        </div>
    </div>
  )
}
