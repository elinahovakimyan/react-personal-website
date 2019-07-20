import React from 'react';

import './index.scss';
import PortfolioSection from './components/PortfolioSection';
import MainBanner from './components/MainBanner';


function FreelancerHome() {

    return (
      <div className="freelancer-home-container">
        <MainBanner />

        <PortfolioSection />

      </div>
    )
}


export default FreelancerHome;