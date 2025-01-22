import Image from 'next/image'

const Supporters = () => {
  return (
    <div className='w-full lg:py-6 pt-16 lg:pt-9 bg-[#A20812] text-white text-center relative overflow-hidden'>
        <p className="font-semibold text-[2.5rem] mt-2 mb-4">OUR SUPPORTERS</p>
        <Image className='absolute left-[-60%] sm:left-0 top-[0] z-10' width={413} height={301} src="/assets/boxes.svg" />
        <Image className='absolute z-10 right-[-50%] sm:right-0 top-[-5%]' width={294} height={323} src="/assets/btc_shadow.svg" />
        <div className='relative w-full overflow-hidden'>
          <div className='flex gap-4 items-center lg:gap-6 animate-infinite-scroll'>
            <Image src="/assets/logos/snafrica.svg" width={200} height={67} />
            <Image src="/assets/logos/snfoundation.svg" width={200} height={67} />
            <Image src="/assets/logos/web3bridge.svg" width={200} height={67} />
            <Image src="/assets/logos/blockchainunn.svg" width={200} height={67} />
            <Image src="/assets/logos/yellowcard.svg" width={200} height={67} />
            <Image src="/assets/logos/arb.svg" width={200} height={67} />
            <Image src="/assets/logos/bitget.svg" width={200} height={67} />
            <Image src="/assets/logos/bybit.svg" width={160} height={50} />
            <Image src="/assets/logos/bitkeep.svg" width={200} height={67} />
            {/* Duplicate logos */}
            <Image src="/assets/logos/snafrica.svg" width={200} height={67} />
            <Image src="/assets/logos/snfoundation.svg" width={200} height={67} />
            <Image src="/assets/logos/web3bridge.svg" width={200} height={67} />
            <Image src="/assets/logos/blockchainunn.svg" width={200} height={67} />
            <Image src="/assets/logos/yellowcard.svg" width={200} height={67} />
            <Image src="/assets/logos/arb.svg" width={200} height={67} />
            <Image src="/assets/logos/bitget.svg" width={200} height={67} />
            <Image src="/assets/logos/bybit.svg" width={160} height={50} />
            <Image src="/assets/logos/bitkeep.svg" width={200} height={67} />
          </div>
        </div>
        <div className='overflow-hidden hidden sm:block mt-[20px] lg:mt-[50px] w-full'>
          <Image src="/assets/boxes_group.svg" width={1890} height={104} className='w-[200px] sm:w-[1890px] sm:h-[104px]' />
          <Image src="/assets/boxes_group_2.svg" width={1890} height={104} className='mt-[-45px] sm:w-[1890px] sm:h-[104px]' />
        </div>
    </div>
  )
}

export default Supporters