import './ProjectCard.scss';

import React, { useState } from 'react';


function ProjectCard({ name, title, technologies, link, hasGif }) {
  const [isHovered, toggleHover] = useState(false);
  const bgImage = require(`../../assets/projects/${name}.png`);
  const bgGif = hasGif ? require(`../../assets/projects/${name}.gif`) : null;
  
  return (
    <div className="project-card" onMouseEnter={() => toggleHover(true)} onMouseLeave={() => toggleHover(false)} onClick={() => toggleHover(true)}>
      <div className="cover" style={{ backgroundImage: `url(${(hasGif && isHovered) ? bgGif : bgImage})` }} />
      <div className="content">
        <h3>{title}</h3>
        <h4>Tech: {technologies}</h4>

        <a href={link} className="website-link" target="_blank" rel="noopener noreferrer">
          <img src={require('../../assets/link.svg')} alt="Developer portfolio" />
        </a>
      </div>
    </div>
  )
}

export default React.memo(ProjectCard);