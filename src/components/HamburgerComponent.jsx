import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './hamburgerAnimations.css'

export default function HamburgerComponent() {

    const location = useLocation();

    // mobile navigation menu opens and closes when hamburger button is pressed
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    const outsideClickClosesMenu = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setMenuIsOpen(false);
        }
      }

      useEffect(() => {
        if (menuIsOpen) {
          document.addEventListener('mousedown', outsideClickClosesMenu);
        } else {
          document.removeEventListener('mousedown', outsideClickClosesMenu);
        }
        return () => {
          document.removeEventListener('mousedown', outsideClickClosesMenu);
        }
      }, [menuIsOpen])

      useEffect(() => {
        setMenuIsOpen(false)
      }, [location.pathname])

  return (
    <>
        <div ref={menuRef} className='flex lg:hidden'>
            <nav className='h-20 p-4'>
                <div className='h-full w-16 flex flex-col justify-between cursor-pointer' onClick={toggleMenu}>
                    <div className={(menuIsOpen? 'hamburgerCrossed' : 'hamburgerStacked') + ' h-2 rounded-lg bg-blue-800'} ></div>
                    <div className={(menuIsOpen? 'hamburgerCrossed' : 'hamburgerStacked') + ' h-2 rounded-lg bg-blue-800'} ></div>
                    <div className={(menuIsOpen? 'hamburgerCrossed' : 'hamburgerStacked') + ' h-2 rounded-lg bg-blue-800'} ></div>
                </div>
            </nav>
            <div className={(menuIsOpen? 'w-[12rem] opacity-100' : 'w-0 opacity-0') + ' pb-5 h-fit absolute flex justify-center bg-white top-28 right-0 rounded-bl-lg z-10 transition-all ease-in duration-200 overflow-hidden'}>
                <nav className='pt-6 flex flex-col gap-2 text-center'>
                    <Link to='/' className='px-4 py-2 text-2xl font-bold text-blue-800 hover:bg-gray-200 rounded-lg'>Home</Link>
                    <Link to='/about' className='px-4 py-2 text-2xl font-bold text-blue-800 hover:bg-gray-200 rounded-lg' href="">About</Link>
                    <Link to='/contact' className='px-4 py-2 text-2xl font-bold text-white bg-gradient-to-r from-blue-700 to-blue-500 hover:shadow-md hover:text-gray-200 rounded-lg shadow-sm shadow-gray-800' href="">Contact</Link>
                </nav>
            </div>
        </div>


    </>
  )
}
