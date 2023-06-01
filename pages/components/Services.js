import Link from 'next/link'
import React from 'react'
import ServicesCard from './ServicesCard'



const services = [
    {
        id:'1',
        img:'/service-img-13.jpg',
        title: 'Custom Home Design:',
        description: 'Transform your vision into a stunning reality with personalized design, expert craftsmanship, and meticulous attention to detail.'
    },
    {
        id:'2',
        img: '/services-img-12.jpg',
        title: 'Luxury Home Developments:',
        description:'Immerse yourself in meticulously crafted luxury communities, where exquisite design, exceptional amenities, and an elevated lifestyle converge.'
    },
    
    {
        id:'4',
        img: '/services-img-11.jpg',
        title: 'Interior Design and Styling:',
        description: 'Elevate your living space with our expert interior design and styling services, where we combine aesthetics, functionality, and attention to detail to create captivating and personalized interiors that reflect your unique taste and lifestyle.'
    }
]
const Services = () => {
  return (
    <div className='bg-stone-950 text-white py-10'>
        <div className='flex flex-col font-montserrat text-right mx-20'>
            <h1 className='font-semibold text-[1.75rem] tracking-wider uppercase'>Our Services</h1>
            <p className='text-[2.25rem] text-slate-300 tracking-wider'>Crafted To Perfection</p>
        </div>

        <div className='flex justify-evenly mt-24 mx-4'>
            {services.map((service) => (
                <div key={service.id}>
                    <ServicesCard
                        img={service.img}
                        title={service.title}
                        description={service.description}
                    />
                </div>
            ))}
        </div>

        <div className='text-center mt-20'>
            <Link href='/services' className='font-montserrat text-semibold text-[1.1rem] py-2 px-4 border-2 border-white hover:bg-white hover:text-stone-950 transition duration-200 rounded-sm tracking-wide'>Learn More</Link>
        </div>
    </div>
  )
}

export default Services