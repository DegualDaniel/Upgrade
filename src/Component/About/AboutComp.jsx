import React from 'react'
import './About.css'
import fire from '../../assets/fire.png'
import chart from '../../assets/chart.png'
import scale from '../../assets/scalee.png'



const AboutComp = () => {
  return (
    <div className='about'>

        <div className='about-sec'>
            <div className="about-cont1">
                <img src={chart} alt="" />
            </div>
            {/*  */}
            <div className="about-cont2">
                <div className="about-title">
                    <img src={fire} alt="" />
                    <p>About Us</p>
                </div>

                <div className="about-head">
                    <h2>ALL YOUR MONEY <br />
                    NEEDS  IN ONE APP
                    </h2>
                </div>

                <div className="about-scale">
                    <div className='scale-img'>
                        <img src={scale} alt="" />
                    </div>
                    <div className='text-cont'>
                        <div className="text">
                            <h2>Expenses Tracker </h2>
                            <p>Our comprehensive selection of
                                medications,<br />
                                 supplements, and 
                                healthcare products.
                            </p>
                        </div>
                        <div className="text">
                             <h2>Crypto Connection</h2>
                            <p>From advanced imaging technology
                                such as MRI <br />  and CT spanners to
                                precision surgical tools.
                            </p>
                        </div>
                        <div className="text">
                             <h2>Automated Invoicing</h2>
                            <p>We're committed to leveraging 
                                the latest innovations <br />
                                 in medical technology.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutComp