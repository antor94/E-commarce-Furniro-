import React from 'react'
import seImg from '../../assets/images/Service-customer.png'

const ServiceCommon = ({srcImg , srcH , srcP}) => {
  return (
    <>
    
    
    <div className='flex gap-[10px] items-center' >

        <div><img src={srcImg} alt="" /></div>
        <div>
            <h3 className='text-[25px] font-semibold font-popins text-[#242424]'>{srcH}</h3>
            <h5 className='text-[20px] font-medium font-popins text-[#898989] '>{srcP}</h5>
        </div>

    </div>
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default ServiceCommon