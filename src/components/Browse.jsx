import React from 'react'
import BrowseCommon from './common/BrowseCommon'
import browse1 from '../assets/images/browse1.png'
import browse2 from '../assets/images/browse2.png'
import browse3 from '../assets/images/browse3.png'

const Browse = () => {
  return (
    <>
    
    <section id='browse' className='py-[56px]'>
        <div className="container">
            <div id='browse-row'>
                <div className='text-center'>
                    <h2 className='text-[32px] font-bold font-popins text-[#333333]'>Browse The Range</h2>
                    <p className='text-[20px] font-normal font-popins text-[#666666]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div className='flex justify-center gap-[30px]'>
                        <BrowseCommon comimg={browse1} comh2={'Dining'} />
                        <BrowseCommon comimg={browse2} comh2={'Living'} />
                        <BrowseCommon comimg={browse3} comh2={'Bedroom'} />
                      
                    </div>


            </div>
        </div>
    </section>
    
    
    </> 
  )
}

export default Browse