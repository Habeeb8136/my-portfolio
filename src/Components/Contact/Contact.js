import React, { useState } from 'react';
import emailjs from 'emailjs-com'
import './Contact.css'
import {IoLogoWhatsapp} from 'react-icons/io'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'
import {RiMailSendFill} from 'react-icons/ri'

const Contact = () => {

    const [alert,setAlert]=useState(false)

    function sendMsg(e){
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_2pwz649', e.target, 'x7wgSqUIWpgG-kNru')
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          });
          
          e.target.reset();
          handleClick()
    }
    function handleClick(){
        setAlert(!alert) 
    }

    return (
       <>
        <h1 className='heading' id='contact'>Contact</h1>
        <div className='contactsContainer'>
        
            {alert?<div className='alert'>
                <div><p>Message sent succesfully</p></div>
                <div  onClick={handleClick}><AiFillCloseCircle className='alertCloseBtn' >close</AiFillCloseCircle></div>
            </div>: null}
            

            <div className='redirectMsg'>
            <a href="tel:+918136899923" target="_blank" rel="noreferrer"><div className='mob'>
                <BsFillTelephoneFill className='telLogo'/>
                    <p>Mobile no.</p>
                    <h5>+91 8136899923</h5>
                    <h4><small>call</small></h4>
                </div></a>
                <a href="https://wa.me/918136899923" target="_blank" rel="noreferrer"><div className='whatsapp'>
                    <IoLogoWhatsapp className='whatsLogo'/>
                    <p>whatsapp</p>
                    <h5>+91 8136899923</h5>
                    <h4><small>send a message</small></h4>
                </div></a>
            </div>


            <div className='formMsg'>
            <h3>send a message</h3>
                <form onSubmit={sendMsg} className='form'>
                    <input name='name' type='text' placeholder='Enter fullname' required></input>
                    <input name='email' type='email' placeholder='Your email id' required></input>
                    <textarea name='message' rows='4' placeholder='Message' required></textarea>
                    <button type='submit' className='sendBtn'>Send <RiMailSendFill /></button>
                </form>
            </div>
        </div>
        </>
    );
}

export default Contact;
