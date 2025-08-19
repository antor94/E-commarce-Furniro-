import React, { useEffect, useState } from 'react'
import ProductCommon from '../components/common/ProductCommon'
import axios from 'axios'
import Pagination from '../components/Pagination';
import BreadCrum from '../components/common/BreadCrum';
import { useNavigate } from 'react-router';

const AllProduct = () => {

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 16;

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => { setProducts(res.data); })
      .catch((err) => {
         console.log(err);});
  }, []);

  const start = (page - 1) * itemsPerPage;
  const currentItems = products.slice(start, start + itemsPerPage);
  const totalPages = Math.ceil(products.length / itemsPerPage);


  // ------------ local-storage

const handelbtn =(data)=>{
    let existId = JSON.parse(localStorage.getItem('productId')) || []
    existId.push(data)
localStorage.setItem('productId' , JSON.stringify(existId))
}

// --------------- navigate

const navigate = useNavigate()

const handelshow =(productInfo)=>{
    navigate(`/SinglePage/${productInfo.id}`)
}



  return (
    <>
    
    
    <section id='all-product'>
        <BreadCrum breadContent={'AllProducts'} /> 
        <div className="container">
            <div id='product-row' className='flex flex-wrap gap-[32px] justify-center pt-[45px] pb-[40px]'>
                {
                    currentItems.slice(0,16)?.map((item)=>{
                      return  <ProductCommon key={item.id} showDeatils={()=>handelshow(item)}  cartClick={()=>handelbtn(item.id)} proImg={item.images[0]} proH2={item.title} proP={item.category.slug} proPrice={item.price} />

                    })
                }
               

            </div>
        </div>
    </section>
      <Pagination totalPages={totalPages} currentPage={page} setPage={setPage} />
    
    
    
    </>
  )
}

export default AllProduct