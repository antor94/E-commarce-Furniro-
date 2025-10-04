import React from 'react'

import aboutImg from '../../assets/images/aboutImg1.png'
import { Link } from 'react-router'

const AboutCommon = ({aboutImg , aboutH2 , aboutP}) => {
  return (
    <div className='w-[820px] h-[794px]'>

        <div className='w-full h-[500px]'><img src={aboutImg} alt="" /> </div>

        <h1 className='text-[30px] font-medium font-popins text-[#000]'>Going all-in with millennial design</h1>

        <div className='w-[817px] mt-[12px] mb-[30px]'><p className='text-[15px] font-normal font-popins text-[#9F9F9F]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p></div>


<div className='pb-[12px] border-b w-[90px]'><Link  to={'/'} className='text-[16px] font-normal font-popins text-[#000]' >Read more</Link></div>



    </div>
  )
}

export default AboutCommon