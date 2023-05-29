import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Mission = () => {
  return (
    <div className='flex flex-row-reverse justify-evenly items-center my-36'>
        <div className='flex flex-col'>
            <Image src='/mission-hero-3.jpg' alt='Mission' width={500} height={500} className='rounded-md'/>
        </div>
        <div className='flex flex-col items-center'>
            <div className='py-2'>
                <h1 className='font-montserrat font-semibold text-[2.25rem] text-stone-950'>Our Mission</h1>
            </div>
            <div className='font-montserrat  text-[1.1rem] text-center text-stone-950 max-w-[500px] leading-10 tracking-wider py-3'>
                <p>Transforming luxury living through visionary design, cutting-edge technology, and unparalleled craftsmanship, Nexus Homes shapes the future of residential architecture with innovative, sustainable, and sophisticated homes.</p>
            </div>
            <div className='pt-6'>
                <Link href='/about'>
                    <button className='font-montserrat font-medium text-[1.1rem] text-white py-2 px-6 bg-stone-950 border-2 border-transparent hover:bg-white hover:border-2 hover:border-stone-950 hover:text-stone-950 rounded-md transition duration-300'>Learn More</button>
                </Link>
            </div>
            </div>
    </div>
  )
}

export default Mission