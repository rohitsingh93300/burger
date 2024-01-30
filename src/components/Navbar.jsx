import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import burger_logo from '../assets/icons8-burger.png'

const Navbar = () => {
    let Links =[
        {name:"HOME",link:"/"},
        {name:"SERVICE",link:"/service"},
        {name:"ABOUT",link:"/about"},
        {name:"CONTACT",link:"contact"},
      ];
      let [open, setOpen] =useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-10'>
           <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            {/* logo section */}
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                <img src={burger_logo} className='w-10 h-10' alt="logo" />
                {/* <BookOpenIcon className='w-7 h-7 text-blue-600'/> */}
                <span className='text-orange'>BURGER</span>
            </div>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
            {/* linke items */}
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-100] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
                    </li>))
                }
            {/* button */}
                <button className='btn bg-orange-500 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Order Now</button>
            </ul>
                <UserCircleIcon className='w-7 h-7 absolute md:static text-orange-500 right-[80px] top-5'/>
            
           </div>
        </div>
    );
};

export default Navbar;