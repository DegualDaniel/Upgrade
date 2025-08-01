import React from 'react'
import './Home.css'
import Navcomp from '../Nav/Navcomp'
import hero from '../../assets/home-img.png'
import fire from '../../assets/fire.png'
import arrow from '../../assets/Right Button.png'
// import SponsorComp from '../Sponsor/SponsorComp'
const Homecomp = () => {
  return (
    <div className='home'>
      {/* NAV BAR */}
    <Navcomp /> 
    {/*  **  */}
    <div className="home-cont">
      <div className="cont1">
        <div className='cont1-bx1'>
          <img src={fire} alt="" />
          <p>100% TRUSTED PLATFORM </p>
        </div>
        <div className='cont1-text'>
          <h1>FINANCE WITH
            SECURITY AND <br />
            <span>FLEXIBILITY...</span>
          </h1>
        </div>
        <div className='cont1-text2'>
          <h3>No-Fee Checking Account With Cash 
            Back Rewards.<br />
            Enjoy Fee-Free Banking And Earn
            Cash Back On Your <br />
            Everyday Purchases.
          </h3>
        </div>
        <div className='home-btn'>
          <button>Open Account</button>
          <img src={arrow} alt="" />
        </div>
      </div>


      <div className="cont2">
        <img src={hero} alt="" />
      </div>
    </div>
    {/* < SponsorComp /> */}
    </div>
  )
}

export default Homecomp




