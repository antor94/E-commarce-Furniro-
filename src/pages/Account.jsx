import React from 'react'
import BreadCrum from '../components/common/BreadCrum'

const Account = () => {
  return (
    <>
    
    
    <section id='account'>
      <BreadCrum />
        <div className="container">
            <div id='account-row' className='pt-[63px] pb-[67px] flex justify-around '>
              {/* ---------- login  */}
              <div>
                <h2 className='text-[36px] pb-[36px]  font-semibold font-popins text-[#000]'>Log In</h2>
                <div className='w-[424px]'>
                  <p className='text-[16px] font-medium font-popins text-[#000]'>Username or email address</p>
                  <input className='w-[423px] h-[75px] pl-[20px] mt-[22px] border border-[#9F9F9F] rounded-[10px]' type="email" placeholder='' />
                </div>
                 <div className='w-[424px] pt-[36px]'>
                  <p className='text-[16px] font-medium font-popins text-[#000]'>Password</p>
                  <input className='w-[423px] h-[75px] pl-[20px] mt-[22px] border border-[#9F9F9F] rounded-[10px]' type="email" placeholder='' />
                </div>

                {/* --------- remember */}

                <div className='flex items-center gap-[21px] pt-[42px] pb-[36px]'>
                  <input className='w-[30px] h-[30px] border border-[#9F9F9F]' type="radio"  />
                  <label className='text-[16px] font-normal font-popins text-[#000]' htmlFor="">Remember me</label>
                </div>

                {/* ----------- button */}
                <div className='flex items-center gap-[30px]'>
                <button className='w-[215px] py-[17px] text-[20px] font-normal hover:bg-amber-200  hover:border-none font-popins text-[#000] rounded-[15px] border '>Log In</button>
                <p className='text-[16px] font-light font-popins text-[#000]'>Lost Your Password?</p>

                </div>

              </div>

              {/* ------------ register */}
              <div>
                 <h2 className='text-[36px] pb-[36px]  font-semibold font-popins text-[#000]'>Register</h2>
                <div className='w-[424px]'>
                  <p className='text-[16px] font-medium font-popins text-[#000]'>email address</p>
                  <input className='w-[423px] h-[75px] pl-[20px] mt-[22px] border border-[#9F9F9F] rounded-[10px]' type="email" placeholder='' />
                </div>
                <div>
                  <div className='w-[453px] pt-[36px]'><p className='text-[16px] font-light font-popins text-[#000]'>A link to set a new password will be sent to your email address.</p></div>
                  <div className='w-[417px] mt-[18px] mb-[64px]'><p className='text-[16px] font-light font-popins text-[#000]'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-semibold'>privacy policy.</span></p></div>
                </div>
                {/* ----------- button */}
                <div className='flex items-center gap-[30px]'>
                <button className='w-[215px] py-[17px] text-[20px] font-normal font-popins hover:bg-amber-200  hover:border-none text-[#000] rounded-[15px] border '>Register</button>
               </div>
              </div>
            </div>
        </div>
    </section>
    
    
    
    </>
  )
}

export default Account