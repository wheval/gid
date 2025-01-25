import Image from "next/image";

const WhoAreWe = () => {
return (
    <div className='w-full relative overflow-hidden px-4 py-10 pb-20 lg:pb-32 lg:px-20 lg:py-16 flex items-center justify-center bg-[#A20812] text-white mt-[-3px]'>
            <div className="max-w-[1440px] mb-4 lg:mb-4 mx-auto w-full flex flex-col md:flex-row items-stretch gap-8 md:gap-12">
                    <div className='flex flex-col items-start gap-6 flex-1'>
                            <div className='flex flex-col gap-4'>
                                    <h2 className='font-semibold capitalize text-[2.5rem]'>WHO ARE WE?</h2>
                                    <p className='font-lato lg:lg:text-[1.25rem] max-w-[47ch] tracking-[1%]'>GIDA™ is an Edu-Tech platform & academy empowering the next generation of tech talents. We train people via both virtual and IRL sessions aimed at raising blockchain experts, Web3 users and seasoned builders.</p>  
                    
                                    <p className='font-lato lg:text-[1.25rem] max-w-[44ch] tracking-[1%]'>We&apos;ve got thriving developer community, traders community, DEFI community and other sub-communities relevant in web3.</p>
                            </div>
                            <div className='flex items-center lg:gap-12 gap-4 mt-3'>
                                    <div className='flex flex-col gap-0 items-start'>
                                            <p className='xl:text-[6rem] text-[3rem] leading-none font-[family-name:var(--font-abhaya-libre)]'>5k+</p>
                                            <p className='font-lato text-sm lg:text-base font-light'>Community Members</p>
                                    </div>
                                    <div className='flex flex-col gap-0 items-start'>
                                            <p className='xl:text-[6rem] text-[3rem] leading-none font-[family-name:var(--font-abhaya-libre)]'>10+</p>
                                            <p className='font-lato text-sm lg:text-base font-light'>Bootcamps</p>
                                    </div>
                                    <div className='flex flex-col gap-0 items-start'>
                                            <p className='xl:text-[6rem] text-[3rem] leading-none font-[family-name:var(--font-abhaya-libre)]'>5</p>
                                            <p className='font-lato text-sm lg:text-base font-light'>IRL Events</p>
                                    </div>
                            </div>
                            <div className='flex items-center gap-x-4 mt-4'>
                                    <button className="bg-white hover:bg-[#ddd] text-primary font-semibold px-[21px] py-[12px] rounded-full">About Us</button>
                                    <button className="bg-transparent border-white border hover:bg-[#5d5757] capitalize text-white font-semibold px-[21px] py-[12px] rounded-full">Our community</button>
                            </div>
                    </div>
                    <div className='flex-1'>
                            <Image 
                                    src="/assets/snapshot.png" 
                                    alt="GIDA Platform Snapshot" 
                                    className='w-full h-full object-contain' 
                                    width={804} 
                                    height={707}
                                    priority
                            />
                    </div>
            </div>
            <Image src="/assets/boxes_group_3.svg" width={170} height={64} className='absolute left-0 -bottom-2' />
    </div>
  );
};

export default WhoAreWe;
