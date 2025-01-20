import React from 'react'

const GidaDeveloperComSection = () => {
  return (
    <div className="grid grid-cols-2 mt-8">
      <div className="py-8 ">
        <img 
            src="/assets/GidaCommunityImage.png" 
            alt="" 
            className="w-3/4"
        />
      </div>
      <div className="px-28">
        <h1 className="text-5xl font-semibold mb-7">GIDA Developer community</h1>
        <p className="mb-8 text-xl">At GIDA, we pride ourself in the training of developers to become world class engineers and have organized & still actively organising bootcamps to that effect.</p>
        <p className="mb-8 text-xl">We’ve got an active Web2 & Web3 developer community, with our devs active in various ecosystems - Starknet, EVM, Ethereum, Lisk, Base, etc.</p>
        <p className="mb-8 text-xl">We teach HTML, CSS, Javascript, React to intending web developers, and for existing web devs looking to migrate to Blockchain development, we teach them Cairo and Solidity.</p>
      </div>
    </div>
  )
}

export default GidaDeveloperComSection
