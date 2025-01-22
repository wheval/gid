import Image from "next/image"

const Partnership = () => {
  return (
    <div className="w-full bg-[#EDF0FC] px-8 py-12 lg:p-20">
        <div className="max-w-screen-2xl flex flex-col lg:flex-row gap-12 items-center justify-between mx-auto">
            <div className="flex flex-col gap-6 justify-start items-start lg:p-6">
                <h3 className="capitalize text-primary font-semibold lg:w-[20ch] text-[2.5rem] leading-[1.1] lg:leading-[1.25] lg:text-[3.125rem]">
                    EMBRACING PARTNERSHIPS AND COLLLABORATION
                </h3>
                <p className="font-lato lg:w-[50ch] text-[1.25rem]">
                We are actively looking forward to embracing partners and corporations who concur with our vision and are willing to impact lives.
                </p>
                <button className="bg-[#900A15] hover:bg-[#a20b17] text-white px-[21px] py-[12px] rounded-full">
                    Partner with us
                </button>
            </div>
            <div>
                <Image src="/assets/partnership.svg" alt="GIDA at Ambassador DAO hangout" width={677} height={629} />
            </div>
        </div>
    </div>
  )
}

export default Partnership