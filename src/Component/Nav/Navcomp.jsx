import React, { useState } from 'react'
import './Nav.css'
import Logo from '../../assets/upgrade-logo.png'
import Menu from '../../assets/menuu.svg'
 
const Navcomp = () => {  
  const [isOpen, setIsOpen] = useState(false); 
  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }; 
  return (
    // <div> 
    //     <nav>
    //         <div className="logo">
    //         <img src={Logo} alt=""/> 
    //         </div> 

    //         <ul className={`nav-links ${isOpen ? "open" : ""}`} > 
    //             <li><a href="../../Component/About/AboutComp.jsx">Personal Loan</a></li>
    //             <li><a href="#">One Card</a></li>
    //             <li><a href="#">Savings</a></li>
    //             <li><a href="#">Checking</a></li>
    //             <li><a href="#">Help</a></li>
    //         </ul>
    //         <div className="btn">
    //             <button className='nav-btn'>Sign In</button>
    //         </div> 
    //         {/* MENU  */}
    //             <div className="menu" onClick={toggleMenu} > 
    //             <img src={Menu} alt=""/>
    //             </div> 
    //     </nav>
    // </div>


 <div> 
      <nav>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="../../Component/About/AboutComp.jsx">Personal Loan</a></li>
          <li><a href="#">One Card</a></li>
          <li><a href="#">Savings</a></li>
          <li><a href="#">Checking</a></li>
          <li><a href="#">Help</a></li>
        </ul>

        <div className="btn">
          <button className="nav-btn">Sign In</button>
        </div>


          {/* MENU */}
        <div className="menu" onClick={toggleMenu}>
          <img src={Menu} alt="Menu" />
        </div>
      </nav>
      
    </div>




  )
}

export default Navcomp