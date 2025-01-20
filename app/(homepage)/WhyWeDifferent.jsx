import React from 'react'

const WhyWeDifferent = () => {
  return (
    <div className="grid grid-cols-2 bg-amber-500">
      <img 
        src="/assets/WhyWedifferent.png" 
        alt=""
        className=" w-full"
    />
      <div className="p-7">
        <div className="py-2 px-20">
            <h1 className="text-5xl font-semibold">WHY GIDA IS DIFFERENT</h1>
            <div className="py-2 px-6 border-l-4 border-black ">
                <div className="mb-4">
                    <h2 className="font-medium">Live Classes</h2>
                    <p>Our classes are always live and 100% practical based, with recordings always taken for reference</p>
                </div>

                <div className="mb-4">
                    <h2 className="font-medium">Recurring Bootcamps/Cohorts</h2>
                    <p>Always happening at least 2 times a year, if you miss a bootcamp, you can have the opportunity to join the next cohort of the bootcamp</p>
                </div>

                <div className="mb-4">
                    <h2 className="font-medium">Diversity Of Skillsets Been Taught</h2>
                    <p>We have a diversity of skillsets we teach. We train developers across both Web2 and Web3/Blockchain development; Crypto and Forex trading; DeFi and airdrop enthusiasts; and have special sub communities for them</p>
                </div>

                <div className="mb-4">
                    <h2 className="font-medium">Expert Help From Our Team/Alumni</h2>
                    <p>We have trained and graduated incredible set of students since 2020 who have gone on to become professionals in their fields. Together with our team, they are always ready to assist</p>
                </div>

                <div className="mb-4">
                    <h2 className="font-medium">Certifications</h2>
                    <p>All our bootcamps, cohorts and programs at GIDA comes with a certificate upon completion</p>
                </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default WhyWeDifferent
