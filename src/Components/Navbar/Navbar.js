import React, { useState } from 'react';
import './Navbar.css'
import {FaBars, FaTimes} from 'react-icons/fa'
import {AiFillHome , AiFillGithub ,AiFillLinkedin ,AiFillMail} from 'react-icons/ai'
import {ImWhatsapp} from 'react-icons/im'
import githubLogo from '../../Assets/icons8-github-60.png'
const Navbar = () => {
  const [Clicked, setClicked] = useState(false);
  const handleClick=()=>{
    setClicked(!Clicked)
  }
    return (
        <div className='navContainer'>
          <div className='navHome'><h4 className='homeText'>Home</h4><AiFillHome className='homeicon'/></div>
          <ul className='navLinks'>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
          
          <ul className='connect'>
           <li><AiFillGithub className='gitLogo'/></li>
           <li><AiFillLinkedin className='linkedinLogo'/></li>
           <li><AiFillMail className='mailLogo'/></li>
           <li><ImWhatsapp className='whatsappLogo'/></li>
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
          <li><AiFillGithub className='gitLogo'/></li>
           <li><AiFillLinkedin className='linkedinLogo'/></li>
           <li><AiFillMail className='mailLogo'/></li>
           <li><ImWhatsapp className='whatsappLogo'/></li>
          </ul>
</div>

        </div>
    );
}

export default Navbar;
