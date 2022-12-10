import React, { useState } from 'react';
import './Navbar.css'
import {FaBars, FaTimes} from 'react-icons/fa'
import {AiFillHome , AiFillGithub ,AiFillLinkedin ,AiFillMail} from 'react-icons/ai'
import {ImWhatsapp} from 'react-icons/im'
const Navbar = () => {
  

  // const scrollTo=(componentTo)=>{
  //   window.scrollTo({
  //     top:componentTo.offsetTop,
  //     behavior:'smooth'
  //   })
  // }

  const [Clicked, setClicked] = useState(false);
  const handleClick=()=>{
    setClicked(!Clicked)
  }
    return (
        <div className='navContainer'>
          <a href='#home'><div className='navHome'><h4 className='homeText'>Home</h4><AiFillHome className='homeicon'/></div></a>
          <ul className='navLinks'>
            <a href='#about'><li >About</li></a>
            <a href='#projects'><li >Projects</li></a>
            <a href='#contact'><li >Contact</li></a>
          </ul>
          
          <ul className='connect'>
           <li><a href='https://github.com/Habeeb8136' target='_blank' rel='noreferrer' ><AiFillGithub className='gitLogo'/></a></li>
           <li><a href='https://www.linkedin.com/in/habeeb-muhammad-arif-b7445520a' target="_blank" rel="noreferrer"><AiFillLinkedin className='linkedinLogo'/></a></li>
           <li><a href="mailto:habeeb041099@gmail.com"><AiFillMail className='mailLogo'/></a></li>
           <li><a href="https://wa.me/918136899923" target="_blank" rel="noreferrer"><ImWhatsapp className='whatsappLogo'/></a></li>
          </ul>
<div className='menuBtn' onClick={handleClick} >
{Clicked? <FaTimes />:<FaBars />}


</div>

<div className={Clicked? 'navSmScreen active':'navSmScreen'}>
          <ul className='navLinksSmScreen'>
            <a href='#about'><li >About</li></a>
            <a href='#projects'><li >Projects</li></a>
            <a href='#contact'><li >Contact</li></a>
          </ul>
          
          <ul className='connectsmScreen'>
          <li><a href='https://github.com/Habeeb8136' target='_blank' rel='noreferrer' ><AiFillGithub className='gitLogo'/></a></li>
           <li><a href='https://www.linkedin.com/in/habeeb-muhammad-arif-b7445520a' target="_blank" rel="noreferrer"><AiFillLinkedin className='linkedinLogo'/></a></li>
           <li><a href="mailto:habeeb041099@gmail.com"><AiFillMail className='mailLogo'/></a></li>
           <li><a href="https://wa.me/918136899923" target="_blank" rel="noreferrer"><ImWhatsapp className='whatsappLogo'/></a></li>
          </ul>
</div>

        </div>
    );
}

export default Navbar;
