import React from 'react'
import ServicesCard from './ServicesCard'



const services = [
    {
        id:'1',
        img:'/services-img-9.jpg',
        title: 'Custom Home Design:',
        description: 'Transform your vision into a stunning reality with personalized design, expert craftsmanship, and meticulous attention to detail.'
    },
    {
        id:'2',
        img: '/services-img-7.jpg',
        title: 'Luxury Home Developments:',
        description:'Immerse yourself in meticulously crafted luxury communities, where exquisite design, exceptional amenities, and an elevated lifestyle converge.'
    },
    
    {
        id:'4',
        img: '/services-img-10.jpg',
        title: 'Interior Design and Styling:',
        description: 'Elevate your living space with our expert interior design and styling services, where we combine aesthetics, functionality, and attention to detail to create captivating and personalized interiors that reflect your unique taste and lifestyle.'
    }
]
const Services = () => {
  return (
    <div className='bg-stone-950 text-white py-20'>
        <div className='flex flex-col font-montserrat text-right mx-20 space-y-3'>
            <h1 className='font-semibold text-[2.25rem] tracking-wider uppercase'>Our Services</h1>
            <p className='text-[2.75rem] text-slate-300 tracking-wider'>Crafted To Perfection</p>
        </div>

        <div className='flex justify-evenly mt-24 mx-10'>
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
    </div>
  )
}

export default Services