import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { Link, useParams } from 'react-router';
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import singleimg from '../assets/images/Mask group.png'
import ProductCommon from '../components/common/ProductCommon';
import axios from 'axios';

const SinglePage = () => {

  // -------------- slider
    const [currentImg, setCurrentImg] = useState(0);

// ------- perams
const perams = useParams()


// ------------------ api fatch
const[Product , setProduct] = useState([])
useEffect(()=>{
    axios.get(`https://api.escuelajs.co/api/v1/products/${perams.productId}`)
.then((res)=>setProduct(res.data))
.catch((err)=>console.log(err))
} , [])



// -------------- recommendation api fatch

const[recoProduct , setRecoProduct] = useState([])
useEffect(()=>{
    axios.get('https://api.escuelajs.co/api/v1/products')
.then((res)=>setRecoProduct(res.data))
.catch((err)=>console.log(err))
} , [])


  return (
    <>
    

         {/* -------------- slider-section */}
                <section id='slider' className=''>
                    <div className="container">
                        <div id='slider-row' className='pt-[32px] flex justify-around'>
                         {/*-------------------  slider */}
              {Product && (
                <div className="flex flex-col md:flex-row gap-4 md:gap-[30px] w-full md:w-auto mb-6 md:mb-0 items-center md:items-start">
                  {/* Thumbnails on the left */}
                  <div className="flex flex-row md:flex-col gap-[10px] md:gap-[20px] justify-center md:justify-start w-full md:w-auto mb-2 md:mb-0">
                    {Product.images &&
                      Product.images?.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`thumb-${idx}`}
                          className={`w-[44px] sm:w-[60px] lg:w-[100px] h-[44px] sm:h-[60px] lg:h-[100px] rounded-[6px] cursor-pointer border ${
                            currentImg === idx
                              ? "border-blue-500 dark:bg-white"
                              : "border-transparent"
                          }`}
                          onClick={() => setCurrentImg(idx)}
                        />
                      ))}
                  </div>
                  {/* Main Image on the right */}
                  <div className="main-img w-full max-w-[320px] sm:max-w-[400px] md:w-[300px] lg:w-[423px] h-[180px] sm:h-[250px] md:h-[350px] lg:h-[500px] bg-[#4B5563] dark:bg-white rounded-[16px] flex items-center justify-center mx-auto md:mx-0">
                    {Product.images && (
                      <img
                        src={Product.images[currentImg]}
                        alt="main-img"
                        className="w-full h-full object-contain rounded-[7px]"
                      />
                    )}
                  </div>
                </div>
                    )}
                            {/* ------------ right-side */}
                            <div className=' '>
                            {/* --------------- heading part */}
                                <h2 className='text-[42px] truncate w-[400px]  font-normal font-popins text-[#000]'>{Product?.title}</h2>
                                <h2 className='text-[24px] font-medium font-popins text-[#9F9F9F]'>Rs. {Product.price}</h2>

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
                                <div className='w-[424px] pb-[22px]'><p className='text-[13px] font-normal font-popins text-[#000]'>{Product.description}</p></div>

                               {/* --------------------- size-selector */}
                                <div className='w-[123px]'>
                                    <p className='text-[14px] font-normal font-popins text-[#9F9F9F]'>Size</p>
                                    <div className='flex gap-[16px] pt-[12px]'>
                                    <button className='w-[30px] h-[30px] rounded-[5px] flex justify-center cursor-pointer focus:bg-red-300 items-center text-[13px] font-normal font-popins text-[#000]   bg-[#F9F1E7]'>L</button>
                                    <button className='w-[30px] h-[30px] rounded-[5px] flex justify-center cursor-pointer focus:bg-red-300 items-center text-[13px] font-normal font-popins text-[#000]   bg-[#F9F1E7]'>xl</button>
                                    <button className='w-[30px] h-[30px] rounded-[5px] flex justify-center cursor-pointer focus:bg-red-300 items-center  text-[13px] font-normal font-popins text-[#000]  bg-[#F9F1E7]'>xxl</button>

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
                                <Link to={'/cartPage'} className='w-[215px] flex justify-center border rounded-[15px] hover:text-white hover:bg-amber-500 text-[20px] font-normal font-popins text-[#000] py-[17px]'>Add To Cart</Link>
             
                                 </div>

                                 {/* --------------- details */}
                                 <div className='pt-[41px]'>


                               <div className='flex gap-[20px]'>
                                <p className='text-[16px] font-normal font-popins text-[#9F9F9F]'>SKU</p>:
                                <p className='text-[16px] font-normal font-popins text-[#9F9F9F]'>SS001</p>

                               </div >
                               <div className='flex gap-[20px] py-[12px]'>
                                <p className='text-[16px] font-normal font-popins text-[#9F9F9F]'>Category</p>:
                                <p className='text-[16px] font-normal font-popins text-[#9F9F9F]'>{Product.category?.slug}</p>
                                
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
    {/* <section id='related' className='pb-[92px]'>
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
            <div className=' pt-[44px]  text-center'>
            <Link to={'/allProduct'} className='w-[300px] px-[20px] border border-[#B88E2F] hover:bg-[#B88E2F] hover:text-white py-[12px] text-[16px] font-semibold font-popins text-[#B88E2F]'>Show More</Link>

            </div>
        </div>
    </section> */}
    
        <section id='products'>
        <div className="container">
            <div id='products-row'>
            <div className='text-center pb-[32px]'><h2 className='text-[40px] font-bold font-popins text-[#3A3A3A]'>Our Products</h2></div>
                {/* ------------- products div */}
                <div className='flex justify-center flex-wrap gap-[32px]'>
                    {
                        recoProduct.slice(0,4)?.map((item , i)=>( 
                        <ProductCommon proImg={item.images} proH2={item.title} proPrice={item.price} proP={item.category.slug} />
                     ))
                    }        
                </div>
                {/* ---------- button */}
                <div className='text-center mt-[100px]'>
                <Link to={'/allproduct'} className='w-[245px] h-[48px] border px-[82px] py-[12px] text-[16px] hover:bg-[#B88E2F] duration-[.4s]  hover:text-white  font-semibold font-popins  text-[#B88E2F]'>Show More</Link>
                </div>            
            </div>
        </div>
    </section>
    
    
    
    
    </>
  )
}

export default SinglePage