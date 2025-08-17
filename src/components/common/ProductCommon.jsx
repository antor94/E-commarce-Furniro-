import React from 'react'
import browseimg from '../../assets/images/browse2.png'

const ProductCommon = ({proH2 , proP , proImg , proPrice , proDis}) => {
  return (
    <>
    
    <div className='w-[285px] h-[446px] bg-[#F4F5F7] relative group:'>

        <div className='w-full h-[300px] overflow-hidden'><img src={proImg} alt="pro-img" /></div>
        <div className='pt-[16px] pl-[16px] pb-[30px] pr-[20px]'>

        <div>
            <h2 className='text-[24px] font-semibold font-popins text-[#3A3A3A]'>{proH2}</h2>
            <p className='text-[16px] font-medium font-popins text-[#898989]'>{proP}</p>
        </div>
        <div>
            <h2 className='text-[20px] font-semibold font-popins text-[#3A3A3A]'>{proPrice}</h2>
            <p className='text-[16px] font-normal font-popins text-[#B0B0B0]'>{proDis}</p>
            
            </div>

    </div>
        </div>
    
    
    
    
    </>
  )
}

export default ProductCommon