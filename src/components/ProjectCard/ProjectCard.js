import './ProjectCard.scss';

import React from 'react';


function ProjectCard({ name, title, technologies, link, hasGif }) {
  const bgImage = require(`../../assets/projects/${name}.png`);
  
  return (
    <div className="project-card">
      <div className="cover" style={{ backgroundImage: `url(${bgImage})` }} />
      <div className="content">
        <h3>{title}</h3>
        <h4>{technologies}</h4>

        {link
          ? (
            <a href={link} className="website-link" target="_blank" rel="noopener noreferrer">
              <img src={require('../../assets/link.svg')} alt="Developer portfolio" />
            </a>
          ) : null}
      </div>
    </div>
  )
}

export default React.memo(ProjectCard);