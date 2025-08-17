import React from 'react'
import img from '../assets/images/img1.png'
import img1 from '../assets/images/img2.png'
import img2 from '../assets/images/img3.png'
import img3 from '../assets/images/img4.png'
import img4 from '../assets/images/img5.png'
import img5 from '../assets/images/img6.png'
import img6 from '../assets/images/img7.png'
import img7 from '../assets/images/img8.png'
import img8 from '../assets/images/img9.png'
import img9 from '../assets/images/img10.png'


const Furniture = () => {
  return (
    <>
    
    <section id='furniture' className='pt-[67px] pb-[50px]'>
            <div id='furniture-row'>
                {/* -------------- heading */}
                <div className='text-center'>
                    <p className='text-[20px] font-semibold font-popins text-[#616161]'>Share your setup with</p>
                    <h2 className='text-[40px] font-bold font-popins text-[#3A3A3A]'>#FuniroFurniture</h2>
                </div>

                {/* ------------- all product images */}
                <div className='flex justify-between relative'>
                  {/* ---------- left-side */}
                  <div>
                    <div className='flex gap-[16px] items-end'>

                  <div><img src={img} alt="furniture-img" /></div>
                  <div className='w-[451px]'><img className='w-[451px]' src={img3} alt="furniture-img" /></div>
                    </div>
                    <div className='flex gap-[16px] mt-[16px]'>

                  <div><img src={img1} alt="furniture-img" /></div>
                  <div><img src={img4} alt="furniture-img" /></div>
                    </div>
                  </div>
                  {/* ------------ middle-img */}
                  <div className='flex flex-col justify-center'><img src={img5} alt="furniture-img" /></div>
                  {/* ---------- right-side */}
                  <div>
                    <div className='flex items-end gap-[16px] '>
                  <div><img src={img7} alt="furniture-img" /></div>
                  <div><img src={img9} alt="furniture-img" /></div>
                      </div> 
                      <div className='flex gap-[16px] mt-[16px] '>
                  <div><img src={img6} alt="furniture-img" /></div>
                  <div><img src={img8} alt="furniture-img" /></div>
                        </div>     
                  </div>
    
                
                

                </div>



            </div>
    </section>
    
    
    </>
  )
}

export default Furniture