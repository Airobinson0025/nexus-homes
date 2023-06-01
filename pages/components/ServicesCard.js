import React from 'react'
import Image from 'next/image'

const ServicesCard = ({img, title, description}) => {
  return (
    <div className='flex flex-col space-y-4 font-montserrat max-w-[400px] h-[875px] mx-6 '>
      <div>
        <Image src={img} width={400} height={400} alt='image' className='rounded-sm' />
      </div>
      <div className='p-2 space-y-4 pt-8'>
        <h1 className='text-[1.5rem] font-semibold uppercase tracking-wider'>{title}</h1>
        <p className='text-[1rem] leading-7 tracking-wider'>{description}</p>
       </div> 
    </div>
  )
}

export default ServicesCard 
