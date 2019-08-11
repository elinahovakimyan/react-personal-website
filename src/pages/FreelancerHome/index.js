import './index.scss';

import React from 'react';

import PortfolioSection from './components/PortfolioSection/PortfolioSection';
import MainBanner from './components/MainBanner/MainBanner';
import BlogSection from './components/BlogSection/BlogSection';
import Recommendations from './components/Recommendations/Recommendations';
import ContactSection from './components/ContactSection/ContactSection';
import StepsSection from './components/StepsSection/StepsSection';


// const Divider = () => (
//   <div className="divider">...</div>
// );

function FreelancerHome() {

    return (
      <div className="freelancer-home-container">
        <MainBanner />

        <div className="gradient-background">
          <div className="content-wrapper">
            <Recommendations />

            <BlogSection />

            <PortfolioSection />

            <StepsSection />

            <ContactSection />
          
            {/* <div className="footer">Copyright</div> */}
          </div>
        </div>

      </div>
    )
}


export default React.memo(FreelancerHome);