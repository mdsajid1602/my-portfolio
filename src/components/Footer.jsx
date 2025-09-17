import React from 'react'
import './footer.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="right"> © 2025 Md Sajid. All rights reserved.</div>
      <div className='profile'>
        <a href="">
          <FaGithub />
        </a>
        <a href="">
          <FaLinkedin />
        </a>
        <a href="">
          <SiLeetcode />
        </a>
        <a href="">
          <FaInstagramSquare />
        </a>
      </div>
    </div>
  )
}

export default Footer
