import React from 'react';
import './About.css'
import htmlLogo from '../../Assets/icons8-html-5-48.png'
import cssLogo from '../../Assets/css3.png'
import jsLogo from '../../Assets/javascript--v1.png'
import reactLogo from '../../Assets/react.png'
import reduxLogo from '../../Assets/redux.png'
import mongoDbLogo from '../../Assets/mongodb.png'
import expressLogo from '../../Assets/icons8-express-js-50.png'
import githubLogo from '../../Assets/icons8-github-60.png'
import gitLogo from '../../Assets/git.png'
import visualStudioLogo from '../../Assets/visual-studio-code-2019.png'
const About = () => {
   
    return (
        
        <div className='AboutContainer' id='about'>
        <br></br>
        <br></br>
            <h1 className='heading'>About me</h1>
            <br></br><br></br>
            <p>A Passionate and Solution driven Software developer with 1.5+ years of hands-on experience in creating and maintaining responsive, user-friendly, and scalable Web and Mobile App using latest technologies. Talented with a strong ability to produce clean and reusable code and work well with others. With keen interest in Design Aesthetics I am dedicated in making picture-perfect UI with increased Performance and best user experience.</p><br></br>
            <p>worked on several <a href='/'>projects</a> creating and developing ui for web applications</p><br></br>
            <h4>Tools and technologies familiar with..</h4>
            <div className='techStack'>
            <div className='techstach1'>
            <div>
                <img src={htmlLogo} alt=""></img>
                <p>HTML</p>
            </div>
            <div>
                <img src={cssLogo} alt=""></img>
                <p>CSS</p>
            </div>
            <div>
                <img src={jsLogo} alt=""></img>
                <p>JavaScript</p>
            </div>
            <div>
                <img src={githubLogo} alt=""></img>
                <p>Github</p>
            </div>
            <div>
                <img src={gitLogo} alt=""></img>
                <p>Git</p>
            </div>
            <div>
                <img src={visualStudioLogo} alt=""></img>
                <p>VS Code</p>
            </div>
            </div>
            <div className='techstack2'>
            <div>
            <img src={reactLogo} alt=""></img>
                <p>React</p>
            </div>
            <div>
                <img src={reduxLogo} alt=""></img>
                <p>Redux</p>
            </div>
            <div>
                <img src={mongoDbLogo} alt=""></img>
                <p>MongoDB</p>
            </div>
            <div>
                <img src={expressLogo} alt=""></img>
                <p>ExpressJS</p>
            </div>
            </div>
                
            </div>
        </div>
       
    );
}

export default About;
