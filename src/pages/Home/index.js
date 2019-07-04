import React from 'react';

import NumbersSection from './components/NumbersSection';
import SkillsSection from './components/SkillsSection';
import BlogSection from './components/BlogSection';
import OpenSourceSection from './components/OpenSourceSection';
// import PortfolioSection from './components/PortfolioSection';
import CallToActionSection from './components/CallToActionSection';

import './index.scss';

class Home extends React.PureComponent {
  render() {

    return (
      <div className="home-container">
        <div className="header">
          <h1 className="welcome-name">
            Hi
            <span role="img" aria-label="hi-emoji"> 👋 </span>
            I'm Elina
            <span role="img" aria-label="girl-emoji"> 👩🏼‍💻</span>
          </h1>
          <h2 className="position">JavaScript Developer</h2>
          <h3 className="main-expertise">
            <span role="img" aria-label="strong-emoji"> 💪 </span>
            Strengths: React.js, React Native, Node.js
            <span role="img" aria-label="strong-emoji"> 💪 </span>
          </h3>
        </div>


        <NumbersSection />

        <SkillsSection />

        <BlogSection />

        <OpenSourceSection/>

        {/* <PortfolioSection/> */}

        <CallToActionSection />
      </div>
    )
  }
}


export default Home;