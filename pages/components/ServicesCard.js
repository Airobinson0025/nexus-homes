import React from 'react'
import Image from 'next/image'

const ServicesCard = ({id, img, title, description}) => {
  return (
    <div className='flex flex-col items-center space-y-12 font-montserrat mt-16 px-4 rounded-xl w-[400px] h-[850px]'>
      <div>
        <Image src={img} width={320} height={300} alt='image' className='rounded-sm' />
      </div>
      <div className='flex flex-col space-y-4 px-4 text-center '>
        <h1 className='font-semibold text-[2.25rem] text-white'>{id}.</h1>
        <h1 className='text-[1.25rem] font-semibold uppercase tracking-wider'>{title}</h1>
        <p className='text-[1rem] leading-7 tracking-wider'>{description}</p>
       </div> 
    </div>
  )
}

export default ServicesCard 
