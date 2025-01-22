
const WhyWeDifferent = () => {
  return (
    <div className="w-full bg-white p-2 py-12 lg:p-20">
      <div className="w-full grid lg:grid-cols-2 grid-rows-auto max-w-screen-2xl mx-auto rounded-[50px] overflow-hidden">
        <div className="sm:h-full h-[300px]">
          <img
            src="/assets/WhyWedifferent.png"
            alt=""
            className="w-full h-full object-cover"
                />
        </div>
        <div className="py-7 px-8 lg:px-0 bg-accent flex items-center justify-center h-full">
          <div className="py-2 lg:px-16 lg:ml-10 flex flex-col gap-4">
              <h1 className="text-3xl lg:text-[3.125rem] lg:leading-[1.5] lg:w-[10ch] font-semibold">Why GIDA Is Different</h1>
              <div className="px-4 lg:px-6 font-lato  border-l-4 border-black flex flex-col jusfify-between gap-4 lg:gap-8">
                  <div className="">
                      <h2 className="font-medium tracking-tight text-[1.25rem] lg:text-[1.5rem]">Live Classes</h2>
                      <p>Our classes are always live and 100% practical based, with recordings always taken for reference</p>
                  </div>
                  <div className="">
                      <h2 className="font-medium tracking-tight text-[1.25rem] lg:text-[1.5rem]">Recurring Bootcamps/Cohorts</h2>
                      <p>Always happening at least 2 times a year, if you miss a bootcamp, you can have the opportunity to join the next cohort of the bootcamp</p>
                  </div>
                  <div className="">
                      <h2 className="font-medium tracking-tight text-[1.25rem] lg:text-[1.5rem]">Diversity Of Skillsets Been Taught</h2>
                      <p>We have a diversity of skillsets we teach. We train developers across both Web2 and Web3/Blockchain development; Crypto and Forex trading; DeFi and airdrop enthusiasts; and have special sub communities for them</p>
                  </div>
                  <div className="">
                      <h2 className="font-medium tracking-tight text-[1.25rem] lg:text-[1.5rem]">Expert Help From Our Team/Alumni</h2>
                      <p>We have trained and graduated incredible set of students since 2020 who have gone on to become professionals in their fields. Together with our team, they are always ready to assist</p>
                  </div>
                  <div className="mb-2">
                      <h2 className="font-medium tracking-tight text-[1.25rem] lg:text-[1.5rem]">Certifications</h2>
                      <p>All our bootcamps, cohorts and programs at GIDA comes with a certificate upon completion</p>
                  </div>
      
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyWeDifferent
