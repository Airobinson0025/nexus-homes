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
        title: 'Custom Interior Design and Styling:',
        description: 'Elevate your living space with our expert interior design and styling services, where we combine aesthetics, functionality, and attention to detail.'
    }
]
const Services = () => {
  return (
    <div className='text-[#414b58] my-36 mx-20'>
        <div className='text-right mb-6'>
            <h1 className='font-montserrat font-bold text-[2rem] uppercase'>Services we offer</h1>
        </div>

        <div className='flex justify-between mt-16'>
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
    </div>
  )
}

export default Services