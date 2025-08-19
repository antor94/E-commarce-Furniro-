import React from 'react'
import SuppotCommon from '../components/common/SuppotCommon'
import BreadCrum from '../components/common/BreadCrum'

const Contact = () => {
  return (
    <>
    
    <section id='contact'>
        <BreadCrum breadContent={'Contact'} />
        <div className="container">
            <div id='contact-row' className='pt-[98px]'>
                {/* ----------------- heading */}
                <div className='flex justify-center'><h2 className='text-[24px] font-medium font-popins text-[#000]'>Get In Touch With Us</h2></div>
                <div className='flex justify-center'>
                <div className='w-[668px] text-center pt-[7px]'><p className='text-[18px] font-normal font-popins text-[#9F9F9F]'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p></div>
                </div>

                <div className='pt-[58px] pb-[71px] mt-[82px] flex justify-center gap-[157px]'>
                    {/* -------------- left-side */}
                    <div>

                    <div>
                        <h2 className='text-[24px] font-medium font-popins text-[#000]'>Address</h2>
                        <div className='w-[207px]'><p className='text-[16px] font-normal font-popins text-[#000] '>236 5th SE Avenue, New York NY10000, United States</p></div>

                    </div>
                    {/* ----------- phone */}
                     <div className='py-[42px]'>
                        <h2 className='text-[24px] font-medium font-popins text-[#000]'>Phone</h2>
                        <div>
                            <p className='text-[16px] font-normal font-popins text-[#000] '>Mobile: +(84) 546-6789</p>
                            <p className='text-[16px] font-normal font-popins text-[#000] '>Hotline: +(84) 456-6789</p>
                            </div>

                    </div>
                    {/* --------------- time */}
                     <div>
                        <h2 className='text-[24px] font-medium font-popins text-[#000]'>Working Time</h2>
                        <div className='w-[200px]'>
                            <p className='text-[16px] font-normal font-popins text-[#000] '>Monday-Friday: 9:00 - 22:00</p>
                            <p className='text-[16px] font-normal font-popins text-[#000] '>Saturday-Sunday: 9:00 - 21:00</p>
                        </div>

                    </div>
                    </div>
                    {/* ----------- right-side */}
                    <div>
                        <form action="">
                            <div>

                            <h2 className='text-[16px] font-medium font-popins pb-[22px] text-[#000]'>Your name</h2>
                            <div className='w-[529px] border border-[#9F9F9F] rounded-[10px] '><input className=' w-[90%] py-[25px]  outline-none text-[16px] font-normal font-popins text-[#9F9F9F] pl-[31px]' type="text" placeholder='Abc' /></div>
                            </div>
                                 <div className='py-[36px]'>

                            <h2 className='text-[16px] font-medium font-popins pb-[22px] text-[#000]'>Email address</h2>
                            <div className='w-[529px] border border-[#9F9F9F] rounded-[10px] '><input className=' w-[90%] py-[25px]  outline-none text-[16px] font-normal font-popins text-[#9F9F9F] pl-[31px]' type="text" placeholder='Abc@def.com' /></div>
                            </div>
                                 <div>

                            <h2 className='text-[16px] font-medium font-popins pb-[22px] text-[#000]'>Subject</h2>
                            <div className='w-[529px] border border-[#9F9F9F] rounded-[10px] '><input className=' w-[90%] py-[25px]  outline-none text-[16px] font-normal font-popins text-[#9F9F9F] pl-[31px]' type="text" placeholder='This is an optional' /></div>
                            </div>
                            <div className='pt-[36px]'>
                                <h2 className='text-[16px] font-medium font-popins pb-[22px] text-[#000]'>Message</h2>

                            <textarea className='w-[527px] rounded-[10px] border border-[#9F9F9F] pt-[26px] pb-[70px] pl-[30px]  outline-none  text-[16px] font-normal font-popins text-[#9F9F9F]' name="" id="">Hi! i’d like to ask about</textarea>
                            </div>
                        </form>
                        <button className='w-[237px] bg-[#B88E2F] py-[14px] text-[16px] font-normal font-popins text-[#fff] rounded-[5px] mt-[49px]'>Submit</button>
                    </div>
                </div>
              
            </div>
        </div>
                {/* ----------- support */}
   
    </section>
    
    
    
    </>
  )
}

export default Contact