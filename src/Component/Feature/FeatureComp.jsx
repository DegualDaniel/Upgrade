import React from 'react'
import './Feature.css'
import fire from '../../assets/fire.png'
import feature from '../../assets/Featured-img.png'



const FeatureComp = () => {
  return (
    <div className='feature'>
        <div className="feature-sec">
        <div className="feature-sec1">
            <div className="feature-title">
                <img src={fire} alt="" />
                <p>Featured</p>
            </div>
        <div className='feature-head'>
            <h2>ALL THE FEATURES <br />
             IN ONE APP
            </h2>
        </div>
        <div className='feature-text'>
            <p>
               . Get 3% Cash Back On<br />
                Everyday Purchases, 2% On Everything Else4
            </p>
            <p>
                . Extra Spending Power when you have Rewards Checking <br />
                 through Upgrade6
            </p>
        </div>
                {/* BUTTON */}
        <div className="feature-btn">
            <button>Get Started</button>
        </div>
        </div>
        <div className="feature-sec2">
            <img src={feature} alt="" />
        </div>

        </div>
    </div>
  )
}

export default FeatureComp