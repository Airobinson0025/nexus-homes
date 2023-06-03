import React from 'react'
import StatCard from './StatCard'
import { BsTrophy, BsClockHistory } from 'react-icons/bs'
import { AiOutlineHome } from 'react-icons/ai'


const stats = [
    {
        id: 1,
        icon: <BsClockHistory size={45} color='white' />,
        content: '10+ Years of Experience'
    },
    {
        id: 2,
        icon: <AiOutlineHome size={45} color='white' />,
        content: 'Over 250 Happy Homeowners'
    },
    {
        id: 3,
        icon: <BsTrophy size={45} color='white' />,
        content: '17 Award-Winning Designs'
    }
]

const Stats = () => {
  return (
    <div className='flex justify-evenly items-center mb-10 bg-stone-950 h-[320px]'>
        {stats.map((stat) => (
            <div key={stat.id}>
                <StatCard
                icon={stat.icon}
                content={stat.content}
                 />
            </div>
        ))}
    </div>
  )
}

export default Stats