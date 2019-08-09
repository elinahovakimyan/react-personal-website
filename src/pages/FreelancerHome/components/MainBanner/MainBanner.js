import './MainBanner.scss';

import React from 'react';

import Button from '../../../../components/Button/Button';


const profileText1 = 'Experienced Web & Mobile Developer. Completed more than 18 projects.'
const profileText2 = 'I develop responsive websites and cross-platform apps to help businesses impress faster!'

function MainBanner() {

  return (
    <div className="main-banner-container">
      <div className="main-banner">
        <div className="main-banner-content">
          <h2 className="chat-box chat-box-arrow-right-center animated bounceIn">Help has arrived!</h2>
          <img src={require('../../../../assets/tired-man.png')} alt="Businessman" />
          <h1 className="chat-box chat-box-arrow-left animated fadeIn">Hi, I'm Elina. I'm here to <br /> realize your <span>awesome</span> ideas.</h1>
        </div>
      </div>

      <div className="person-img animated zoomIn">
        <img src={require('../../../../assets/girl.svg')} alt="Freelance developer - Elina Hovakimyan" />
      </div>

      <div className="person-about animated bounceIn">
        <h2>Elina Hovakimyan</h2>

        <h3>{profileText1}</h3>
        <h3>{profileText2}</h3>

        <a className="cta-btn" href="#contact">
          <Button>
            Contact me
          </Button>
        </a>

        <a className="cta-btn" href="/Elina-Hovakimyan-Software-Engineer-CV.pdf" download>
          <Button>
            Download CV
          </Button>
        </a>
      </div>


    </div>
  )
}


export default MainBanner;