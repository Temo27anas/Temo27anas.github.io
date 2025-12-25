import React from 'react'
import ResumeItemsList from './ItemsList'
import './resume.css'
import { data_studies, data_work } from '../../assets/data.js'

const Resume = () => {
  return (
    <>
    
    <section id="resume">
    <h5>My Experiences & Academic Background</h5>
    <h2>Resume</h2>

    <div className="container resume__container">
      <div className="container education__container">
      <h3 className='sub_title_resume'>Academic Experience: </h3>
      <ResumeItemsList dataList={data_studies} />
      </div>

      <div className="container professional__container">
        <h3 className='sub_title_resume'>Professional Experience: </h3>
        <ResumeItemsList dataList={data_work} />

      </div>

    </div>
    </section>
    </>
  )
}

export default Resume