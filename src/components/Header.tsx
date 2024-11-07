import React from 'react'
import Link from 'next/link'
import {FaGlobe, } from 'react-icons/fa'
const Header = () => {
  return (
    <div>
        <div>
          <header className='flex justify-between items-center text-base bg-black 
           h-10 md:h-12 md:text-lg transition-shadow duration-300 ease-in-out cursor-pointer hover:shadow-md hover:shadow-white'>
              <h1 className='font-bold flex ml-1 md:ml-2 items-center text-[0.8rem]
              md:text-[1rem] transition-transform duration-300 hover:scale-105'>Father Of The Nation <FaGlobe className="ml-1 text-lg md:text-xl"/></h1>
            <nav >
              <ul className='flex list-none mr-2 md:mr-3 gap-2 md:gap-3 font-semibold'>
                <Link href="/">
                  <li className='transition-transform duration-300 text-[0.80rem]
                md:text-base hover:scale-105'>Home</li>
                </Link>
                <Link href='/about'>
                <li className='transition-transform duration-300 text-[0.80rem]
                md:text-base hover:scale-105'>About</li>
                </Link>
                <Link href='/contact'>
                <li className='transition-transform duration-300 text-[0.80rem]
                md:text-base hover:scale-105'>Contact</li>
                </Link>
              </ul>
            </nav>
          </header>
        </div>
    </div>
  )
}

export default Header