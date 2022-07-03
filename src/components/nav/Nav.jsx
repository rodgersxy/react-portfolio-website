import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {MdMiscellaneousServices} from 'react-icons/md'
import {BsFillChatLeftDotsFill} from 'react-icons/bs'

import { useState } from 'react'


const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience"><BiBook /></a>
      <a href="#services"><MdMiscellaneousServices /></a>
      <a href="#contact"><BsFillChatLeftDotsFill /></a>
    </nav>
  )
}

export default Nav