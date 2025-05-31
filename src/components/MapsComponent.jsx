import React from 'react'

export default function MapsComponent() {

  async function testAPI() {
    
      try {
        const response = await fetch('https://api.themeparks.wiki/v1/entity/7340550b-c14d-4def-80bb-acdb51d49a66/live');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Data received:', data);
        // console.log('Rides that are attractions:', data.liveData.filter(ride => ride.entityType == "ATTRACTION"));
        console.log('Rides Object:', data.liveData.reduce((acc, ride) => {
          if (ride.entityType == 'ATTRACTION') {
            acc[ride.name] = ride.status
          }
          return acc
        }, {}));
      } catch (error) {
        console.error('Fetch error:', error.message);
      }
  }


  return (
    <>
      <div className='mt-2 flex flex-col gap-6 lg:gap-16 px-[6%] text-blue-900 bg-slate-100'>
        <div className='mt-6 max-w-[50rem] flex flex-col gap-12 text-2xl text-gray-500'>
          <div className='flex flex-col gap-4'>
            <h2 className='text-gray-600 text-4xl font-bold'>Maps</h2>
            <p>Need to add google maps link to different Disney locations like parking structure Mickey and Friends and maybe one other. Also link to Map of parks.</p>
            <button className='w-fit p-2 text-xl text-white rounded-lg bg-blue-700' onClick={testAPI}>Test Button</button>
          </div>
        </div>
      </div>
    </>
  )
}
