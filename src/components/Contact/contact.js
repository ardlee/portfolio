import './contact.css';
import React, { useRef } from 'react'
import linkedinLogo from '../../assets/linkedin.png';
import igLogo from '../../assets/instagram.png';
import github from '../../assets/githubLogo.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_e6x22sg', 'template_a6yxx5b', form.current, {publicKey: 'MAiYF5YD8ZHK_9Lex',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contactpage">
      <div className="contact">
        <h1 className="contactpagetitle">Contact Me</h1>
        <span className="contactdescription">
          For any work related inquiries, please fill out the form below with your contact information and a message! My email is artlee353@gmail.com, if you would like to manually reach out.
        </span>
        <form className="contactform" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="your_name" />
          <input type="text" className="email" placeholder="Your Email (for me to reach out to)" name="your_email" />
          <textarea className="message" rows="5" placeholder="Your Message" name="message"></textarea>
          <button type="submit" value="Send" className="submit">Submit</button>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/arthur-lee-4773091a4/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn Logo" className="linkedin" />
            </a>
            <a href="https://www.instagram.com/arthurdlee?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <img src={igLogo} alt="Instagram Logo" className="linkedin" />
            </a>
            <a href="https://github.com/ardlee" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub Logo" className="linkedin" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};


export default Contact