import NavLink from '@/components/NavLink'

const GidaDeveloperComSection = () => {
  return (
    <div className="px-8 py-10 lg:p-16">
      <div className="grid lg:grid-cols-2 grid-rows-auto mt-10 lg:mt-8 gap-8 max-w-screen-2xl mx-auto items-center">
        <div className="">
          <img
              src="/assets/GidaCommunityImage.png"
              alt=""
              className="w-3/4"
          />
        </div>
        <div className="lg:w-[44ch]">
          <h1 className="text-5xl font-semibold mb-7 leading-[1.3]">GIDA Developer Community</h1>
          <p className="mb-8 font-lato text-xl" style={{ color: 'rgba(0, 0, 0, 0.7)' }}>At GIDA, we pride ourself in the training of developers to become world class engineers and have organized & still actively organising bootcamps to that effect.</p>
          <p className="mb-8 font-lato text-xl" style={{ color: 'rgba(0, 0, 0, 0.7)' }}>We've got an active Web2 & Web3 developer community, with our devs active in various ecosystems - Starknet, EVM, Ethereum, Lisk, Base, etc.</p>
          <p className="mb-8 font-lato text-xl" style={{ color: 'rgba(0, 0, 0, 0.7)' }}>We teach HTML, CSS, Javascript, React to intending web developers, and for existing web devs looking to migrate to Blockchain development, we teach them Cairo and Solidity.</p>
          <div className="mt-8">
              <a
              href="/"
                  className="inline-block px-6 py-3 bg-red-900 rounded-full text-white text-lg"
              >
                  Join Developer Community
              </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GidaDeveloperComSection
