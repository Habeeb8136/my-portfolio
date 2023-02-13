import CV from '../../Assets/Habeeb muhammad arif Resume (5).pdf'
import React from 'react';
import './Intro.css'
const Intro = () => {
    return (
        
        <div className='intoContainer' id='home'>
        <div className='introleft'>
        <h2>Hi ,<br></br> 
            im Habeeb muhammad Arif<br></br>
            Frontend developer</h2>
            <div className='buttonsContainer'>
            <a href={CV} dowload target="_blank" rel="noreferrer"><button>Download CV</button></a>
            <a href='#about'><button>Know more</button></a>
            <a href='#contact'><button>Contact me</button></a>
            </div>
        </div>

        </div>
       
    );
}

export default Intro;
