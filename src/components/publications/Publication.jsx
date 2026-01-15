import React from "react";
import './publications.css'


const Publication = ({ title, authors, journal, year, link, doi }) => {
    return (
        <article className="publication__item">
            <div className="publication__content">
                <h3>{title}</h3>
                <small className="text-light publication__authors">{authors}</small>
                <p className="publication__journal">{journal}</p>
                <div className="publication__meta">
                    <span className="publication__year">{year}</span>
                    {doi && <span className="publication__doi">{doi}</span>}
                </div>
            </div>
            <div className="publication__item-cta">
                <a href={link} target="_blank" rel="noreferrer" className="btn">
                    Read Paper
                </a>
            </div>
        </article>
    );
}


export default Publication;
