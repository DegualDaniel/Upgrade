import React from 'react'
import './Trust.css'
import trust from '../../assets/phone-card.png'
import fire from '../../assets/fire.png'




const TrustComp = () => {
  return (
    <div className='trust'>
        <div className="trust-sec">
            <div className="trust-sec1">
                <img src={trust} alt="" />
            </div>
            {/*  */}

                <div className="trust-sec2">
                    <div className="trust-title">
                            <img src={fire} alt="" />
                            <p>TRUSTWORTHINESS</p> 
                    </div>
                    <div className="trust-head">
                        <h2>WE VALUE YOUR TRUST 
                            AND SECURITY
                        </h2>
                    </div>
                    <div className="trust-para">
                        <p>Our Mission Is To Make Finance
                            More Accesible, Transparent,And Secure
                            For Everyone. With Cuting.
                        </p>
                    </div>
                    <div className="trust-btn">
                        <button>Get Started</button>
                    </div>
                </div>
        </div>
    </div>
 
  )
}

export default TrustComp