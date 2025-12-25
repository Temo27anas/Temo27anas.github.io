import React from 'react'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import {IoLogoCss3} from 'react-icons/io'

import './skills.css'


const Skills = () => {
  return (
    <section id='skills'>

      <h5>The skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

        <div className="experience_card">
            <h3>ML/AI</h3>

            <div className="experience__content">

              <article className='experience__details'>
               {<BsFillPatchCheckFill className='experience__details-icon'/>}
                <div>
                  <h4>Numpy</h4>
                </div>
              </article>

              <article className='experience__details'>
               {<BsFillPatchCheckFill className='experience__details-icon'/>}
                <div>
                  <h4>Pandas</h4>
                </div>
              </article>

              <article className='experience__details'>
               {<BsFillPatchCheckFill className='experience__details-icon'/>}
                <div>
                  <h4>Matplotlib</h4>
                </div>
              </article>

              <article className='experience__details'>
               {<BsFillPatchCheckFill className='experience__details-icon'/>}
                <div>
                  <h4>Scikit-learn</h4>
                </div>
              </article>

              <article className='experience__details'>
               {<BsFillPatchCheckFill className='experience__details-icon'/>}
                <div>
                  <h4>Pytorch</h4>
                </div>
              </article>

              <article className='experience__details'>
               {<BsFillPatchCheckFill className='experience__details-icon'/>}
                <div>
                  <h4>MLFlow</h4>
                </div>
              </article>

              <article className='experience__details'>
               {<BsFillPatchCheckFill className='experience__details-icon'/>}
                <div>
                  <h4>Deep Learning</h4>
                </div>
              </article>

              <article className='experience__details'>
               {<BsFillPatchCheckFill className='experience__details-icon'/>}
                <div>
                  <h4>Computer Vison</h4>
                </div>
              </article>
           
            </div>
        </div>
   
        <div className="experience_card">
            <h3>Software Engineering</h3>
            <div className="experience__content">

              <article className='experience__details'>
              {<BsFillPatchCheckFill className='experience__details-icon'/>}
                <div>
                  <h4>Python</h4>
                </div>
              </article>
             
             <article className='experience__details'>
               {<BsFillPatchCheckFill className='experience__details-icon'/>}
                <div>
                  <h4>SQL</h4>
                </div>
              </article>

              <article className='experience__details'>
               {<BsFillPatchCheckFill className='experience__details-icon'/>}
                <div>
                  <h4>C++</h4>
                </div>
              </article>

              <article className='experience__details'>
               {<BsFillPatchCheckFill className='experience__details-icon'/>}
                <div>
                  <h4>Docker</h4>
                </div>
              </article>

              <article className='experience__details'>
               {<BsFillPatchCheckFill className='experience__details-icon'/>}
                <div>
                  <h4>Git</h4>
                </div>
              </article>

              <article className='experience__details'>
               {<BsFillPatchCheckFill className='experience__details-icon'/>}
                <div>
                  <h4>Linux & Bash</h4>
                </div>
              </article>

              <article className='experience__details'>
               {<BsFillPatchCheckFill className='experience__details-icon'/>}
                <div>
                  <h4>Cloud Computing</h4>
                </div>
              </article>

            </div>
        </div>
      </div>
    </section>
  )
}

export default Skills