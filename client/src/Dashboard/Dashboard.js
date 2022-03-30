import React from 'react'
import NavBar from '../shared/components/Navbar/Navbar';
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
      <h1>Karigar</h1>

    </div>
    
    <div className="rectangleDesign">
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
