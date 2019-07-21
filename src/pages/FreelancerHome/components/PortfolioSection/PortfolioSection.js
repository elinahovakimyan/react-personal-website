import './PortfolioSection.scss';

import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import ProjectCard from '../../../../components/ProjectCard/ProjectCard';


function PortfolioSection() {

  return (
    <div id="portfolio" className="section">
      <ScrollAnimation animateIn="bounceIn">
        <h2 className="chat-box chat-box-arrow-left">It's impressive. What about the real work?</h2>
      </ScrollAnimation>

      <h2 className="section-title">Few of my projects</h2>
      <div className="grid">
        <ScrollAnimation animateIn="flipInY" delay={200}>
          <ProjectCard 
            name="bitcoinbot"
            title="Bitcoinbot Website"
            technologies="React.js, Redux, LESS"
            link="https://bitcoinbot.pro"
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInY" delay={200}>
          <ProjectCard 
            name="eventor"
            title="Eventor Website"
            technologies="React.js, Redux, SCSS"
            link="https://eventor.am"
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInY" delay={200}>
          <ProjectCard 
            name="codassist"
            title="Codassist Website"
            technologies="Wordpress"
            link="https://codassist.com"
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInY" delay={200}>
          <ProjectCard 
            name="tiamo"
            title="Tiamo Jewelry Website"
            technologies="Wordpress, Woocommerce"
            link="https://tiamo-jewelry.com"
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInY" delay={200}>
          <ProjectCard 
            name="patani"
            title="Patani App Android"
            technologies="React Native, React Navigation, Redux"
            link="https://play.google.com/store/apps/details?id=com.ngo.pataniapp"
          />
        </ScrollAnimation>
      </div>
    </div>
  )
}


export default PortfolioSection;