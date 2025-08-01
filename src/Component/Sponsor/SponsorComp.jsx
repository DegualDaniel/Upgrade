import React from 'react'
import './Sponsor.css'

import img1 from '../../assets/sponsor1.png'
import img2 from '../../assets/sponsor2.png' 
import img3 from '../../assets/sponsor3.png' 
import img4 from '../../assets/sponsor4.png' 
import img5 from '../../assets/sponsor5-Paypal.png'
import img6 from '../../assets/sponsor6.png'




const SponsorComp = () => {
  return (
    <div className='sponsor'>
        <div className="sponsor-cont">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        </div>
    </div>
  )
}

export default SponsorComp