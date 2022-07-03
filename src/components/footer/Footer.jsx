import React from 'react'
import './footer.css'

import {BsTwitter} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>ROY</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>
      <div className="footer__socials">
        <a href="https://twitter.com">< BsTwitter /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; RODGERS. ALL RIGHTS RESERVED</small>
      </div>
    </footer>
  )
}

export default Footer