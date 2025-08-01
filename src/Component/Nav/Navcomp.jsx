import React from 'react'
import './Nav.css'
import Logo from '../../assets/upgrade-logo.png'
import Menu from '../../assets/menuu.svg'


const Navcomp = () => {
  return (
    <div> 
        <nav>
            <div className="logo">
            <img src={Logo} alt=""/>
                {/* <p> Gual </p>  */}
            </div>

            <ul>
                <li><a href="../../Component/About/AboutComp.jsx">Personal Loan</a></li>
                <li><a href="#">One Card</a></li>
                <li><a href="#">Savings</a></li>
                <li><a href="#">Checking</a></li>
                <li><a href="#">Help</a></li>
            </ul>
            <div className="btn">
                <button className='nav-btn'>Sign In</button>
            </div>
            <li className="menu"><a href="#"> 
                <img src={Menu} alt=""/>
            </a></li>
        </nav>
    </div>
  )
}

export default Navcomp