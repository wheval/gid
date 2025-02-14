import Button from "@/components/ui/button"

const ReadyToLearn = () => {
  return (
    <div className="h-[50vh] lg::h-[70vh] bg-[url('/assets/ready_to_learn.png')] bg-cover py-12 px-4 lg:p-20 xl:pb-[100px] bg-center">
      <div className="h-full flex items-end justify-end text-white max-w-screen-2xl mx-auto">
        <div className=" flex flex-col">
          <p className='leading-[1] text-[2.5rem] lg:leading-normal lg:text-[3.125rem] font-semibold'>Ready To Learn?</p>
          <p className='font-lato'>Ready to Learn? Dive into the Heartbeat of the Future with GIDA</p>
          <div className='flex text-sm flex-row flex-wrap lflex-row gap-2 lg:gap-4 mt-10'>
            <button className="bg-[#900A15] hover:bg-[#a20b17] w-fit font-medium text-white px-[10px] py-[10px] md:px-[15px] md:py-[12px] rounded-full">Register for our bootcamps</button>
            <button className="bg-white hover:bg-[#ddd] w-fit text-primary font-medium px-[10px] py-[10px] md:px-[15px] md:py-[12px] rounded-full">Join our community</button>
            </div>
        </div>
      </div>
    </div>
    )
}

export default ReadyToLearn