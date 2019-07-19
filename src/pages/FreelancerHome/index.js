import React from 'react';

import SkillsSection from './components/SkillsSection';
import BlogSection from './components/BlogSection';
// import PortfolioSection from './components/PortfolioSection';
import CallToActionSection from './components/CallToActionSection';

import './index.scss';

function FreelancerHome() {

    return (
      <div className="freelancer-home-container">
        <div className="main-banner">
          <div className="main-banner-content">
            <h2 className="chat-box chat-box-arrow-left">Help has arrived!</h2>
            <h1 className="chat-box chat-box-arrow-right">Hi, I'm Elina. I'm here to <br /> realize your <span>awesome</span> ideas.</h1>
          </div>
        </div>

        <div className="home-container">
          <SkillsSection />

          <BlogSection />

          <CallToActionSection />
        </div>

      </div>
    )
}


export default FreelancerHome;