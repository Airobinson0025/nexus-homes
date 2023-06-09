import React from 'react'
import Image from 'next/image'

export const ValueCard = ({img, title, text}) => {
  return (
    <div className='flex flex-col items-center space-y-16'>
        <div className='mx-20'>
            <Image src={img} alt={title} width={700} height={550} className='w-auto h-auto rounded-sm' priority/>
        </div>
                      
        <div className='flex flex-col items-center text-center space-y-6 px-10'>
              <p className='font-montserrat font-semibold text-[1.75rem] tracking-wider'>{title}</p>
              <p className='font-montserrat text-center text-[1.15rem] tracking-wider leading-9 w-3/5'>{text}</p>
        </div>
    </div>
  )
}
