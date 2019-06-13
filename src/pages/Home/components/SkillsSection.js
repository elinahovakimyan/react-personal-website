import React from 'react';
import { Button } from 'antd';

import technologies from '../../../data/technologies';
import { IconWithTooltip } from '../../../components';


class SkillsSection extends React.PureComponent {
  state = {
    visibleSkills: technologies,
    screenWidth: 0,
  }

  componentDidMount() {
    this.updateVisibleSkills();
    window.addEventListener('resize', this.updateVisibleSkills);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateVisibleSkills);
  }

  updateVisibleSkills = () => {
    const { visibleSkills, screenWidth } = this.state;

    if (window.innerWidth !== screenWidth) {
      if (window.innerWidth >= 1256 && technologies.length !== visibleSkills.length) {
        this.setState({ visibleSkills: technologies });
      } else if (window.innerWidth > 767) {
        this.setState({ visibleSkills: technologies.slice(0, 40) });
      } else if (window.innerWidth > 615) {
        this.setState({ visibleSkills: technologies.slice(0, 35) });
      } else if (technologies.length === visibleSkills.length) {
        this.setState({ visibleSkills: technologies.slice(0, 20) });
      }

      this.setState({ screenWidth: window.innerWidth });
    }
  }

  showMore = () => {
    this.setState({ visibleSkills: technologies });
  }

  render() {
    const { visibleSkills } = this.state;

    return (
      <>
        <h2 className="section-title skills-title">Large variety of skills</h2>
        <div className="row-grid-small">
          {visibleSkills.map(tech => (
            <div className="skill-col" key={tech.title}>
              <IconWithTooltip iconSrc={tech.logoSrc} text={tech.title} />
            </div>
          ))}
        </div>

        {visibleSkills.length !== technologies.length 
          ? <Button onClick={this.showMore}>See More</Button>
          : null}
  
      </>
    )
  }
}


export default SkillsSection;