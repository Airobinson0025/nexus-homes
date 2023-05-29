'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const Navbar = () => {

    const [background, setBackground] = useState('transparent')
    const [boxShadow, setBoxShadow] = useState('none')

    const path = usePathname()  

    const links = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/gallery', label: 'Gallery' },
        { href: '/services', label: 'Services' },
        { href: '/contact', label: 'Contact' },
    ]

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 50) {
                setBackground('white')
                setBoxShadow('0 2px 2px -2px rgba(0,0,0,.2)')
            } else {
                setBackground('transparent')
                setBoxShadow('none')
            }
        }
        window.addEventListener('scroll', changeColor)
    }, [])


  return (
    <div style={{backgroundColor: `${background}` , boxShadow: `${boxShadow}`}} className='fixed w-full flex items-center justify-between p-4 ease-in transition duration-200 z-10'>
        <div>
            <h1 className='font-montserrat font-bold text-[1.35rem]'>
                <Link href='/'>Nexus</Link>
            </h1>
        </div>
        <nav>
            <ul className='flex items-center space-x-12 font-montserrat font-semibold text-lg text-stone-950 tracking-wide'>
                { links.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href} className='relative'>
                            {link.href === path && ( 
                        
                            <motion.span layoutId='underline' animate={{scale: 1.2}} transition={{duration: 0.3}} initial={{scale: 1.1}} exit={{scale: 1.1}} className='absolute left-0 top-full block h-[1px] w-full bg-stone-950 rounded-md'/>
                        
                        )} {link.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
  )
}

export default Navbar