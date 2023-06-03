import Link from 'next/link'
import React from 'react'
import ServicesCard from './ServicesCard'



const services = [
    {
        id:'1',
        img:'/service-img-13.jpg',
        title: 'Custom Home Design and Construction:',
        description: 'Transform your vision into a stunning reality with personalized design, expert craftsmanship, and meticulous attention to detail.'
    },
    {
        id:'2',
        img: '/services-img-12.jpg',
        title: 'Luxury Home Developments:',
        description:'Immerse yourself in meticulously crafted luxury communities, where exquisite design, exceptional amenities, and an elevated lifestyle converge.'
    },
    
    {
        id:'3',
        img: '/new-value.jpg',
        title: 'Interior Design and Styling:',
        description: 'Elevate your living space with our expert interior design and styling services, where we combine aesthetics, functionality, and attention to detail.'
    }
]
const Services = () => {
  return (
    <div className='text-stone-950 py-16'>
        <div className='text-center mb-10 space-y-2'>
            <h1 className='font-montserrat font-semibold text-[2.15rem] uppercase tracking-wider'>What we can do for you</h1>
            <p className='font-montserrat text-[1.5rem] tracking-wide'>Our comprehensive range of services</p>
        </div>

        <div className='flex justify-center'>
            {services.map((service) => (
                <div key={service.id}>
                    <ServicesCard
                        id={service.id}
                        img={service.img}
                        title={service.title}
                        description={service.description}
                    />
                </div>
            ))}
        </div>

        <div className='text-center mt-20'>
            <Link href='/services' className='font-montserrat font-medium text-[1.1rem] py-3 px-6 border-2 border-stone-950 hover:text-white hover:border-2 hover:bg-stone-950 transition duration-200 rounded-sm tracking-wide'>Learn More</Link>
        </div>
    </div>
  )
}

export default Services