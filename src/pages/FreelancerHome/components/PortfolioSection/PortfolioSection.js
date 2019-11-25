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
            hasGif 
            name="zenapillar"
            title="Zenapillar App"
            technologies="React Native, Redux, Redux Sagas"
            link="https://apps.apple.com/us/app/zenapillar/id1481114066"
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInY" delay={200}>
          <ProjectCard
            hasGif 
            name="the_up"
            title="THE U.P. Cross-platform App"
            technologies="React Native, Redux, Redux Sagas"
            link="https://apps.apple.com/us/app/the-u-p/id1483478217"
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInY" delay={200}>
          <ProjectCard
            hasGif 
            name="bitcoinbot"
            title="Bitcoinbot Website"
            technologies="React.js, Redux, LESS"
            link="https://bitcoinbot.pro"
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInY" delay={200}>
          <ProjectCard
            name="securitytrails"
            title="Security Trails Website"
            technologies="React.js, Redux, CSS"
            link="https://securitytrails.com"
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInY" delay={200}>
          <ProjectCard
            name="react-native-month-picker"
            title="react-native-month-picker"
            technologies="Open-source project"
            link="https://npmjs.com/package/react-native-month-picker"
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInY" delay={200}>
          <ProjectCard
            name="securitytrails"
            title="Security Trails Website"
            technologies="React Native, Redux, SCSS"
            link="https://securitytrails.com"
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInY" delay={200}>
          <ProjectCard
            name="hanseaticsoft"
            title="Crewing Platform"
            technologies="React.js, Redux, SCSS"
            link="https://hanseaticsoft.com/cloud-crewing/crewing"
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInY" delay={200}>
          <ProjectCard
            name="react-recaptcha-google"
            title="react-recaptcha-google"
            technologies="Open-source project"
            link="https://npmjs.com/package/react-recaptcha-google"
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInY" delay={200}>
          <ProjectCard
            hasGif 
            name="eventor"
            title="Eventor Website"
            technologies="React.js, Redux, SCSS"
            link="https://eventor.am"
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInY" delay={200}>
          <ProjectCard
            hasGif 
            name="codassist"
            title="Codassist Website"
            technologies="Wordpress"
            link="https://codassist.com"
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInY" delay={200}>
          <ProjectCard
            hasGif 
            name="tiamo"
            title="Tiamo Jewelry Website"
            technologies="Wordpress, Woocommerce"
            link="https://tiamo-jewelry.com"
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInY" delay={200}>
          <ProjectCard
            hasGif 
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


export default React.memo(PortfolioSection);