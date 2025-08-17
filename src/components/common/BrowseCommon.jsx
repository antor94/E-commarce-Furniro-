import React from 'react'
import Browseimg from '../../assets/images/browse1.png' 

const BrowseCommon = ({comimg , comh2}) => {
  return (
    <div className='w-[381px] pt-[62px]'> 
        <div><img src={comimg} alt="browse_img" /></div>
        <div className='text-center pt-[30px]'>
        <h2 className='text-[24px] font-semibold font-popins text-[#333333]'>{comh2}</h2>

        </div>





    </div>
  )
}

export default BrowseCommon