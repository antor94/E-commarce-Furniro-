import React from 'react'

const Service = () => {
return (
<>

    <section id='services' className='py-[96px] mt-[85px] bg-[#FAF4F4]'>
        <div className="container">
            <div className='flex items-center justify-between'>


                {/* single */}
                <div className='w-[376px]'>
                    <h2 className='text-[32px] font-main font-medium text-black'>Free Delivery</h2>
                    <p className='text-[20px] font-main font-medium text-[#9F9F9F]'>For all oders over $50, consectetur
                        adipim scing elit.</p>
                </div>
                
                 {/* single */}
                <div className='w-[376px]'>
                    <h2 className='text-[32px] font-main font-medium text-black'>90 Days Return</h2>
                    <p className='text-[20px] font-main font-medium text-[#9F9F9F]'>If goods have problems, consectetur adipim scing elit.</p>
                </div>


                 {/* single */}
                <div className='w-[376px]'>
                    <h2 className='text-[32px] font-main font-medium text-black'>Secure Payment</h2>
                    <p className='text-[20px] font-main font-medium text-[#9F9F9F]'>100% secure payment, consectetur adipim scing elit.</p>
                </div>




            </div>
        </div>
    </section>



</>
)
}

export default Service
