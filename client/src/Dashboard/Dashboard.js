import React from 'react'

import './dashboard.css';
import logo from '../images/logooo.png'
import Hunar from '../images/KarigarLogo.png'

import Button from '@mui/material/Button';

function Dashboard() {
  return (

  <>
 
  <div className="mainContainer">

    <div className="Logo">
      <img src={Hunar} alt="" className="logo"/>
      <h1 className='LogoText'>Karigar</h1>

    </div>
    
    
    <div className="rectangleDesign">
    <nav class="navbar">



 <ul class="nav-links">

 <div class="menu">
 <li><a>Home</a></li>
 <li><a>About</a></li>

 <li><a>Pricing</a></li>
 <li><a>Contact</a></li>
 </div>
 </ul>
 </nav>
      <div>
      <img src={logo} alt="Logo Picture" className='imageContainer' />

      </div>
    </div>
    <div className="textContainer">
    <div id="header">
      Making Your life 
 
       <br /> easier
 
        
      
    </div>
    <div className="headingText">
    Will provide you home services which you never will be imagining at your home. AC services, Mechanic, Electrician and much more.All at your home.

    </div>
    <button
    // disableRipple={true}
    className='btn'
    >
      <div className="text">
        Login
      </div>
      </button>
    </div>
    
    

  </div>
  
  </>

  )
}

export default Dashboard
