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
            <button className='mr-4 h-14 w-14 relative' onClick={toggleMenu}>
                <div className={(menuIsOpen? 'hamburgerCrossed' : 'hamburgerStacked') + ' h-1 w-4/5 absolute rounded-lg bg-gray-700 top-1/3 left-1/2'} ></div>
                {/* <div className={(menuIsOpen? 'hamburgerCrossed' : 'hamburgerStacked') + ' h-2 w-4/5 absolute rounded-lg bg-gray-700 top-1/2 left-1/2'} ></div> */}
                <div className={(menuIsOpen? 'hamburgerCrossed' : 'hamburgerStacked') + ' h-1 w-4/5 absolute rounded-lg bg-gray-700 top-2/3 left-1/2'} ></div>
            </button>
            <div className={(menuIsOpen? 'w-[12rem] opacity-100' : 'w-0 opacity-0') + ' pb-5 h-fit absolute flex justify-center bg-white top-16 right-0 rounded-bl-lg z-10 transition-all ease-in duration-200 overflow-hidden'}>
                <ul className='pt-6 flex flex-col gap-6 text-center'>
                    <li><Link to='/' className='px-4 py-2 text-2xl font-bold text-blue-800 hover:bg-gray-200 rounded-lg'>Home</Link></li>
                    <li><Link to='/about' className='px-4 py-2 text-2xl font-bold text-blue-800 hover:bg-gray-200 rounded-lg' href="">About</Link></li>
                    <li><Link to='/maps' className='px-4 py-2 text-2xl font-bold text-blue-800 hover:bg-gray-200 rounded-lg' href="">Maps</Link></li>
                    <li><Link to='/settings' className='px-4 py-2 text-2xl font-bold text-blue-800 hover:bg-gray-200 rounded-lg' href="">Settings</Link></li>
                </ul>
            </div>
        </div>


    </>
  )
}
