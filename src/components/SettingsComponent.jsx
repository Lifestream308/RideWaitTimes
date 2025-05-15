import React from 'react'

export default function SettingsComponent({rideNames, rideFilter, setRideFilter}) {

  console.log(rideFilter)

  const handleFilter = (name) => {
    setRideFilter(prev => ({
      ...prev, 
      [name]: prev[name] ? false : true
    }))
  }

  const handleRidesOff = () => {
    let ridesFalseObject = rideNames.reduce((acc, ride) => {
      acc[ride] = true
      return acc
    }, {})
    setRideFilter(ridesFalseObject)
  }

  const handleRidesOn = () => {
    let ridesFalseObject = rideNames.reduce((acc, ride) => {
      acc[ride] = false
      return acc
    }, {})
    setRideFilter(ridesFalseObject)
  }

  return (
    <div>
        <div className='mt-2 flex flex-col gap-8 px-[6%] bg-slate-100'>
          <h2 className='mt-6 text-4xl text-gray-600 font-bold'>Settings</h2>
          <p className='max-w-[40rem] text-xl text-gray-600'>There's too many rides! Turn all rides off, then click to toggle ON the rides you want to keep track of.</p>
          <div className='flex gap-10'>
            <button className='mt-4 px-2 py-1 w-fit text-base font-bold bg-gradient-to-r from-red-500 to-red-700 text-white hover:shadow-xl hover:text-gray-200 shadow-sm shadow-neutral-600 rounded-lg sm:px-4 sm:py-2 sm:text-xl md:text-2xl' onClick={handleRidesOff}>All Rides OFF</button>
            <button className='mt-4 px-2 py-1 w-fit text-base font-bold bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-xl hover:text-gray-200 shadow-sm shadow-neutral-600 rounded-lg sm:px-4 sm:py-2 sm:text-xl md:text-2xl' onClick={handleRidesOn}>All Rides ON</button>
          </div>
        {rideNames.map((rideName, index) => (
          <div onClick={() => handleFilter(rideName)} key={index} className='min-h-[3rem] w-full md:w-4/5 max-w-[40rem] grid grid-cols-6 gap-0 border-gray-300 border-b-2'>
            <p className='mr-4 col-span-4'>{rideName}</p>
            <p className='col-span-1'>{rideFilter[rideName] ? "OFF" : "ON"}</p>
            <p className='col-span-1'>{rideFilter[rideName] ? <i class="bi bi-x-circle text-2xl text-red-700"></i> : <i class="bi bi-check-circle-fill text-2xl text-green-600"></i>}</p>
          </div>
        ))}
        </div>
    </div>
  )
}
