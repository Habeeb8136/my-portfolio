import CV from '../../Assets/Habeeb Muhammad Arif HSE CV.pdf'
import React from 'react';
import './Intro.css'
const Intro = () => {
    return (
        <div className='intoContainer'>
        <div className='introleft'>
        <h2>Hi ,<br></br> 
            im Habeeb muhammad Arif<br></br>
            Frontend developer</h2>
            <div className='buttonsContainer'>
            <a href={CV} dowload ><button>Download CV</button></a>
            <button>Know more</button>
            <button>Contact me</button>
            </div>
        </div>

        
            
        </div>
    );
}

export default Intro;
