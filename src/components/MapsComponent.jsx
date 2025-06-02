import React from 'react'

export default function MapsComponent() {

  async function testAPI() {
    
      try {
        const response = await fetch('https://api.themeparks.wiki/v1/entity/7340550b-c14d-4def-80bb-acdb51d49a66/live');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Full Data received:', data);
        // console.log('Rides that are attractions:', data.liveData.filter(ride => ride.entityType == "ATTRACTION"));
        console.log('Rides Reduce Object:', data.liveData.reduce((acc, ride) => {
          if (ride.entityType == 'ATTRACTION') {
            acc[ride.name] = ride.queue?.STANDBY?.waitTime ? ride.queue.STANDBY.waitTime : ride.status
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
            <a className='w-fit p-2 text-xl text-white bg-blue-700 rounded-lg' target='_blank' href='https://www.google.com/maps/dir//1313+Disneyland+Dr,+Anaheim,+CA+92802/@33.8145851,-117.9217141,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x80dcd7d400f5ab31:0x1bcbcc05a3d825!2m2!1d-117.9191392!2d33.8145851!3e0?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D'>
              Google Maps Link to Mickey And Friends Parking Structure
            </a>
            <a className='w-fit p-2 text-xl text-white bg-blue-700 rounded-lg' target='_blank' href='https://www.dreamsunlimitedtravel.com/disneyland/disneyland-map.htm'>
              Maps of Disneyland
            </a>
            <button className='w-fit p-2 text-xl text-white rounded-lg bg-blue-700' onClick={testAPI}>Test Button</button>
          </div>
        </div>
      </div>
    </>
  )
}
