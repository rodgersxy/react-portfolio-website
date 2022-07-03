import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_z7m9rfb', 'template_jvdkmkl', form.current, 'user_yZTDbVN6kOxVDqNWdgyjU')
    
        e.target.reset()

        
      };
    


    return (
       <section id='contact'>

           {/*===CONTACT SECTION===========*/}

           <h5>Get In Touch</h5>
           <h2>Contact Me</h2>

           <div className="container contact__container">
               <div className="contact__options">

                   <article className='contact__option'>
                       <HiOutlineMail className='contact__option-icon'/>
                       <h4>Email</h4>
                       <h5>rodgersny99@gmail.com</h5>
                        <a href="mailto:mogakaroy@gmail.com" target='_blank'>Send Email</a>
                   </article>
                   <article className='contact__option'>
                       <BsWhatsapp className='contact__option-icon'/>
                       <h4>WhatsApp</h4>
            
                       <a href="https://web.whatsapp.com/send?phone=+254726746234" target='_blank'>Send a Message</a>
                   </article>
                   

               </div>

               {/*== FORM SECTION=== */}

               <form ref={form} onSubmit={sendEmail}>
                   <input type="text" name='name' placeholder='Your full name' required />
                   <input type="email" name='email' placeholder='Your Email' required  />
                   <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
                   <button type='submit' className='btn btn-primary'>Send Message</button>
               </form>
           </div>
       </section>
    )
}

export default Contact
