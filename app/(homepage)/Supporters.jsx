import Image from 'next/image'
import React from 'react'

const Supporters = () => {
  return (
    <div className='w-full p-6 pt-9 h-[50vh] bg-[#A20812] text-white text-center relative'>
        <p className="font-semibold text-[2.5rem]">OUR SUPPORTERS</p>
        <Image className='absolute left-0 top-[0] z-10' width={413} height={301} src="/assets/boxes.svg" />
        <Image className='absolute z-10 right-0 top-[-5%]' width={294} height={323} src="/assets/btc_shadow.svg" />
        <div className='flex gap-4 items-center mt-4'>
          <Image src="/assets/logos/snafrica.svg" width={200} height={67} />
          <Image src="/assets/logos/snfoundation.svg" width={200} height={67} />
          <Image src="/assets/logos/web3bridge.svg" width={200} height={67} />
          <Image src="/assets/logos/blockchainunn.svg" width={200} height={67} />
          <Image src="/assets/logos/yellowcard.svg" width={200} height={67} />
          <Image src="/assets/logos/arb.svg" width={200} height={67} />
          <Image src="/assets/logos/bitget.svg" width={200} height={67} />
        </div>
        <div className='overflow-hidden mt-[50px] w-full'>
          <Image src="/assets/boxes_group.svg" width={1890} height={104} />
          <Image className='mt-[-35px]' src="/assets/boxes_group_2.svg" width={1890} height={104} />
        </div>
    </div>
  )
}

export default Supporters