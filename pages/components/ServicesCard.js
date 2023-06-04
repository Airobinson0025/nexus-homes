import React from 'react'
import Image from 'next/image'

const ServicesCard = ({id, img, title, description}) => {
  return (
    <div className='flex flex-col items-center font-montserrat w-[520px]'>
      <div>
        <Image src={img} width={520} height={520} alt='image' className='w-auto h-auto' />
      </div>
      <div className='flex flex-col text-center space-y-6 mt-16 w-[400px]'>
        <h1 className='text-[1.35rem] font-semibold tracking-wide'>{title}</h1>
        <p className='text-[1.1rem] leading-8 tracking-wider'>{description}</p>
       </div>
    </div>
  )
}

export default ServicesCard 
