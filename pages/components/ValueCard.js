import React from 'react'
import Image from 'next/image'

export const ValueCard = ({img, title, text}) => {
  return (
    <div className='flex flex-col items-center space-y-12 '>
        <div className='mx-12 '>
            <Image src={img} alt={title} width={700} height={550} className='w-auto h-auto' />
        </div>
                      
        <div className='flex flex-col items-center text-center space-y-6 px-10'>
              <p className='font-montserrat font-bold text-[2.25rem]'>{title}</p>
              <p className='font-montserrat text-center text-[1.15rem] tracking-wider leading-8 w-2/4'>{text}</p>
        </div>
    </div>
  )
}