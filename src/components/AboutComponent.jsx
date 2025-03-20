import React from 'react'

export default function AboutComponent() {
  return (
    <>
      <div className='mt-2 flex flex-col gap-6 lg:gap-16 px-[6%] text-blue-900'>
        <div className='mt-6 max-w-[50rem] flex flex-col gap-12 text-2xl text-gray-500'>
          <div className='flex flex-col gap-4'>
            <h2 className='text-gray-700 text-4xl font-bold'>About Project</h2>
            <p>I created this project because many websites give the current wait time for rides, but not a history of the wait times for the entire day. I wanted to look at this data in its entirety to see if I could find any interesting patterns. So, every five minutes, I gather the wait times and save them to a database.</p>
            <div className='w-3/5 h-1 bg-gray-400'></div>
          </div>
          <div className='flex flex-col gap-4'>
            <h2 className='text-gray-700 text-4xl font-bold'>The Frontend</h2>
            <p>I built the front end of this project with React, Vite, React-Router-Dom, and Tailwind CSS. This project is being hosted on Netlify and connects to a Firebase database using environment variables.</p>
            <div className='w-3/5 h-1 bg-gray-400'></div>
          </div>
          <div className='flex flex-col gap-4'>
            <h2 className='text-gray-700 text-4xl font-bold'>The Backend</h2>
            <p>The backend of this project makes use of several AWS tools such as Amazon Web Service's Lambda, S3, and EventBridge. I am using EventBridge to run an AWS Lambda function, which runs a script stored in S3, that uses Puppeteer to scrape the ride wait times from a website, and then saves that data to Firebase Firestore.</p>
            <div className='w-3/5 h-1 bg-gray-400'></div>
          </div>
        </div>
      </div>
    </>
  )
}
