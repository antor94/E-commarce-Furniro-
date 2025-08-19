import React, { useEffect, useState } from 'react'
import { TbShoppingBagX } from "react-icons/tb";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router';
import axios from 'axios';

const Cart = ({closeCart}) => {


    const localIds = JSON.parse(localStorage.getItem('productId'))


// ------------------ api fatch

const[Product , setProduct] = useState([])
useEffect(()=>{
    axios.get('https://api.escuelajs.co/api/v1/products')
.then((res)=>{setProduct(res.data)})
.catch((err)=>{console.log(err)})
} , [])


  //-------- delete function
const handleDelete = (id) => {
  const existingIds = JSON.parse(localStorage.getItem("productID")) || [];
  const updatedIds = existingIds.filter((itemId) => itemId !== id);
  localStorage.setItem("productID", JSON.stringify(updatedIds));
  const updatedCart = Product.filter((item) => item.id !== id);
  setProduct(updatedCart);

};



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

    <section>
    <div onClick={closeCart} className='w-full h-screen bg-[#05050560] top-0 right-0 z-30 fixed flex justify-end'></div>    
    <div  className='w-[417px] h-[1200px] bg-[#fff] fixed top-0 right-0 z-300  shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)]'>
        {/* ----------- cart name */}
        <div className='flex justify-around items-center pt-[28px] '>
        <h2 className='text-[24px]  font-semibold font-popins text-[#000]'>Shopping Cart</h2>
        <TbShoppingBagX onClick={closeCart} className='text-[28px]' />
        </div>
         {/* ------------ product details */}
        <div className='h-[600px] overflow-y-scroll'>
            {
                cartProduct?.map((item)=>(

                <div key={item.id} className='pt-[50px] flex items-center justify-around'>
                    <div className='w-[108px] h-[105px] rounded-[14px] bg-red-500 overflow-hidden'><img src={item?.images} alt="cart-img" /></div>
                    <div className='w-[130px]'>
                        <h2 className='text-[16px]  truncate w-[150px] font-normal font-popins text-[#000]'>{item.title}</h2>
                        <div className=' flex items-center mt-[11px] gap-[30px]'>
                        <p className='text-[16px] font-light font-popins text-[#000]'>{localIds? localIds.length :0 }</p>
                        x 
                        <p className='text-[12px] font-medium font-popins text-[#B88E2F]'>Rp {item.price}</p>
                        </div>
                    </div>
                    <button onClick={() => handleDelete(item.id)}><ImCross /></button>

                </div>

                ))
            }


        </div>
        {/* ------------- subtotal */}
        <div className=''>
        <div className='flex items-center pb-[23px] pt-[100px]  justify-around  gap-[101px]'>
            <p className='text-[16px] font-semibold font-popins text-[#000]'>Subtotal</p>
            <p className='text-[16px] font-semibold font-popins text-[#B88E2F]'>Rs. {totalPrice}</p>
        </div>
        {/* ---------------- checkout  */}
        <div className='flex border-t pt-[26px] justify-around'>
        <Link to={'/CartPage'} className='w-[87px] flex justify-center border rounded-full py-[6px] text-[14px] font-normal hover:bg-green-200 hover:border-none font-popins text-[#000]'>Cart</Link>
        <Link to={'/checkout'} className='w-[118px] flex justify-center border rounded-full py-[6px] text-[14px] font-normal hover:bg-green-200 hover:border-none font-popins text-[#000]'>Checkout</Link>
        </div>
        </div>
        </div>
    </section>
    
    </>
  )
}

export default Cart