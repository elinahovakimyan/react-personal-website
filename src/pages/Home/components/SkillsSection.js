import React from 'react';

import technologies from '../../../data/technologies';
import { IconWithTooltip } from '../../../components';


function SkillsSection() {

  return (
    <>
      <h2 className="section-title">Large variety of skills</h2>
      <div className="row">
        {technologies.map(tech => (
          <div className="small-col" key={tech.title}>
            <IconWithTooltip iconSrc={tech.logoSrc} text={tech.title} />
          </div>
        ))}
      </div>

    </>
  )
}


export default SkillsSection;