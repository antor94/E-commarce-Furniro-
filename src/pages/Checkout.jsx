import React, { useEffect, useState } from 'react'
import BreadCrum from '../components/common/BreadCrum'
import axios from 'axios'

const Checkout = () => {

    const localIds = JSON.parse(localStorage.getItem('productId'))


// ------------------ api fatch

const[Product , setProduct] = useState([])
useEffect(()=>{
    axios.get('https://api.escuelajs.co/api/v1/products')
.then((res)=>{setProduct(res.data)})
.catch((err)=>{console.log(err)})
} , [])

// ------------- product-filter
const cartProduct = Product.filter((item)=>{
    return localIds?.includes(item.id)
})


// ------------- total-price
const totalPrice = cartProduct.reduce((sum , item)=>{
    return sum+item.price
} ,0)


  return (
    <>
    
    
    <section id='checkout'>
      <BreadCrum breadContent={'CheckOut'} />
        <div className="container">
            <div id='checkout-row' className='flex justify-around pb-[52px] pt-[97px] '>
                {/* ----------------- left-side */}
                <div>
                    {/* -------- billing-address */}
                    <div className=''><h2 className='text-[36px] font-semibold font-popins text-[#000]'>Billing details</h2></div>
                    {/* -------------- user */}
                    <div className='flex gap-[31px]'>
                    <div className='pt-[36px]'>
                      <h2 className='text-[16px] font-medium font-popins text-[#000]'>First Name</h2>
                      <input className='w-[211px] h-[75px] mt-[22px] rounded-[10px] border-[#9F9F9F] border' type="text" />
                    </div>
                    <div className='pt-[36px]'>
                      <h2 className='text-[16px] font-medium font-popins text-[#000]'>Last Name</h2>
                      <input className='w-[211px] h-[75px] mt-[22px] rounded-[10px] border-[#9F9F9F] border' type="text" />
                    </div>
                </div>
                <div>
                <div className='pt-[36px]'>
                  <h2 className='text-[16px] font-medium font-popins text-[#000]'>Company Name (Optional)</h2>
                  <input className='w-[453px] h-[75px] rounded-[10px] outline-none mt-[22px] border border-[#9F9F9F] ' type="text" />
                </div>
                     <div className='pt-[36px]'>
                  <h2 className='text-[16px] font-medium font-popins text-[#000]'>Country / Region</h2>
                  <input className='w-[453px] h-[75px] rounded-[10px] outline-none mt-[22px] border border-[#9F9F9F] ' type="text" />
                </div>
                     <div className='pt-[36px]'>
                  <h2 className='text-[16px] font-medium font-popins text-[#000]'>Street address</h2>
                  <input className='w-[453px] h-[75px] rounded-[10px] outline-none mt-[22px] border border-[#9F9F9F] ' type="text" />
                </div>
                     <div className='pt-[36px]'>
                  <h2 className='text-[16px] font-medium font-popins text-[#000]'>Town / City</h2>
                  <input className='w-[453px] h-[75px] rounded-[10px] outline-none mt-[22px] border border-[#9F9F9F] ' type="text" />
                </div>
                     <div className='pt-[36px]'>
                  <h2 className='text-[16px] font-medium font-popins text-[#000]'>Province</h2>
                  <input className='w-[453px] h-[75px] rounded-[10px] outline-none mt-[22px] border border-[#9F9F9F] ' type="text" />
                </div>
                     <div className='pt-[36px]'>
                  <h2 className='text-[16px] font-medium font-popins text-[#000]'>ZIP code</h2>
                  <input className='w-[453px] h-[75px] rounded-[10px] outline-none mt-[22px] border border-[#9F9F9F] ' type="text" />
                </div>
                     <div className='pt-[36px]'>
                  <h2 className='text-[16px] font-medium font-popins text-[#000]'>Phone</h2>
                  <input className='w-[453px] h-[75px] rounded-[10px] outline-none mt-[22px] border border-[#9F9F9F] ' type="text" />
                </div>
                     <div className='pt-[36px]'>
                  <h2 className='text-[16px] font-medium font-popins text-[#000]'>Email address</h2>
                  <input className='w-[453px] h-[75px] rounded-[10px] outline-none mt-[22px] border border-[#9F9F9F] ' type="text" />
                </div>
                     <div className='pt-[36px]'>
                  <h2 className='text-[16px] font-medium font-popins text-[#000]'>Company Name (Optional)</h2>
                  <input className='w-[453px] h-[75px] rounded-[10px] outline-none mt-[22px] border border-[#9F9F9F] ' type="text" />
                </div>
                </div>

              </div>
              {/* ------------- right-side */}
              <div>
                <div className='w-[533px] border-b pb-[33px]'>
{/* -------------------- product-details */}
                <div className='flex justify-between items-center'>
                  <h2 className='text-[24px] font-medium font-popins text-[#000]'>Product</h2>
                  <h2 className='text-[24px] font-medium font-popins text-[#000]'>Subtotal</h2>
                </div>
                {/* ----------- product name + price */}

                {
                  cartProduct?.map((item)=>(

                <div className=''>

                <div className='flex justify-between items-center pt-[14px] pb-[22px]'>
                  <p className='text-[16px] truncate w-[350px] font-normal font-popins text-[#9F9F9F]'>{item.title}<span className='text-[12px] font-medium font-popins text-[#000]'>  x 1</span></p>
                  <p className='text-[16px] font-light font-popins text-[#000]'>Rp. {item.price}</p>
                </div>

              
              </div>
                  ))
                }
                  <div className='flex justify-between items-center'>
                  <p className='text-[16px] font-normal font-popins text-[#000]'>Total</p>
                  <h2 className='text-[24px] font-bold font-popins text-[#B88E2F]'>Rs. {totalPrice}</h2>
                </div> 




                </div>
              <div className='pt-[22px] flex gap-[15px] pb-[11px]'>
                <input type="checkbox" />
                <label className='text-[16px] font-normal font-popins text-[#000]' htmlFor="">Direct Bank Transfer</label>
              </div>
                <div className='w-[450px]'>
                <p className='text-[16px] font-light font-popins text-[#9F9F9F]'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>

                </div>
              <div className='pt-[11px] flex gap-[15px] pb-[25px]'>
                <input type="checkbox" />
                <label className='text-[16px] font-normal font-popins text-[#9F9F9F]' htmlFor="">Direct Bank Transfer</label>

              </div>
              <div className='flex gap-[15px]'>
                <input type="checkbox" />
                <label className='text-[16px] font-normal font-popins text-[#9F9F9F]' htmlFor="">Direct Bank Transfer</label>
              
              </div>
              <div className='w-[450px] pt-[22px] pb-[39px]'><p className='text-[16px] font-light font-popins text-[#000]'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-semibold '>privacy policy.</span></p></div>
              <div className='w-[318px] hover:bg-amber-100 hover:scale-[1.1] duration-[.4s] border rounded-[15px] text-center'>
                <button className='py-[17px] text-[20px] font-normal font-popins  text-[#000]'>place order</button>

              </div>



                </div>
            </div>
        </div>
    </section>
    
    
    </>
  )
}

export default Checkout