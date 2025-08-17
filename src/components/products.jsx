import React from 'react'
import ProductCommon from './common/ProductCommon'

const products = () => {
  return (
    <>
    
    
    <section id='products'>
        <div className="container">
            <div id='products-row'>
                <div className='text-center pb-[32px]'><h2 className='text-[40px] font-bold font-popins text-[#3A3A3A]'>Our Products</h2></div>
                {/* ------------- products div */}
                <div className='flex justify-center flex-wrap gap-[32px]'>
                    <ProductCommon />
                    <ProductCommon />
                    <ProductCommon />
                    <ProductCommon />
                    <ProductCommon />
                    <ProductCommon />
                    <ProductCommon />
                    <ProductCommon />
             
                </div>
                {/* ---------- button */}
                <div className='text-center flex justify-center'>

                <div className='w-[245px] text-center mt-[32px] border hover:text-red-600  border-[#B88E2F]'>
                    <button className='w-full py-[12px] text-[16px] hover:bg-[#B88E2F] hover:text-white  font-semibold font-popins  text-[#B88E2F]'>Show More</button>
                    </div>
                </div>

            </div>
        </div>
    </section>
    
    
    </>
  )
}

export default products