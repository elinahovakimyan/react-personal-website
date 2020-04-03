import './PortfolioSection.scss';

import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import ProjectCard from '../../../../components/ProjectCard/ProjectCard';

import data from './data'


function PortfolioSection() {

  return (
    <div id="portfolio" className="section">
      <ScrollAnimation animateIn="bounceIn">
        <h2 className="chat-box chat-box-arrow-left">It's impressive. What about the real work?</h2>
      </ScrollAnimation>

      <h2 className="section-title">Few of my projects</h2>
      <div className="grid">
        {data.map(item => (
          <ScrollAnimation key={item.name} animateIn="zoomIn" animateOut="zoomOut">
            <ProjectCard
              name={item.name}
              title={item.title}
              technologies={item.technologies}
              link={item.link}
            />
          </ScrollAnimation>
        ))}
      </div>
    </div>
  )
}


export default React.memo(PortfolioSection);