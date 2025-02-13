import React from 'react'
import { masterOfTrading } from '../utils/constants'

const GidaMOT = () => {
  return (
    <section className="p-8 min-h-screen min-w-full lg:px-20 flex flex-col items-center justify-center bg-[#FEF8F3]">
      <div className='flex flex-col w-full gap-14 items-center justify-between lg:flex-row lg:max-w-screen-2xl mx-auto'>
        <div className='lg:pr-10 font-lato text-xl'>
          <h1 className='text-[2.5rem] leading-[1.25] font-clash lg:text-6xl mb-4 font-semibold'>GIDA MOT League</h1>
          <p className="mb-4 tracking-tight lg:w-[50ch]" style={{ color: 'rgba(0, 0, 0, 0.7)' }}>GIDA's “Masters of Trading League‶ - MOT League 💹 is a monthly subscription based premium and exclusive community for people actively involved in Trading the Crypto Spot and Futures Market as well as the Forex Market.</p>
          <p className="mb-4">You get;</p>
          <div className='flex gap-2 lg:w-[45ch] items-start mb-4 pl-1'>
              <img
                  src="/assets/checkIcon.png"
                  alt=""
                  className='w-5 h-5 mt-1.5'
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
          <div className="flex align-center gap-3">
            <a href={masterOfTrading.playground} target="_blank" rel="noopener noreferrer" className='p-4 px-8 font-clash text-primary rounded-full bg-white border mt-8 inline-block'>MOT Free Playground</a>
            <a href={masterOfTrading.league} target="_blank" rel="noopener noreferrer" className='p-4 px-8 font-clash bg-primary rounded-full text-white mt-8 inline-block'>Subscribe to the MOT league</a>
          </div>
        </div>
        <div className=''>
              <img
                  src="/assets/MOT.png"
                  alt=""
                  className='w-[80%]'
              />
        </div>
      </div>
    </section>
  )
}

export default GidaMOT
