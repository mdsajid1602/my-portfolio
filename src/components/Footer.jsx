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
        <a href="https://github.com/mdsajid1602">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/md-sajid-b9273a229/">
          <FaLinkedin />
        </a>
        <a href="https://leetcode.com/u/mdsajid123/">
          <SiLeetcode />
        </a>
        <a href="https://www.instagram.com/ss_sajid_1602_____/">
          <FaInstagramSquare />
        </a>
      </div>
    </div>
  )
}

export default Footer
