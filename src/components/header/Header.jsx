import React, { useState, useEffect } from 'react'
import './header.css'


const Header = () => {
  const greetings = ['Hello, I\'m', 'Hei, Olen', 'Bonjour, je suis', 'Merhaba, ben', 'Hej, det är jag', 'مرحبا، أنا']
  const [currentGreeting, setCurrentGreeting] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

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

        <video autoPlay muted loop className="header__video" playsInline>
          <source src="/aurora.mp4" type="video/mp4" />
        </video>

        <div className="container header__container">
          <h5 className="rotating-greeting">{greetings[currentGreeting]}</h5>
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