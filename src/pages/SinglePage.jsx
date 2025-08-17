import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { Link } from 'react-router';
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import singleimg from '../assets/images/Mask group.png'
import ProductCommon from '../components/common/ProductCommon';

const SinglePage = () => {
  return (
    <>
    

         {/* -------------- slider-section */}
                <section id='slider' className=''>
                    <div className="container">
                        <div id='slider-row' className='pt-[32px] flex justify-between'>
                            {/* ------------ lift-side */}
                            <div className='flex gap-[31px]'> 
                                {/* ----------- tambneil */}

                                <div className='flex flex-col gap-[32px]'>


                            <div className='w-[76px] h-[80px] bg-[#F9F1E7]'></div>
                            <div className='w-[76px] h-[80px] bg-[#F9F1E7]'></div>
                            <div className='w-[76px] h-[80px] bg-[#F9F1E7]'></div>
                            <div className='w-[76px] h-[80px] bg-[#F9F1E7]'></div>
                                </div>
                            {/* ----------- mainimg */}
                            <div className='w-[423px] h-[500px] rounded-[10px] bg-[#F9F1E7]'><img src="" alt="main-img" /></div>
                            </div>
                            {/* ------------ right-side */}

                            <div className=' '>
                            {/* --------------- heading part */}
                                <h2 className='text-[42px] font-normal font-popins text-[#000]'>Asgaard sofa</h2>
                                <h2 className='text-[24px] font-medium font-popins text-[#9F9F9F]'>Rs. 250,000.00</h2>

                                {/* ----------- rating */}
                                <div className='pt-[15px] pb-[18px] flex items-center'>
                                    <div className='flex pr-[18px]'>
                                        <FaStar  className='text-[#FFC700]'/>
                                        <FaStar  className='text-[#FFC700]'/>
                                        <FaStar  className='text-[#FFC700]'/>
                                        <FaStar className='text-[#FFC700]' />
                                        <FaStarHalf className='text-[#FFC700]' />
                                    </div>
                                    <span className=' inline-block h-[30px] mr-[22px] border'></span>
                                    <p className='text-[13px] font-normal font-popins text-[#9F9F9F]'>5 Customer Review</p>
                                </div>
                                {/* -------------- description */}
                                <div className='w-[424px] pb-[22px]'><p className='text-[13px] font-normal font-popins text-[#000]'>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p></div>

                               {/* --------------------- size-selector */}
                                <div className='w-[123px]'>
                                    <p className='text-[14px] font-normal font-popins text-[#9F9F9F]'>Size</p>
                                    <div className='flex gap-[16px] pt-[12px]'>
                                    <div className='w-[30px] h-[30px] rounded-[5px] flex justify-center items-center  cursor-pointer bg-[#F9F1E7]'>L</div>
                                    <div className='w-[30px] h-[30px] rounded-[5px] flex justify-center items-center  cursor-pointer bg-[#F9F1E7]'>L</div>
                                    <div className='w-[30px] h-[30px] rounded-[5px] flex justify-center items-center  cursor-pointer bg-[#F9F1E7]'>L</div>

                                    </div>
                                </div>
                                {/* ---------- color */}
                                 <div className='w-[123px] pt-[18px]'>
                                    <p className='text-[14px] font-normal font-popins text-[#9F9F9F]'>Color</p>
                                    <div className='flex gap-[16px] pt-[12px]'>
                                    <div className='w-[30px] h-[30px] rounded-full  flex justify-center items-center  cursor-pointer bg-[#816DFA]'></div>
                                    <div className='w-[30px] h-[30px] rounded-full  flex justify-center items-center  cursor-pointer bg-[#000]'></div>
                                    <div className='w-[30px] h-[30px] rounded-full  flex justify-center items-center  cursor-pointer bg-[#B88E2F]'></div>

                                    </div>
                                </div>
                              {/* -------------- button */}
                               <div className='border-b pb-[60px] border-[#D9D9D9] flex mt-[32px] gap-[18px]'>
                                <div className='w-[123px] h-[64px] border border-[#9F9F9F] rounded-[10px] flex justify-around items-center' >
                                    <button className='text-[24px]'>-</button>
                                    <p className='text-[16px] font-medium font-popins text-[#000]'>1</p>
                                    <button className='text-[24px]' >+</button>
                                </div>
                                <button className='w-[215px] border rounded-[15px] text-[20px] font-normal font-popins text-[#000] py-[17px]'>Add To Cart</button>
                                <button className='w-[215px] border rounded-[15px] text-[20px] font-normal font-popins text-[#000] py-[17px]'>+ Compare</button>
                                 </div>

                                 {/* --------------- details */}
                                 <div className='pt-[41px]'>


                               <div className='flex gap-[20px]'>
                                <p className='text-[16px] font-normal font-popins text-[#9F9F9F]'>SKU</p>:
                                <p className='text-[16px] font-normal font-popins text-[#9F9F9F]'>SS001</p>

                               </div >
                               <div className='flex gap-[20px] py-[12px]'>
                                <p className='text-[16px] font-normal font-popins text-[#9F9F9F]'>Category</p>:
                                <p className='text-[16px] font-normal font-popins text-[#9F9F9F]'>Sofas</p>
                                
                               </div>
                               <div className='flex gap-[20px]'>
                                <p className='text-[16px] font-normal font-popins text-[#9F9F9F]'>Tags</p> :
                                <p className='text-[16px] font-normal font-popins text-[#9F9F9F]'>Sofa, Chair, Home, Shop</p>
                                
                               </div>
                               <div className='flex gap-[20px] pt-[12px]'>
                                <p className='text-[16px] font-normal font-popins text-[#9F9F9F]'>Share</p>:
                                <div className='flex gap-[23px] '>
                                    <Link to={'/'} ><IoLogoFacebook  className='text-[25px]' /></Link>
                                    <Link to={'/'} ><FaLinkedin  className='text-[25px]' /></Link>
                                    <Link to={'/'} ><AiFillTwitterCircle  className='text-[25px]' /></Link>
                                </div>
                                
                               </div>
                                 </div>


                            </div>
                        </div>
                    </div>

                </section>
    
    {/* --------------- details section */}
    <section id='single' className='border mt-[50px]'>
        <div className="container">
            <div id='single-row' className='pt-[50px]'>
                {/* --------- heading */}
                <div className=' flex justify-center gap-[52px] pb-[37px]'>
                    <div className='text-[24px] font-medium font-popins text-[#9F9F9F] '>Description</div>
                    <div className='text-[24px] font-medium font-popins text-[#9F9F9F] '>Additional Information</div>
                    <div className='text-[24px] font-medium font-popins text-[#9F9F9F] '>Reviews [5]</div>

                </div>
                {/* ----------- descroption */}
                <div className='flex flex-col justify-center'>

                <div className=''>
                    <div className='w-[1026px]'>
                    <p className='text-[16px] font-normal font-popins text-[#9F9F9F]'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                    </div>
                    <div className='w-[1026px] pt-[30px] pb-[36px]'>
                    <p className='text-[16px] font-normal font-popins text-[#9F9F9F]'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>

                    </div>
                </div>


           {/* ---------- product */}
           <div className=' flex justify-center gap-[50px]'>
            <div className='w-[605px]'><img src={singleimg} alt=" single-img" /></div>
            <div className='w-[605px]'><img src={singleimg} alt=" single-img" /></div>
           </div>
                </div>
            </div>
        </div>
    </section>

    {/* ----------------- related product */}
    <section id='related' className='pb-[92px]'>
        <div className="container">
            <div id='related-row ' className=''>
                <div className='pt-[55px] text-center'><h2 className='text-[36px] font-medium font-popins text-[#000]'>Related Products</h2></div>

                <div className='mt-[26px] flex justify-center gap-[32px]'>


               <ProductCommon />
               <ProductCommon />
               <ProductCommon />
               <ProductCommon />

                </div>
            </div>
            <div className='pt-[44px]  text-center'>
            <button className='w-[245px]  border border-[#B88E2F] hover:bg-[#B88E2F] hover:text-white py-[12px] text-[16px] font-semibold font-popins text-[#B88E2F]'>Show More</button>

            </div>
        </div>
    </section>
    
    
    
    
    
    
    </>
  )
}

export default SinglePage