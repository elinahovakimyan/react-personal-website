import React, { useState } from 'react';
import { Button, Icon } from 'antd';
import TweenOne from 'rc-tween-one';
import Texty from 'rc-texty';
import Children from 'rc-tween-one/lib/plugin/ChildrenPlugin';

import 'rc-texty/assets/index.css';

TweenOne.plugins.push(Children);

const profileText1 = 'Web & Mobile Software Developer with 3+ years of experience.'
const profileText2 = 'Increased the code quality by 60%.'
const profileText3 = 'Enthusiastic team player and creative thinker.'


function NumbersSection() {
  const [isButtonVisible, updateButtonVisibility] = useState(true);
  const [animation2, animate2] = useState(null);
  const [animation3, animate3] = useState(null);
  const [animation4, animate4] = useState(null);


  const startAnimation = () => {
    updateButtonVisibility(false);

    animate2(getAnimationObject(18620)); // hours
    animate3(getAnimationObject(82340)); // users
    animate4(getAnimationObject(17)); // projects
  }


  const getAnimationObject = (value) => ({
    Children: {
      value,
      formatMoney: true,
      floatLength: 0,
    },
    duration: 2000,
  })


  return (
    <div className="my-advantages">

      <div className="flex-row-wrap">
        <div className="flex-column-center number-info">
          <TweenOne
            animation={animation2}
            className="animated-number"
          >
            0
          </TweenOne>
          <h3>
            <Icon type="clock-circle" />
            {' '}
            hours
          </h3>
        </div>
        <div className="flex-column-center number-info">
          <TweenOne
            animation={animation3}
            className="animated-number"
          >
            0
          </TweenOne>
          <h3>
            <Icon type="team" />
            {' '}
            users
          </h3>
        </div>
        <div className="flex-column-center number-info">
          <TweenOne
            animation={animation4}
            className="animated-number"
          >
            0
          </TweenOne>
          <h3>
            <Icon type="file-done" />
            {' '}
            projects
          </h3>
        </div>
      </div>

      {isButtonVisible
        ? (
          <div className="reveal-truth">
            <span className="truth-support-emoji" role="img" aria-label="show-emoji"> 👉 </span>
              <Button className="animated-button" onClick={startAnimation}>
                Reveal the truth
              </Button>
            <span className="truth-support-emoji" role="img" aria-label="show-emoji"> 👈</span>
          </div>
        )
        : (
          <>
            <Texty className="animated-profile-text">{profileText1}</Texty>
            <Texty className="animated-profile-text">{profileText2}</Texty>
            <Texty className="animated-profile-text">{profileText3}</Texty>
          </>
        )
      }

    </div>
  )
}



export default NumbersSection;