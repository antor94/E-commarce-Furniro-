import React from 'react'
import ServiceCommon from './common/ServiceCommon'

const Service = () => {
return (
<>

    <section id='services' className='py-[96px] mt-[85px] bg-[#FAF3EA]'>
        <div className="container">
            <div className='flex items-center justify-between'>


                <ServiceCommon srcImg={''} srcH={'High Quality'} srcP={'crafted from top materials'} />
                <ServiceCommon srcImg={''} srcH={'Warranty Protection'} srcP={'Over 2 years'} />
                <ServiceCommon srcImg={''} srcH={'Free Shipping'} srcP={'Order over 150 $'} />
                <ServiceCommon srcImg={''} srcH={'High Quality'} srcP={'crafted from top materials'} />




            </div>
        </div>
    </section>



</>
)
}

export default Service
