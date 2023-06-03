import React from 'react'

const StatCard = ({icon, content}) => {
  return (
    <div className='flex flex-col items-center w-[400px] space-y-8 text-white'>
        <i>{icon}</i>
        <h1 className='font-montserrat font-semibold text-[1.5rem] text-center tracking-wider uppercase'>{content}</h1>
    </div>
  )
}

export default StatCard

