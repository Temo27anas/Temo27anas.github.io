import React from "react";
import './projects.css'


const Project = ({ img, title, techs, link }) => {
    return (
        <article className="portfolio__item">
        <div className="portfolio__item-image">
            <img src={img} alt="" />
        </div>
        <h3>{title}</h3>
        <small className="text-light">{techs}</small>
        <div className="portfolio__item-cta">
            <a href={link} target="_blank" rel="noreferrer" className="btn">
            Github
            </a>
        </div>
        </article>
    );
    }


export default Project;
    
