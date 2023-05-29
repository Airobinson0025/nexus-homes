import React from 'react'

const ProcessCard = ({name, title, description, video}) => {
  return (
    <div className='flex justify-evenly h-[600px] '>
        <div className='flex flex-col w-2/4 font-montserrat space-y-4 pt-32 pl-4'>
            <h1 className='font-bold text-[2.35rem] tracking-wide'>{name}</h1>
            <h2 className='font-semibold text-[1.5rem]'>{title}:</h2>
            <p className='text-[1rem] leading-9 tracking-wide'>{description}</p>
        </div>
        <div className='ml-12'>
            <video autoPlay loop muted playsInline className='h-full'>
                <source src={video} type='video/mp4'/>
            </video>
        </div>
    </div>
  )
}

export default ProcessCard