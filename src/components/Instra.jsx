import React from 'react'
import instraimg from '../assets/images/Homeimg.png'

const Instra = () => {
  return (
    <>
    
    
    <section style={{
              background: `URL(${instraimg})`, backgroundRepeat: `no-repeat`,  backgroundSize: `cover`,}} id='instra'>
        <div className="container">
            <div id='instra-row' className='py-[124px] text-center'>
                <h2 className='text-[60px] font-bold font-popins text-[#000]'>Our Instagram</h2>
                <p className='text-[20px] font-normal font-popins text-[#000]'>Follow our store on Instagram</p>
                <button className='w-[255px] mt-[18px] py-[17px] rounded-full text-[20px] font-normal font-popins bg-[#FAF4F4] hover:scale-[1.1] duration-[.3s] text-[#000] shadow-[0px_8px_16px_-2px_rgba(0,_0,_0,_0.1)] '>Follow Us</button>
                

            </div>
        </div>
    </section>
    
    
    
    
    
    
    
    </>
  )
}

export default Instra