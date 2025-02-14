import { H2 } from '@/components/ui/typography'
import Image from 'next/image'

const Supporters = () => {
  return (
    <div className='w-full lg:py-6 pt-16 lg:pt-9 bg-[#A20812] text-white text-center relative overflow-hidden'>
        <H2 className="mt-2 mb-4">OUR SUPPORTERS</H2>
        <Image className='absolute left-[-60%] sm:left-0 top-[0] z-10' width={413} height={301} src="/assets/boxes.svg" />
        <Image className='absolute z-10 right-[-50%] sm:right-0 top-[-5%]' width={294} height={323} src="/assets/btc_shadow.svg" />
        <div className='relative w-full md:mt-8 overflow-hidden'>
          <div className='flex gap-4 items-center lg:gap-8 animate-infinite-scroll'>
            <Image src="/assets/logos/snafrica.svg" width={200} height={67} className='w-[150px] h-auto md:w-[200px] md:h-[67px]' />
            <Image src="/assets/logos/snfoundation.svg" width={200} height={67} className='w-[150px] h-auto md:w-[200px] md:h-[67px]' />
            <Image src="/assets/logos/web3bridge.svg" width={200} height={67} className='w-[150px] h-auto md:w-[200px] md:h-[67px]' />
            <Image src="/assets/logos/blockchainunn.svg" width={200} height={67} className='w-[150px] h-auto md:w-[200px] md:h-[67px]' />
            <Image src="/assets/logos/yellowcard.svg" width={200} height={67} className='w-[150px] h-auto md:w-[200px] md:h-[67px]' />
            <Image src="/assets/logos/arb.svg" width={200} height={67} className='w-[150px] h-auto md:w-[200px] md:h-[67px]' />
            <Image src="/assets/logos/bitget.svg" width={200} height={67} className='w-[150px] h-auto md:w-[200px] md:h-[67px]' />
            <Image src="/assets/logos/bybit.svg" width={160} height={50} className='w-[100px] h-auto md:w-[160px] md:h-[50px]' />
            <Image src="/assets/logos/bitkeep.svg" width={200} height={67} className='w-[150px] h-auto md:w-[200px] md:h-[67px]' />
            {/* Duplicate logos */}
            <Image src="/assets/logos/snafrica.svg" width={200} height={67} className='w-[150px] h-auto md:w-[200px] md:h-[67px]' />
            <Image src="/assets/logos/snfoundation.svg" width={200} height={67} className='w-[150px] h-auto md:w-[200px] md:h-[67px]' />
            <Image src="/assets/logos/web3bridge.svg" width={200} height={67} className='w-[150px] h-auto md:w-[200px] md:h-[67px]' />
            <Image src="/assets/logos/blockchainunn.svg" width={200} height={67} className='w-[150px] h-auto md:w-[200px] md:h-[67px]' />
            <Image src="/assets/logos/yellowcard.svg" width={200} height={67} className='w-[150px] h-auto md:w-[200px] md:h-[67px]' />
            <Image src="/assets/logos/arb.svg" width={200} height={67} className='w-[150px] h-auto md:w-[200px] md:h-[67px]' />
            <Image src="/assets/logos/bitget.svg" width={200} height={67} className='w-[150px] h-auto md:w-[200px] md:h-[67px]' />
            <Image src="/assets/logos/bybit.svg" width={160} height={50} className='w-[100px] h-auto md:w-[160px] md:h-[50px]' />
            <Image src="/assets/logos/bitkeep.svg" width={200} height={67} className='w-[150px] h-auto md:w-[200px] md:h-[67px]' />
          </div>
        </div>
        <div className='overflow-hidden mt-[20px] lg:mt-[50px] w-full'>
          <Image src="/assets/boxes_group.svg" width={1890} height={104} className='max-w-[1890px] w-[1890px] h-[104px]' />
          <Image src="/assets/boxes_group_2.svg" width={1890} height={104} className='max-w-[1890px] mt-[-45px] w-[1890px] h-[104px]' />
        </div>
    </div>
  )
}

export default Supporters