import React from 'react'
import './Footer.css'
import scan from '../../assets/scan-group.png' 
import playStore from '../../assets/last logo.png'
import fb from '../../assets/fb.png'
import ig from '../../assets/ig.png'
import li from '../../assets/linked-in.png'
import x from '../../assets/x.png'


 
const FooterComp = () => { 
  return (
    <div className='footer'>
        <div className="ft-sec1">
            <div className='ft-sec1-cont1'>
                <h2>ARE YOU READY TO START?</h2>
                <p>
                    Personalize your settings, follow your progress, archive your highlights and notes automatically Glose is the ultimate reading 
                </p>
                <div className="ft-btn">
                    <button>Get Started</button>
                </div>
            </div>
            {/* IMAGE CONTIANER */}
            <div className='ft-sec1-cont2'>
                <img src={scan} alt="" />
            </div>
        </div>

        {/* FOOTER SECTION 2  */}
        <div className="ft-sec2">
            <div> 

                {/* PLAYSTORE */}
                <div className='ft-store'>
                    <img src={playStore} alt="" /> 
                </div>
                {/* LINKS */}
                <div className="links">
                    <ul>
                        <li><a href="#">Personal Loan</a></li>
                        <li><a href="#">One Card</a></li>
                        <li><a href="#">Savings</a></li>
                        <li><a href="#">Checking</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>
                {/* CONNECT SOCIALS */}
                <div className='ft-social'>
                    <div className="social-cont"> 
                        <img src={x} alt="" />
                    </div>
                    <div className="social-cont">
                        <img src={ig} alt="" />
                    </div>
                    <div className="social-cont">
                        <img src={fb} alt="" />
                    </div>
                    <div className="social-cont">
                        <img src={li} alt="" />
                    </div> 
                </div>
                {/* FEEDBACK */}
                <div className="feedback">
                    <h4>Send Your Feedback: </h4>
                    <p>Mac.edargpu@tcatnac</p>
                </div>
                <div className='policy'>
                    <p>
                        Privacy Policy | Terms & Conditions | Copyright policy 
                        | Data Policy
                    </p>
                    <p>&#169; 2024 Design Monks. All rights reserved.  </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterComp