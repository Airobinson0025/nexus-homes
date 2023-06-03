import React, { useState, useEffect } from 'react'
import { ValueCard } from './ValueCard'
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill} from 'react-icons/bs'
import { RxDot, RxDotFilled } from 'react-icons/rx'


const values = [
    
    {
        img: '/new-value.jpg',
        title: 'EXELLENCE',
        text: 'We are committed to delivering excellence in every aspect of our work, from the meticulous craftsmanship of our homes to the exceptional customer service we provide. Quality is at the heart of everything we do.'
    },
    {
        img: '/value-5.jpg',
        title: 'INNOVATION',
        text: 'We strive to be at the forefront of innovation, continuously pushing boundaries to create futuristic homes that embrace cutting-edge technology, sustainable practices, and visionary design.'
    },
    {
        img: '/new-value-2.jpg',
        title: 'INTEGRITY',
        text: 'We conduct business with the utmost integrity, treating our clients, partners, and employees with honesty, transparency, and respect. We are committed to building long-term relationships based on trust.'

    },
    {
        img: '/value-4.jpg',
        title: 'SUSTAINABLITY',
        text: 'We are deeply committed to sustainable practices, prioritizing environmentally friendly solutions in our design, construction, and operation of homes. We aim to minimize our ecological footprint and contribute positively to the environment for future generations.'
    }
]

const Values = () => {

    const [current, setCurrent] = useState(0)



    const length = values.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(current === length - 1 ? 0 : current + 1)
        }, 5000)
        return () => clearInterval(interval)
    }, [current, length])

    const goToSlide = (index) => {
        setCurrent(index)

    }
    


    
  return (
    <div className='flex flex-col items-center py-16 text-white bg-[#3C4741] mb-24 px-20'>
        <div className='text-center'>
            <h1 className='font-montserrat font-semibold text-[1.75rem] tracking-wider uppercase'>what we&apos;re all about</h1>
        </div>
        <div className='flex justify-center items-center h-[970px]'>
            <div className='pb-64 active:scale-90 transition duration-200'>
                <BsFillArrowLeftSquareFill className='text-4xl text-white cursor-pointer' onClick={prevSlide} />
            </div>
           <div className='w-4/5 mt-12'>
                {values.map((value, index) => {
                    return (
                        <div key={index} className={index === current ? 'opacity-100 transition duration-1000 ease-in-out' : 'opacity-0 transition duration-1000 ease-in-out'}>
                            {index === current && (
                                <ValueCard img={value.img} title={value.title} text={value.text} />
                            )}
                        </div>
                    )
                })}
            </div>
            <div className='pb-64 active:scale-90 transition duration-200'>
                <BsFillArrowRightSquareFill className='text-4xl text-white cursor-pointer' onClick={nextSlide} />
            </div>    
        </div>
        <div className='flex items-center justify-center'>
           {values.map((value, index) => {
                return (
                    <div key={index} className='mx-1'>
                        {index === current ? (
                            <RxDotFilled className='text-[2.25rem] text-white cursor-pointer' onClick={() => goToSlide(index)} />
                        ) : (
                            <RxDot className='text-[2.25rem] text-white cursor-pointer' onClick={() => goToSlide(index)} />
                        )}
                    </div>
                )
           })}
        </div>
    </div>
  )
}

export default Values