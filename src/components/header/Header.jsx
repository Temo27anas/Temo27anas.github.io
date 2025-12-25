import React from 'react'
import './header.css'


const Header = () => {
  return (
      <>
      <nav className="floating__nav">
        <a href="#home">Home</a>
        <a href="#resume">Resume</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#footer">Contact</a>
      </nav>
      <header id='home'>

        <div className="container header__container">
          <h5>Hello, I'm</h5>
          <h1>Anas Temouden</h1>
          <h5 className="text-light">AI/ML Engineer - Msc @ Aalto University</h5>
          
          <div className="cta">
            <a href="mailto:example@email.com" className='btn btn-primary'>Contact</a>
            <a href="" download className='btn'>My CV</a>
        </div>

          {/* <div className="me"></div> */}
          <a href="#resume" className='scroll__down'>Move Down</a>

        </div>
      </header>
      </>
  )
}



export default Header