import React from 'react';
import {AiFillEye ,AiFillCode} from 'react-icons/ai'
const ProjectCard = (props) => {
    return (
        <div className='projectCard'>
        
            <div className='image'>
                <img src={props.src} alt=""></img> 
            </div>
            <div className='description'>
                <p><strong>{props.title}</strong></p>
                <p><small>{props.description}</small></p>
            </div>
            <div className='buttonsLink'>
            <div className='link link1'><a href={props.deployment} target="_blank" rel="noreferrer"><AiFillEye className='viewButton'/></a></div> 
            <div className='link link2'><a href={props.github} target="_blank" rel="noreferrer"><AiFillCode className='codeButton'/></a></div> 
            </div>
        </div>
    );
}

export default ProjectCard;
