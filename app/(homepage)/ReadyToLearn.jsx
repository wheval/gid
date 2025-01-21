
const ReadyToLearn = () => {
  return (
    <div className="h-[70vh] bg-[url('/assets/ready_to_learn.png')] bg-cover py-12 px-4 lg:p-20 xl:pb-[100px] bg-center">
      <div className="h-full flex items-end justify-end text-white max-w-screen-2xl mx-auto">
        <div className=" flex flex-col">
          <p className='text-[3.125rem] font-semibold'>Ready To Learn?</p>
          <p className='font-lato'>Ready to Learn? Dive into the Heartbeat of the Future with GIDA</p>
          <div className='flex flex-col lg:flex-row gap-4 mt-10'>
            <button className="bg-[#900A15] hover:bg-[#a20b17] font-medium text-white px-[15px] py-[12px] rounded-full">Register for our bootcamps</button>
            <button className="bg-white hover:bg-[#ddd] text-primary font-medium px-[15px] py-[12px] rounded-full">Join our community</button>
            </div>
        </div>
      </div>
    </div>
    )
}

export default ReadyToLearn