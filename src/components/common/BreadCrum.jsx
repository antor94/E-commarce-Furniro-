import React from 'react'
import breadimg from '../../assets/images/breadImg.png'
import breadlogo from '../../assets/images/breadcrumblogo.png'
import { Link } from 'react-router'
import { FaArrowRightLong } from 'react-icons/fa6'

const BreadCrum = ({breadLink , breadContent}) => {
  return (
    <>
    
           <div  style={{ background: `URL(${breadimg})`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`, }} className= 'pt-[61px] pb-[122px]'>
            <div className=''>

            <div className='pl-[900px]'>
            <div><img src={breadlogo} alt="breadlogo" /></div>
            <div className='flex'><h2 className='text-[48px] font-medium font-popins text-[#000]'>{breadContent}</h2></div>
            <div className='flex items-center gap-[10px]'>
            <Link className='text-[16px] font-medium font-poppins ' to={'/'}>Home </Link>
            <FaArrowRightLong />
            <Link className='text-[16px] font-light font-poppins ' to={breadLink}>{ breadContent}</Link>
            </div>
            </div>
            </div>

            </div>
    
    
    </>
  )
}

export default BreadCrum