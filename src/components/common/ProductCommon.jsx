import React from 'react'
import browseimg from '../../assets/images/browse2.png'
import { HiShare } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";

const ProductCommon = ({proH2 , proP , proImg , proPrice , proDis , showDeatils , cartClick}) => {





  return (
    <>

    <div className=' relative group'>

      <div className='w-full h-[446px] bg-[#3a3a3abc] opacity-0 group-hover:opacity-100 duration-[.4s] absolute top-0 left-0'>
        <div className='flex items-center mt-[150px] justify-center'>

                    <button onClick={cartClick} className='w-[150px] h-[48px] border  py-[12px] text-[16px] hover:bg-[#B88E2F] duration-[.4s]  hover:text-white  font-semibold font-popins  text-[#B88E2F]'>Add to cart</button>
        </div>
                    <div className='pt-[24px] flex justify-center items-center gap-[50px]'>
                       <button  onClick={showDeatils} className='text-[16px] flex items-center gap-[5px] font-semibold font-popins text-[#fff]'><FaRegEye /> View</button>
                          <button  className='text-[16px] flex items-center gap-[5px] font-semibold font-popins text-[#fff]'><FaRegHeart /> Like</button>  
                  

                    </div>

      </div>

    
    <div className='w-[285px] h-[446px] bg-[#F4F5F7]  group'>

        <div className='w-full h-[300px] overflow-hidden'><img src={proImg} alt="pro-img" /></div>
        <div className='pt-[16px] pl-[16px] pb-[30px] pr-[20px]'>

        <div>
            <h2 className='text-[20px]  truncate w-[200px]  font-semibold font-popins text-[#3A3A3A]'>{proH2}</h2>
            <p className='text-[16px] font-medium font-popins text-[#898989]'>{proP}</p>
        </div>
        <div>
            <h2 className='text-[20px] font-semibold font-popins text-[#3A3A3A]'>Rp {proPrice}</h2>
            <p className='text-[16px] font-normal font-popins text-[#B0B0B0]'>{proDis}</p>
            
            </div>

    </div>
        </div>
    
    
    </div>
    
    
    </>
  )
}

export default ProductCommon