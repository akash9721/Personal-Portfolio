import React from 'react'
import './ContactMe.css'
import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';
import resume from '../../img/Resume.pdf'
export const ContactMe = () => {
  const form = useRef();
  const resumeUrl = 'https://drive.google.com/file/d/1sMmdSwqBnIa5XVc6JK0-DOqan7eW_e5E/view?usp=drive_link';

  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pxkuv5r', 'template_wwyag1f', form.current, 'xVRMjJu-XjA2m_rsN')
      .then((result) => {
        console.log(result.text);
        setDone(true);
        form.current.reset(); // Clear form fields after successful submission
        setTimeout(() => setDone(false), 5000);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <div className="contact" id='contact'>
        <div className="container">
          <div className="row">
            <div className="contact-left">
              <h1 className="sub-title">Contact Me</h1>
              <p><i class="fa-solid fa-envelope"></i>akashkumar972177@gmail.com</p>
              <p><i class="fa-solid fa-phone"></i>7011008898</p>
              <div className="social-icons">
                <a href="" target='_blank'><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/akashkumar1502/" target='_blank'><i class="fa-brands fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/akash-kumar-335085193/" target='_blank'><i class="fa-brands fa-linkedin"></i></a>
                <a href="" target='_blank'><i class="fa-brands fa-youtube"></i></a>
              </div>
              <a href={resumeUrl} target='_blank' download="Resume.pdf" className='btn btn2'>Download Resume</a>
            </div>
            <div className="contact-right">
              <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Your Name' required />
                <input type="email" name='user_email' className='user' placeholder='Your Email' required />
                <textarea name="message" rows="8" className='user' placeholder='Your message'></textarea>
                <button type='submit' className='btn btn2'>Submit</button>
              </form>
            </div>
          </div>
          {done && (
            <div className="success-message" style={{color:'white',textAlign:'center'}}>
              Message sent successfully!
            </div>
          )}
        </div>
      </div>
    </>
  )
}
