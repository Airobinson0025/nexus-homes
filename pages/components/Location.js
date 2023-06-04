import React from 'react'
import MapBox from './MapBox'
import { BsTelephone } from 'react-icons/bs'
import { AiFillFacebook } from 'react-icons/ai'

const Location = () => {
  return (
    <div className='flex items-center bg-[#414b58] m-0'>
        <div>
            <MapBox />
        </div>

        <div className='flex flex-col items-center font-montserrat text-white space-y-3 h-full w-3/6 px-16'>
            <div className='space-y-2 text-center py-10'>
                <h1 className='font-semibold text-[2rem] text-center uppercase'>Come Visit Us</h1>
                <p className='text-[1rem] leading-8 tracking-wide'>Discover Nexus Homes prime location in the vibrant heart of Downtown Atlanta, offering the perfect blend of urban convenience and natural beauty for a truly exceptional living experience.</p>
            </div>
            <div className='space-y-3 py-4 text-center'>
                <h1 className='font-semibold text-[2rem] uppercase'>Nexus Homes</h1>
                <p className='font-medium text-[1rem] tracking-wide'>123 Futuristic Avenue</p>
                <p className='font-medium text-[1rem] tracking-wides'>Atlanta, GA 30033</p>
                </div>
            <div className='flex items-center space-x-2 font-medium'>
                <BsTelephone size={25} color='white' />
                <p>+1 (555) 123-4567</p>
            </div>
            <div className='flex items-center space-x-2 font-medium'>
                <AiFillFacebook size={30} color='white' />
                <p>@NexusHomesLuxuryLiving</p>
            </div>
            <div className='pt-4'>
                <button className='font-medium text-[1rem] text-white border-2 border-white py-2 px-6 rounded-sm hover:bg-white hover:text-stone-950 transition duration-200 tracking-wider'>Get directions</button>
            </div>
        </div>
    </div>
  )
}

export default Location