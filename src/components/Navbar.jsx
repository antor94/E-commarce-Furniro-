import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router'
import { TbUserExclamation } from "react-icons/tb";
import { LuSearch } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
    
    
    <section id='navbar'>
      <div className="container">
        <div id='navbar-row' className='flex justify-between items-center py-[30px]'>
          {/* ------------- logo */}
          <Link to={'/'} className='w-[185px]'><img src={logo} alt="main-logo" /></Link>
          {/* ------------- nav-items */}
          <div>
            <ul className='flex items-center gap-[75px]'>
              <li><Link className='text-[18px] hover:text-[#B88E2F] font-medium font-popins text-[#000]' to={'/'}>Home</Link></li>
              <li><Link className='text-[18px] hover:text-[#B88E2F] font-medium font-popins text-[#000]' to={'/'}>Shop</Link></li>
              <li><Link className='text-[18px] hover:text-[#B88E2F] font-medium font-popins text-[#000]' to={'/'}>About</Link></li>
              <li><Link className='text-[18px] hover:text-[#B88E2F] font-medium font-popins text-[#000]' to={'/'}>Contact</Link></li>
            </ul>
          </div>
          {/* ------------- nav-icons */}
          <div className='flex items-center gap-[45px]'>

          <div><Link className='text-[28px] hover:text-[#B88E2F] ' to={'/'} ><TbUserExclamation /></Link></div>
          <button className='text-[28px] hover:text-[#B88E2F] '><LuSearch /></button>
          <button className='text-[28px] hover:text-[#B88E2F] '><FaRegHeart /></button>
          <button className='text-[28px] hover:text-[#B88E2F] '><BsCart3 /></button>
        </div>
          </div>
      </div>
    </section>
    
    
    
    
    
    
    </>
  )
}

export default Navbar