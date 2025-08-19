import React, { useEffect, useState } from 'react'
import cartimg from '../assets/images/cartimg.png'
import { MdDelete } from "react-icons/md";
import BreadCrum from '../components/common/BreadCrum';
import { Link, useParams } from 'react-router';
import axios from 'axios';

const CartPage = () => {

const perams = useParams()


// ------------------ api fatch

const[Product , setProduct] = useState([])
useEffect(()=>{
    axios.get(`https://api.escuelajs.co/api/v1/products/${perams.productId}`)
.then((res)=>{setProduct(res.data)})
.catch((err)=>{console.log(err)})
} , [])

console.log(perams)

console.log(Product)

  return (
    <>
    
    
    <section id='cartPage'>
            <BreadCrum breadContent={'CartPage'} />
        <div className="container">
            <div id='cart-row' className='flex justify-around '>
                {/* ------------ left-side */}
            <div className='pt-[72px]'>
                    {/* ----------------- list */}
                    <div className='w-[817px] bg-[#F9F1E7]'>
                        <div className='py-[15px] flex justify-center'>
                        <h2 className='text-[16px]  font-medium font-popins text-[#000]'>Product</h2>
                        <h2 className='text-[16px] pl-[114px] pr-[100px] font-medium font-popins text-[#000]'>Price</h2>
                        <h2 className='text-[16px] pr-[56px] font-medium font-popins text-[#000]'>Quantity</h2>
                        <h2 className='text-[16px] font-medium font-popins text-[#000]'>Subtotal</h2>

                        </div>
                    </div>
              {/* ------------------ product-data */}
                    <div className='pt-[55px] flex items-center'>
                    <div className='pr-[34px]'><img src={cartimg} alt="cart-img" /></div>
                    <div className='flex gap-[69px]'>
                    <p className='text-[16px] font-normal font-popins text-[#9F9F9F]'>gxhg</p>
                    <p className='text-[16px] font-normal font-popins text-[#9F9F9F]'>Rs. 250,000.00</p>
                    <div className='w-[32px] h-[32px] flex justify-center items-center border rounded-[5px]'>1</div>
                    <p>Rs. 250,000.00</p>
                    <div><button><MdDelete className='text-[28px] text-[#B88E2F]' /></button>  </div>
                        </div>   
                    </div>
            </div>
            {/* -------------- right-side */}
            <div className='w-[393px] mt-[72px] h-[390px] bg-[#F9F1E7]'>
                <div className='pt-[15px] pb-[61px] flex justify-center'><h2 className='text-[32px] font-semibold font-popins text-[#000]'>Cart Totals</h2></div>
                <div className='flex justify-around'>
                    <h2 className='text-[16px] font-medium font-popins text-[#000]'>Cart Totals</h2>
                    <p className='text-[16px] font-normal font-popins text-[#9F9F9F]'>Rs. 250,000.00</p>
                </div>
                <div className='flex justify-around pt-[31px]'>
                    <h2 className='text-[16px] font-medium font-popins text-[#000]'>Total</h2>
                    <h2 className='text-[20px] font-medium font-popins text-[#B88E2F]'>Rs. 250,000.00</h2>
                    </div>
                    <div className='flex justify-center'>
                    <Link to={'/checkout'} className='w-[212px] mt-[42px] py-[14px] text-[20px] font-normal font-popins text-[#000] hover:bg-amber-100 hover:scale-[1.1] duration-[.4s] text-center border rounded-[15px]'>Check Out</Link>

                    </div>

            </div>
        </div>
        </div>
    </section>
    
    
    
    
    </>
  )
}

export default CartPage