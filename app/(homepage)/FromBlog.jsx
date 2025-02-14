import { H2 } from '@/components/ui/typography'
import Image from 'next/image'
import Link from 'next/link'

const posts = [
    {
        image: '/assets/from_blog/01.png',
        tags: ['Crypto', 'News'],
        title: "Blockchain's mind-blowing potential",
        excerpt: 'GIDA Emerges Highest Stamp Collecting Community for the Quarter, Raises $9000 from Panvala...',
        link: '#'
    },
    {
        image: '/assets/from_blog/02.png',
        tags: ['Crypto', 'News'],
        title: 'Unlock the magic of pixels and code',
        excerpt: 'GIDA Emerges Highest Stamp Collecting Community for the Quarter, Raises $9000 from Panvala...',
        link: '#'
    },
    {
        image: '/assets/from_blog/03.png',
        tags: ['Crypto', 'News', 'Blockchain'],
        title: 'Unlock the Magic of pixels and code',
        excerpt: 'GIDA Emerges Highest Stamp Collecting Community for the Quarter, Raises $9000 from Panvala...',
        link: '#'
    },
]

const FromBlog = () => {
  return (
    <section className='w-full bg-primary text-white px-4 md:px-12 lg:px-20 flex flex-col items-center'>
        <div className='max-w-screen-2xl mx-auto py-16'>
            <div>
                <H2 className="mb-8 text-center">FROM OUR BLOG</H2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-4 xl:gap-x-12 gap-y-12'>
                {posts.map((post, index) => (
                    <div key={index} className={`${index === 0 ? "lg: lg:row-span-2" : ""} flex flex-col gap-2 lg:gap-4`}>
                        <div className={`overflow-hidden h-[200px] rounded-md lg:h-full ${index === 0 ? "lg:h-auto" : ""}`}>
                            <Link href={post.link}><Image 
                                src={post.image} 
                                width={500} 
                                height={300} 
                                alt={post.title}
                                className='object-cover hover:scale-105 transition-all h-full w-full'
                            /></Link>
                        </div>
                        <div className='flex flex-wrap gap-2'>
                            {post.tags.map((tag, i) => (
                                <Tag key={i}>{tag}</Tag>
                            ))}
                        </div>
                        <div>
                            <Link href={post.link}><h4 className='font-semibold hover:underline text-[1.5rem] lg:text-4xl'>{post.title}</h4></Link>
                            <p className='font-lato'>{post.excerpt}</p>
                            <a href={post.link} className='flex gap-2 mt-4 items-center font-lato lg:text-base'><div className='flex item-center hover:underline justify-center gap-2'>Read more <Image src="/assets/from_blog/arrow.svg" className="w-[16px] h-auto" width={38} height={38} alt=""/> </div></a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-8 text-right font-lato text-white">
                <Link
                    href="#"
                    className="inline-flex items-center font-clash gap-2 hover:text-primary"
                >
                    See all
                    <div className="rounded-full bg-white p-1">
                        <Image src="/assets/icons/arrow_right_white.svg" className="w-[25px] h-[25px]" width={38} height={38} alt=""/>
                    </div>
                </Link>
            </div>
        </div>
    </section>
  )
}

const Tag = ({children}) => {
    return (
        <span className='bg-white text-primary text-sm lg:text-base font-lato rounded-full px-2 py-0.5'>
            {children}
        </span>
    )
}

export default FromBlog