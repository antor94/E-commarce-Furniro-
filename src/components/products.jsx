import React, { useEffect, useState } from 'react'
import ProductCommon from './common/ProductCommon'
import axios from 'axios'
import { Link, useNavigate } from 'react-router'

const Products = () => {


// ------------------ api fatch

const[Product , setProduct] = useState([])
useEffect(()=>{
    axios.get('https://api.escuelajs.co/api/v1/products')
.then((res)=>{setProduct(res.data)})
.catch((err)=>{console.log(err)})
} , [])

// --------------- navigate

const navigate = useNavigate()

const handelshow =(productInfo)=>{
    navigate(`/SinglePage/${productInfo.id}`)
}


// ------------ local-storage

const handelbtn =(data)=>{
    let existId = JSON.parse(localStorage.getItem('productId')) || []
    existId.push(data)
localStorage.setItem('productId' , JSON.stringify(existId))
}


  return (
    <>
    
    <section id='products'>
        <div className="container">
            <div id='products-row'>
            <div className='text-center pb-[32px]'><h2 className='text-[40px] font-bold font-popins text-[#3A3A3A]'>Our Products</h2></div>
                {/* ------------- products div */}
                <div className='flex justify-center flex-wrap gap-[32px]'>
                    {
                        Product.slice(0,8)?.map((item , i)=>( 
                        <ProductCommon cartClick={()=>handelbtn(item.id)} showDeatils={()=>handelshow(item)} key={i} proImg={item.images[0]} proH2={item.title} proPrice={item.price} proP={item.category.slug} />
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

export default Products