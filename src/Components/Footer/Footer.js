import React from 'react';
import './Fotter.css'
import { AiFillGithub ,AiFillLinkedin ,AiFillMail} from 'react-icons/ai'
import {ImWhatsapp} from 'react-icons/im'
const Footer = () => {
    return (
        <div className='footerContainer'>
        <div >
        <h2>Habeeb Muhammad Arif</h2>
            <h5>Porfolio app build using React</h5>
        </div>
            <ul className='connect'>
           <li><AiFillGithub className='gitLogo'/></li>
           <li><AiFillLinkedin className='linkedinLogo'/></li>
           <li><AiFillMail className='mailLogo'/></li>
           <li><ImWhatsapp className='whatsappLogo'/></li>
          </ul>
        </div>
    );
}

export default Footer;
