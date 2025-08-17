import React from 'react'
import bannerbg from '../assets/images/banner_img.jpg'

const Banner = () => {
  return (
    <>
    
    <section  style={{
          background: `URL(${bannerbg})`, backgroundRepeat: `no-repeat`,  backgroundSize: `cover`,}} id='banner' className='h-[716px] relative'>
        <div className="container">
            <div id='banner-row' className='w-[643px]  bg-[#FFF3E3] rounded-[10px] absolute top-[123px] right-[123px] z-20 '>
                <div className='pt-[62px] pr-[43px] pb-[37px] pl-[39px]'>
                    <p className='text-[16px] font-semibold font-popins text-[#333333]'>New Arrival</p>
                    <div className='w-[559px] pt-[4px] pb-[17px]'><h2 className='text-[52px] font-bold font-popins text-[#B88E2F]'>Discover Our New Collection</h2></div>
                    <div className='w-[546px]'><p className='text-[18px] font-medium font-popins text-[#333333]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p></div>
               <button className='py-[25px] w-[222px] mt-[46px] text-center hover:bg-transparent hover:border border-[#B88E2F] hover:text-[#B88E2F] duration-[.3s]  bg-[#B88E2F] text-[16px]   font-bold font-popins text-[#fff]'>BUY Now</button>
                </div>

            </div>
        </div>
    </section>
    
    </>
  )
}

export default Banner