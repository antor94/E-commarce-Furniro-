import React, { useEffect, useState } from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router'
import { TbUserExclamation } from "react-icons/tb";
import { LuSearch } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import Cart from '../components/Cart';
import axios from 'axios';

const Navbar = () => {



      // -----------button-click
  const [cart , setCart] = useState(false)
const handleClose = ()=>{
  setCart(!cart)
}



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
              <li><Link className='text-[18px] hover:text-[#B88E2F] font-medium font-popins text-[#000]' to={'/allProduct'}>Shop</Link></li>
              <li><Link className='text-[18px] hover:text-[#B88E2F] font-medium font-popins text-[#000]' to={'/'}>About</Link></li>
              <li><Link className='text-[18px] hover:text-[#B88E2F] font-medium font-popins text-[#000]' to={'/contact'}>Contact</Link></li>
            </ul>
          </div>
          {/* ------------- nav-icons */}
          <div className='flex items-center gap-[45px]'>

          <div><Link className='text-[28px] hover:text-[#B88E2F] ' to={'/account'} ><TbUserExclamation /></Link></div>
          <Link to={'/'} className='text-[28px] hover:text-[#B88E2F] '><LuSearch /></Link>
          <button className='text-[28px] relative hover:text-[#B88E2F] '><FaRegHeart /><span className=' absolute top-[-7px] right-[-11px] w-[20px] text-[14px] font-normal font-popins text-[#000]  h-[20px] rounded-full flex justify-center items-center bg-red-100'>0</span></button>
          <button onClick={()=>setCart(!cart)} className='text-[28px] hover:text-[#B88E2F] '><BsCart3 /></button>
        </div>
          </div>
      </div>
    </section>

    {
      cart&&
    <Cart closeCart={handleClose} />
    }

    
    
    
    
    
    
    </>
  )
}

export default Navbar