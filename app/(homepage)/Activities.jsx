import React from 'react';

const Activities = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center md:items-start gap-8 p-16">
      {/* Text Content */}
      <div className="flex items-center h-screen md:w-1/2">
        <div className=''>
          <h1 className="text-5xl font-semibold mb-8 md:pr-10">
            Some Activities from our Developer Community &gt;&gt;
          </h1>
          <a
            href=""
            className="text-red-900 hover:text-blue-700 border-red-900 border-2 p-2 rounded-full"
          >
            Learn more
          </a>
        </div>
        
      </div>

      {/* Image Section */}
      <div className=" h-screen w-full md:w-1/2 relative">
        <img src="/assets/leftarrow.png" className='absolute w-14 -left-8 top-1/3 z-10' alt="" />
        {/* First Image */}
        <div className="absolute w-80 h-80  left-0 top-20">
          <img
            src="/assets/activities1.png"
            className="w-full transform rotate-[-10deg] "
            alt="Activities 1"
          />
        </div>
        {/* Second Image */}
        <div className="absolute w-96 h-96 left-56 top-16 ">
          <img
            src="/assets/activities2.png"
            className="w-full transform "
            alt="Activities 2"
          />
        </div>
        <img src="/assets/rightarrow.png" className='absolute w-14 -right-64 lg:-right-1 top-1/3 z-10' alt="" />
      </div>
    </div>
  );
};

export default Activities;
