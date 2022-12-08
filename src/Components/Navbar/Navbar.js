import React, { useState } from 'react';
import './Navbar.css'
import {FaBars, FaTimes} from 'react-icons/fa'
const Navbar = () => {
  const [Clicked, setClicked] = useState(false);
  const handleClick=()=>{
    setClicked(!Clicked)
  }
    return (
        <div className='navContainer'>
          <div className='navHome'><h4>Home</h4></div>
          <ul className='navLinks'>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
          
          <ul className='connect'>
           <li>Git</li>
           <li>Li</li>
           <li>Mail</li>
           <li>ig</li>
          </ul>
<div className='menuBtn' onClick={handleClick} >
{Clicked? <FaTimes />:<FaBars />}


</div>

<div className={Clicked? 'navSmScreen active':'navSmScreen'}>
<ul className='navLinksSmScreen'>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
          
          <ul className='connectsmScreen'>
           <li>Git</li>
           <li>Li</li>
           <li>Mail</li>
           <li>ig</li>
          </ul>
</div>

        </div>
    );
}

export default Navbar;
