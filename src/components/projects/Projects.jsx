import React from 'react'
import './projects.css'
import project_edge_img from '../../assets/project_edge.png'
import project_fgi_img from '../../assets/project_fgi.gif'
import Project from './Project.jsx'

const Projects = () => {
  return (
    <section id='projects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <Project img={project_edge_img} title='Edge-Based Real-Time Vehicle Identifier for Traffic Monitoring' techs='Computer Vision, Pytorch, ONNX, TensorRT, Docker, Git ' link='#' />
        <Project img={project_fgi_img} title='Vision Transformers (ViTs) for Species Classification of LiDAR 3D Point Cloud Trees' techs='Computer Vision, Pytorch, Docker, Git' link='#' />

      </div>
    </section>
  )
}

export default Projects