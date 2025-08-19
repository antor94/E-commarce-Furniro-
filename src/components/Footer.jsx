import React from 'react'
import footerImg from '../assets/images/footerimg.png'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <>
    
    <section id='footer' className='pt-[48px]'>
        <div className="container">
            <div id='footer-row' className='flex justify-around'>
                    <div>

                    <Link to={'/'} ><img src={footerImg} alt="footer-img" /></Link>
                    <div className='w-[285px] pt-[50px]'><p className='text-[16px] font-normal font-popins text-[#9F9F9F]'>400 University Drive Suite 200 Coral Gables, <span>FL 33134 USA</span></p></div>
                    </div>

                    <div className='flex flex-col'>
                        <p className='text-[16px] font-medium font-popins text-[#9F9F9F]'>Links</p>
                        <div className='pt-[55px] flex flex-col gap-[46px]'>

                        <Link className='text-[16px] font-medium font-popins text-[#000]' to={'/'} >Home</Link>
                        <Link className='text-[16px] font-medium font-popins text-[#000]' to={'/'} >Shop</Link>
                        <Link className='text-[16px] font-medium font-popins text-[#000]' to={'/'} >About</Link>
                        <Link className='text-[16px] font-medium font-popins text-[#000]' to={'/contact'} >Contact</Link>
                        </div>
                    </div>
                              <div className='flex flex-col'>
                        <p className='text-[16px] font-medium font-popins text-[#9F9F9F]'>Help</p>
                        <div className='pt-[55px] flex flex-col gap-[46px]'>

                        <Link className='text-[16px] font-medium font-popins text-[#000]' to={'/'} >Payment Options</Link>
                        <Link className='text-[16px] font-medium font-popins text-[#000]' to={'/'} >Returns</Link>
                        <Link className='text-[16px] font-medium font-popins text-[#000]' to={'/'} >Privacy Policies</Link>
                        </div>
               
                    </div>
                                 <div className='w-[286px] flex flex-col'>
                        <p className='text-[16px] font-medium font-popins text-[#9F9F9F]'>Newsletter</p>
                        <div className='flex gap-[10px] pt-[53px]'>
                            <div className='w-[200px] border-b'><input className='w-[175px] border-none outline-none pb-[5px] text-[14px] font-normal font-popins text-[#9F9F9F]' type="text" placeholder='Enter Your Email Address' /></div>
                       <div className='w-[75px] border-b pb-[5px]'><button className='text-[14px] font-medium font-popins text-[#000]'>SUBSCRIBE</button></div>
                        </div>
                        
               
                    </div>
            </div>
        </div>
    </section>
    
    
    
    </>
  )
}

export default Footer