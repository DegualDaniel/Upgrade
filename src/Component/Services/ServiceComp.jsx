import React from 'react'
import './Service.css'
import fire from '../../assets/fire.png'
import service from '../../assets/service1.png'
import globe from '../../assets/Frame3.png'
import chart from '../../assets/Frame2.png'
import tom1 from '../../assets/tom1.png'
import chart2 from '../../assets/Frame3.png'
import tom2 from '../../assets/tom2.png'
import img1 from '../../assets/card1.png'
import img2 from '../../assets/card2.png'
import img3 from '../../assets/card3.png'

const ServiceComp = () => {
  return (
    <div className='service'>
        <div className="service-sec">
            <div className="service-sec1">
                <div className="service-title">
                    <img src={fire} alt="" />
                    <p>Services</p>
                </div>
                <div className="service-head">
                    <h2>CAN HELP YOU ACHIEVE
                         FINANCIAL SUCCESS
                    </h2>
                </div>
            </div>
            {/*  SECTION 2 */}
            <div className="service-sec2">
                <div className="service-sec2-cont1">
                    <img src={service} alt="" />
                </div>
                <div className="service-sec2-cont2">
                    <div className='service-cont2-bx1'>
                        <img src={globe} alt="" />
                    </div>
                    <div className='service-bx1-text1'>
                        <h3>Transfers Accros The 
                            Globe Are Free
                        </h3>
                    </div>
                </div>
            </div>
            {/*  SECTION 3 */}
            <div className="service-sec3">
                <div className="service-sec3-cont1 serv3-cont">
                    <div className="service3-cont1-bx1">
                        <img src={chart} alt="" />
                        <h3>Create A Card That Is 
                            Unique And Customized
                        </h3>
                        <p>we offer a comprehensive range of innovative financial services tailored to meet your needs. Our services include High-Yield Savings Accounts. </p>
                    </div>
                    <div className="service3-cont1-bx2">
                        <div className='service3-img-cont'>
                            <img src={tom1} alt="" />
                        </div>
                    </div>
                </div>

                {/* SERVICE-3 - CONTAINER 2  */}
                <div className="service-sec3-cont2 serv3-cont">
                    <div className="service3-cont1-bx1">
                        <img src={chart2} alt="" />
                        <h3>Personalized Insights And Financial Goals
                        </h3>
                        <p>savings accounts that offer competitive interest rates and flexible deposit options. Investment Invest wisely with our personalized.Our services include High-Yield Savings  </p>
                    </div>                    
                    <div className="service3-cont1-bx2">
                        <div className='service3-img-cont'>
                            <img src={tom2} alt="" />
                        </div>
                    </div>
                </div> 
            </div>
            {/* SECTION 4  */}
            <div className="service-sec4">
                <div className="service-sec4-cont">
                    <div className='sec4-imgCont'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='sec4-imgCont'>
                        <img src={img2} alt="" />
                    </div>
                    <div className='sec4-imgCont'>
                        <img src={img3} alt="" />
                    </div>
                </div>
            </div>
            {/* SERVICE BTN */}
            <div className="service-btn">
                <button>View More</button>
            </div>
        </div>
    </div>
  )
}

export default ServiceComp