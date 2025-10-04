import React from 'react'
import BreadCrum from '../components/common/BreadCrum'
import aboutImg from '../assets/images/aboutImg1.png'
import AboutCommon from '../components/common/AboutCommon'

const About = () => {
  return (
    <>
    
    
    <section id='about'>
          <BreadCrum breadContent={'Blog'} />
        <div className="container">
            <div id='about-row' className='mt-[106px]'>

                {/* ---------------- left -side */}

                <AboutCommon />
                <AboutCommon />
                <AboutCommon />

                



            </div>
        </div>
    </section>
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default About