import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


const profileText1 = 'Web & Mobile Developer with 3+ years of experience.'
const profileText2 = 'Enthusiastic Product Developer and Creative Thinker.'

function MainBanner() {

  return (
    <div className="main-banner-container">
      <div className="main-banner">
        <div className="main-banner-content">
          <ScrollAnimation animateIn='bounceIn' delay={800}>
            <h2 className="chat-box chat-box-arrow-right">Help has arrived!</h2>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeIn' delay={3000}>
            <h1 className="chat-box chat-box-arrow-left">Hi, I'm Elina. I'm here to <br /> realize your <span>awesome</span> ideas.</h1>
          </ScrollAnimation>

          <img src="https://www.wannapik.com/media/W1siZiIsIjIwMTYvMDgvMjIvMzNicGU4azJvbl8xZ3NobWw5OGhuX2NhcnQxMzgyLnBuZyJdXQ/1da6832c58ae4bd1/1gshml98hn_cart1382.png" alt="Businessman" />
        </div>
      </div>

      <ScrollAnimation animateIn='flip' delay={1600}>
        <div className="person-img">
          <img src={require('../../../assets/girl.svg')} alt="Freelance developer - Elina Hovakimyan" />
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeIn' delay={4000}>
        <div className="person-about">
          <h3>{profileText1}</h3>
          <h3>{profileText2}</h3>
        </div>
      </ScrollAnimation>

    </div>
  )
}


export default MainBanner;