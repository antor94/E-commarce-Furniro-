import React from 'react'
import ServiceCommon from './common/ServiceCommon'

import srcImg1 from '../assets/images/Service-customer.png'
import srcImg2 from '../assets/images/service-guarantee.png'
import srcImg3 from '../assets/images/service-shipping.png'
import srcImg4 from '../assets/images/service-trophy.png'


const Service = () => {
return (
<>

    <section id='services' className='py-[96px] mt-[85px] bg-[#FAF3EA]'>
        <div className="container">
            <div className='flex items-center justify-between'>


                <ServiceCommon srcImg={srcImg1} srcH={'High Quality'} srcP={'crafted from top materials'} />
                <ServiceCommon srcImg={srcImg2} srcH={'Warranty Protection'} srcP={'Over 2 years'} />
                <ServiceCommon srcImg={srcImg3} srcH={'Free Shipping'} srcP={'Order over 150 $'} />
                <ServiceCommon srcImg={srcImg4} srcH={'High Quality'} srcP={'crafted from top materials'} />




            </div>
        </div>
    </section>



</>
)
}

export default Service
