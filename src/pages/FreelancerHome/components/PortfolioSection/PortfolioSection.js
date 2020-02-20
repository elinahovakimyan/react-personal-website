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
        <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut">
          <ProjectCard
            name="prudost"
            title="Goal Setting App"
            technologies="React Native (iOS & Android), Django (backend)"
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut">
          <ProjectCard
            name="zenapillar"
            title="Service Publishing App"
            technologies="React Native (iOS & Android)"
            link="https://apps.apple.com/us/app/zenapillar/id1481114066"
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut">
          <ProjectCard
            name="prehab101"
            title="Fitness App"
            technologies="React Native (iOS & Android)"
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut">
          <ProjectCard
            name="veratize"
            title="Property Access App"
            technologies="React Native (iOS & Android)"
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut">
          <ProjectCard
            name="master8lc"
            title="Bar Reservation App"
            technologies="React Native (iOS & Android)"
            link="https://apps.apple.com/us/app/id1479139549"
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut">
          <ProjectCard
            name="the_up"
            title="Social Platform"
            technologies="React Native (iOS & Android)"
            link="https://apps.apple.com/us/app/the-up/id1483478217"
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut">
          <ProjectCard
            name="patani"
            title="Educational App for Kids"
            technologies="React Native (Android)"
            // link="https://play.google.com/store/apps/details?id=com.ngo.pataniapp"
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut">
          <ProjectCard
            name="react-native-month-picker"
            title="react-native-month-picker"
            technologies="Open-source project"
            link="https://npmjs.com/package/react-native-month-picker"
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut">
          <ProjectCard
            name="react-recaptcha-google"
            title="react-recaptcha-google"
            technologies="Open-source project"
            link="https://npmjs.com/package/react-recaptcha-google"
          />
        </ScrollAnimation>
      </div>
    </div>
  )
}


export default React.memo(PortfolioSection);