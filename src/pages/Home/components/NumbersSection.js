import React, { useState } from 'react';
import { Button } from 'antd';
import TweenOne from 'rc-tween-one';
import Children from 'rc-tween-one/lib/plugin/ChildrenPlugin';

TweenOne.plugins.push(Children);

function NumbersSection() {
  const [isButtonVisible, updateButtonVisibility] = useState(true);
  const [animation1, animate1] = useState(null);
  const [animation2, animate2] = useState(null);
  const [animation3, animate3] = useState(null);
  const [animation4, animate4] = useState(null);


  const startAnimation = () => {
    updateButtonVisibility(false);

    animate1(getAnimationObject(242300)); // lines
    animate2(getAnimationObject(18620)); // hours
    animate3(getAnimationObject(72340)); // users
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

      <div className="row">
        <div className="col-4 flex-column-center">
          <TweenOne
            animation={animation1}
            className="animated-number"
          >
            0
          </TweenOne>
          <h3>lines of code written</h3>
        </div>
        <div className="col-4 flex-column-center">
          <TweenOne
            animation={animation2}
            className="animated-number"
          >
            0
          </TweenOne>
          <h3>hours of coding</h3>
        </div>
        <div className="col-4 flex-column-center">
          <TweenOne
            animation={animation3}
            className="animated-number"
          >
            0
          </TweenOne>
          <h3>users served</h3>
        </div>
        <div className="col-4 flex-column-center">
          <TweenOne
            animation={animation4}
            className="animated-number"
          >
            0
          </TweenOne>
          <h3>projects contributed</h3>
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
        : null
      }

    </div>
  )
}



export default NumbersSection;