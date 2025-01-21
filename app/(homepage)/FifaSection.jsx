import Image from "next/image"

const FifaSection = () => {
return (
    <div className="px-8 py-12 lg:p-24 bg-accent h-[70vh] lg:h-[100vh] bg-[url('/assets/box_yellow.svg')] flex flex-col items-center justify-center bg-no-repeat bg-cover">
            <div className="flex flex-col items-center justify-center gap-6 max-w-screen-2xl mx-auto font-lato text-center">
                    <Image src="/assets/carbon_quotes.svg" height={148} width={148}  alt="" />
                    <p className="text-[1.5rem] lg:text-[2.5rem] font-semibold">Financial inclusion for all (FIFA) - that&apos;s our goal at GIDA</p>
                    <div>
                            <p className="text-[1.25rem] font-semibold">Okoye Kevin Chibuoyim</p>
                            <p><span className="text-[rgba(0,0,0,0.7)]">Founder &amp; CEO, GIDA</span></p>
                    </div>
            </div>
    </div>
)
}

export default FifaSection