import React from 'react';

import technologies from '../../../data/technologies';
import { IconWithText } from '../../../components';


function PortfolioSection() {

  return (
    <>
      <h2 className="section-title">Some of my projects</h2>
      <div className="row">
        {technologies.map(tech => (
          <div className="small-col" key={tech.title}>
            <IconWithText iconSrc={tech.logoSrc} text={tech.title} />
          </div>
        ))}
      </div>

    </>
  )
}


export default PortfolioSection;