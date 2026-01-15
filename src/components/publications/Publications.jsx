import React from 'react'
import './publications.css'
import Publication from './Publication.jsx'

const Publications = () => {
  const publications = [
{
  title: "A comprehensive survey on TinyML",
  authors: "Youssef Abadade, Anas Temouden, Hatim Bamoumen, Nabil Benamar, Yousra Chtouki, Abdelhakim Senhaji Hafid",
  journal: "IEEE Access",
  year: "2023",
  link: "https://ieeexplore.ieee.org/abstract/document/10177729/",
  doi: "10.1109/ACCESS.2023.3294111"
},
{
  title: "How TinyML can be leveraged to solve environmental problems: A survey",
  authors: "Hatim Bamoumen, Anas Temouden, Nabil Benamar, Yousra Chtouki",
  journal: "2022 International Conference on Innovation and Intelligence for Informatics, Computing, and Technologies (3ICT)",
  year: "2022",
  link: "https://ieeexplore.ieee.org/abstract/document/9990661",
  doi: "10.1109/3ICT56508.2022.9990661"
},
{
  title: "A scheduling algorithm for appliance energy consumption optimization in a dynamic pricing environment",
  authors: "Hamza Touhs, Anas Temouden, Ahmed Khallaayoun, Mhammed Chraibi, Hamza El Hafdaoui",
  journal: "World Electric Vehicle Journal",
  year: "2023",
  link: "https://www.mdpi.com/2032-6653/15/1/1",
  doi: "10.3390/wevj15010001"}
  ]

  return (
    <section id='publications'>
      <h5>Academic Contributions</h5>
      <h2>Publications</h2>

      {publications.length === 0 ? (
        <div className="container publications__empty">
          <p>Research papers coming soon...</p>
        </div>
      ) : (
        <div className="container publications__container">
          {publications.map((pub, index) => (
            <Publication
              key={index}
              title={pub.title}
              authors={pub.authors}
              journal={pub.journal}
              year={pub.year}
              link={pub.link}
              doi={pub.doi}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Publications
