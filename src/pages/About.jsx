import React from 'react'
import BreadCrum from '../components/common/BreadCrum'
import aboutImg1 from '../assets/images/aboutImg1.png'
import aboutImg2 from '../assets/images/aboutImg2.png'
import aboutImg3 from '../assets/images/aboutImg3.png'
import AboutCommon from '../components/common/AboutCommon'

const About = () => {
  return (
    <>
    
    
    <section id='about'>
          <BreadCrum breadContent={'Blog'} />
        <div className="container">
            <div id='about-row' className='mt-[106px]'>

                {/* ---------------- left -side */}

                <AboutCommon aboutImg={aboutImg1} aboutH2={''} aboutP={''} />
                <AboutCommon aboutImg={aboutImg2} aboutH2={''} aboutP={''} />
                <AboutCommon aboutImg={aboutImg3} aboutH2={''} aboutP={''} />
         

                



            </div>
        </div>
    </section>
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default About