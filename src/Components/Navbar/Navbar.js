import React from 'react';
import './Navbar.css'
const Navbar = () => {
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

        </div>
    );
}

export default Navbar;
