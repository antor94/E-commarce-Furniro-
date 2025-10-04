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

                <AboutCommon aboutImg={aboutImg1} aboutH2={'Going all-in with millennial design'} aboutP={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'} />
                <AboutCommon aboutImg={aboutImg2} aboutH2={'Exploring new ways of decorating'} aboutP={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'} />
                <AboutCommon aboutImg={aboutImg3} aboutH2={'Handmade pieces that took time to make'} aboutP={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'} />
         

                



            </div>
        </div>
    </section>
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default About