import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='navContainer'>
          <div className='navHome'><h4>Habeeb Muhammad Arif</h4></div>
          <ul className='navLinks'>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          
          <ul className='connect'>
          <li>Git</li>
          <li>Li</li>
          <li>Mail</li>
          <li>ig</li>
          
          </ul>
        </div>
    );
}

export default Navbar;
