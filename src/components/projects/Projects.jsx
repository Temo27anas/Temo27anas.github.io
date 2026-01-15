import React from 'react'
import './projects.css'
import project_edge_img from '/project_edge.png'
import project_fgi_img from '/project_fgi.gif'
import Project from './Project.jsx'
import project_churn_img from '/project_churn.png'
import project_arp_img from '/project_arp.png'
import project_rep_img from '/project_rep.png'

const Projects = () => {
  return (
    <section id='projects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <Project img={project_edge_img} title='Edge-Based Real-Time Vehicle Identifier for Traffic Monitoring' techs='Computer Vision, Pytorch, ONNX, TensorRT, Docker, Git ' link='#' />
        <Project img={project_fgi_img} title='Vision Transformers (ViTs) for Species Classification of LiDAR 3D Point Cloud Trees' techs='Computer Vision, Pytorch, Docker, Git' link='#' />
        <Project img={project_rep_img} title='MLOps Project: Real Estate Pricing usecase' techs='Python, Sckit-learn, MLFlow, Optuna, Docker, AWS, FastAPI' link='https://github.com/Temo27anas/real-estate-pricing' />
        <Project img={project_churn_img} title='Telecom Customer Churn Analysis' techs='Data Analysis, Power BI' link='#' />
        <Project img={project_arp_img} title='Aircraft Routing Problem (Usecase: RXP)' techs='Data Analysis, Optimization, Python (pulp)' link='https://github.com/Temo27anas/Aircraft-Routing-Problem' />



      </div>
    </section>
  )
}

export default Projects