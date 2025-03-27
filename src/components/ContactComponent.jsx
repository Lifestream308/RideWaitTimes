import React from 'react'

export default function ContactComponent({rideNames, rideFilter, setRideFilter}) {

  console.log(rideFilter)

  const handleFilter = (name) => {
    setRideFilter(prev => ({
      ...prev, 
      [name]: prev[name] ? false : true
    }))
  }

  return (
    <div>
        <div className='mt-2 flex flex-col gap-8 px-[6%] bg-slate-100'>
          <h2 className='text-2xl'>Contact Page</h2>
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
