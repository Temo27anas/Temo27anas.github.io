import React from 'react'
import './footer.css'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
    return (
      <footer id='footer'>
          <a href="#home" className='footer__logo'>Anas Temouden</a>
          <ul className="permalinks">
              <li><a href="#home">Home</a></li>
              <li><a href="#resume">Resume</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
          </ul>

          <div className="footer__contact">
              Email me on:   <a href="mailto: anas.temouden@outlook.com"> <b>  anas.temouden@outlook.com</b></a>
          </div>
  
          <div className="footer__socials">
            <a href="https://www.linkedin.com/in/anastemouden/"><BsLinkedin/></a>
            <a href="https://github.com/Temo27anas/"><BsGithub/></a>
          </div>
  
          <div className="footer__copyright">
              <small>&copy; All copyrights</small>
          </div>
      </footer>
    )
  }
  
  export default Footer