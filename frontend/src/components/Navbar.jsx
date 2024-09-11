import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>

      <img src={assets.logo} alt="" className='w-36'/>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

       <NavLink to='/home' className='flex flex-col items-center gap-1'>
        <p>Home</p>
        <hr  className='w-2/4 border-none h-[1.5px] bg-gray-700'/>
       </NavLink>
       <NavLink to='/collection' className='flex flex-col items-center gap-1'>
        <p>COLLECTION</p>
        <hr  className='w-2/4 border-none h-[1.5px] bg-gray-700'/>
       </NavLink>
       <NavLink to='/about' className='flex flex-col items-center gap-1'>
        <p>ABOUT</p>
        <hr  className='w-2/4 border-none h-[1.5px] bg-gray-700'/>
       </NavLink>
       <NavLink to='/contact' className='flex flex-col items-center gap-1'>
        <p>CONTACT</p>
        <hr  className='w-2/4 border-none h-[1.5px] bg-gray-700'/>
       </NavLink>
      </ul>
    </div>
  )
}

export default Navbar
