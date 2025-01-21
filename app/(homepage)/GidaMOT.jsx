import React from 'react'

const GidaMOT = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 p-16 bg-rose-50'>
      <div className=' pr-10 text-xl'>
        <h1 className='text-6xl mb-4 font-semibold'>GIDA MOT League</h1>
        <p className="mb-4">GIDA's “Masters of Trading League‶ - MOT League 💹 is a monthly subscription based premium and exclusive community for people actively involved in Trading the Crypto Spot and Futures Market as well as the Forex Market.</p>
        <p className="mb-4">You get;</p>
        <div className='flex gap-2 items-center mb-4 pl-1'>
            <img 
                src="/assets/checkIcon.png" 
                alt="" 
                className='w-5 h-5'
            />
            <p>Access to Mentorship & Accountability partners to become a consistent & profitable trader</p>
        </div>

        <div className='flex gap-2 items-center mb-4 pl-1'>
            <img 
                src="/assets/checkIcon.png" 
                alt="" 
                className='w-5 h-5'
            />
            <p>Peer review of your analysis</p>
        </div>

        <div className='flex gap-2 items-center mb-4 pl-1'>
            <img 
                src="/assets/checkIcon.png" 
                alt="" 
                className='w-5 h-5'
            />
            <p>Weekly calls with our Pro Chart analysts</p>
        </div>

        <div className='flex gap-2 items-center mb-4 pl-1'>
            <img 
                src="/assets/checkIcon.png" 
                alt="" 
                className='w-5 h-5'
            />
            <p>Occasional Trading Signals (Crypto & Forex)</p>
        </div>
        <a href="/" className='p-4 bg-red-900 rounded-full text-white mt-8 inline-block'>Subscribe to the MOT league</a>
      </div>
      <div className=' relative h-screen'>
        <div className=''>
            <div className='absolute w-80 h-80 bg-amber-500 right-1/4 md:right-0 top-1/4 rounded-3xl'>helloe</div>
            <img 
                src="/assets/MOT.png" 
                alt="" 
                className=' absolute w-80 h-80 -translate-y-4 -translate-x-5 right-1/4 md:right-0 top-1/4'
            />
        </div>
      </div>
    </div>
  )
}

export default GidaMOT
