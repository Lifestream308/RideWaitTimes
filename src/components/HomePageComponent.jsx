import {useRef} from 'react'
import { Link } from 'react-router-dom'

export default function HomePageComponent({ridesObject, getTodaysDocument, rideFilter}) {

  const scrollRef = useRef(null)

  const scrollToNextElement = (direction) => {
    if (scrollRef.current) {
      const newScrollLeft =
        direction === "right"
          ? scrollRef.current.scrollLeft + 340
          : Math.max(0, scrollRef.current.scrollLeft - 340);

      scrollRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    }
  };

  const convertTime = (timeString) => {
    if (timeString.slice(0, -2) < 12 && timeString.slice(0, -2) == 0) {
      return 12 + ':' + timeString.slice(-2) + ' am';
    } else if (timeString.slice(0, -2) < 12) {
      return Number(timeString.slice(0, -2)) + ':' + timeString.slice(-2) + ' am'
    } else if (timeString.slice(0, -2) == 12) {
      return timeString.slice(0, -2) + ':' + timeString.slice(-2) + ' pm'
    } else {
      return Number(timeString.slice(0, -2)) - 12 + ':' + timeString.slice(-2) + ' pm'
    }
  }

  return (
    <>
      <div className='mt-2'>
          <main className='flex flex-col gap-6 justify-center md:gap-16'>
            <div className='mt-2 text-center md:hidden'>
              <h1 className='text-2xl text-blue-700 md:hidden'>Disneyland</h1>
              <h2 className='font-extralight text-gray-600 text-base'>Anaheim, California</h2>
            </div>
            <section className='relative w-full h-auto'>
              <img className='w-full h-auto' src="images/pixar-pier.jpg" alt="Pixar Pier at Disneyland" />
              <div className='absolute inset-0 w-7/10 bg-gradient-to-r from-gray-900/90 to-gray-500/5'></div>
              <div className='absolute h-full flex flex-col top-0 justify-center left-[13%]'>
                <h3 className='font-bold text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl'>View Wait Times</h3>
                <h3 className='mt-3 font-extralight text-neutral-200 text-base sm:block md:text-lg lg:text-2xl'>Accurate ride data updated</h3>
                <h3 className='font-extralight text-neutral-200 text-base sm:block md:text-lg lg:text-2xl'>every five minutes</h3>
                <div className='flex flex-wrap gap-6'>
                  <button className='px-2 py-1 mt-4 w-fit text-base font-bold bg-gradient-to-r from-blue-700 to-blue-500 text-white hover:shadow-xl hover:text-gray-200 shadow-sm shadow-neutral-600 rounded-lg sm:px-4 sm:py-2 sm:text-xl md:text-2xl sm:mt-6' onClick={() => {getTodaysDocument(); alert("Data Refreshed");}}>Refresh Data</button>
                  <Link to='/settings' className='px-2 py-1 mt-4 w-fit text-base font-bold bg-gradient-to-r from-blue-700 to-blue-500 text-white hover:shadow-xl hover:text-gray-200 shadow-sm shadow-neutral-600 rounded-lg sm:px-4 sm:py-2 sm:text-xl md:text-2xl sm:mt-6' href="">Settings</Link>
                </div>
              </div>
            </section>

            <div className="flex justify-center gap-6">
              <button onClick={() => scrollToNextElement("left")} className="px-4 py-2 bg-blue-500 text-white rounded">Scroll Left</button>
              <button onClick={() => scrollToNextElement("right")} className="px-4 py-2 bg-blue-500 text-white rounded">Scroll Right</button>
            </div>
            <section ref={scrollRef} className='ml-8 flex overflow-x-auto md:flex-row text-gray-700 gap-8'>
            {Object.keys(ridesObject).sort((a, b) => Number(a) - Number(b)).slice(-12).reverse().map((time, timeIndex) => (
              <div className='p-3 w-4/5 min-w-[20rem] md:w-2/5 bg-blue-100/60 rounded-lg' key={timeIndex}>
                <div className='flex flex-col gap-3'>
                  <p className=''>{convertTime(time)}</p>
                {Object.keys(ridesObject[time]).sort().filter(ride => !rideFilter[ride]).map((ride, rideIndex) => (
                  <div key={rideIndex} className='min-h-[3rem] grid grid-cols-3 gap-4 border-gray-300 border-b-2'>
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
