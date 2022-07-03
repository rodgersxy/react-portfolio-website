import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {RiAwardFill} from 'react-icons/ri'
import {FiUsers} from 'react-icons/fi'
import {HiLibrary} from 'react-icons/hi'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <RiAwardFill className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ year Working </small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small></small>
            </article>
            <article className='about__card'>
              <HiLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small></small>
            </article>
          </div>
          <p>
            My name is Rodgers Mogaka, a frontend developer, i code for a living. 
            Am open for a full time or remote jobs.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Connect</a>
        </div>
      </div>
    </section>
  )
}

export default About