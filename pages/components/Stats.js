import React from 'react'
import StatCard from './StatCard'
import { BsTrophy, BsEmojiSmileFill, BsClockHistory } from 'react-icons/bs'


const stats = [
    {
        id: 1,
        icon: <BsClockHistory size={40} color='3C4741' />,
        content: '10+ Years of Experience'
    },
    {
        id: 2,
        icon: <BsEmojiSmileFill size={40} color='3C4741' />,
        content: 'Over 250 Happy Homeowners Served'
    },
    {
        id: 3,
        icon: <BsTrophy size={40} color='3C4741' />,
        content: '17 Award-Winning Designs'
    }
]

const Stats = () => {
  return (
    <div className='flex justify-evenly my-36'>
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