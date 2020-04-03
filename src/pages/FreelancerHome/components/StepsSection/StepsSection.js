import './StepsSection.scss';

import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


const Step = ({ number, title, details }) => (
  <div className="step">
    <div className="step-indicator">
      {number}
    </div>
    <h2 className="step-title">
      {title}
      </h2>
    <p className="step-details">
      {details}
    </p>
  </div>
)

function StepsSection() {
  return (
    <div id="steps" className="section">
      <ScrollAnimation animateIn="bounceIn" delay={100}>
        <h2 className="chat-box chat-box-arrow-right">Hmm... What if I have a project for you?</h2>
      </ScrollAnimation>

      <h2 className="section-title">The working process</h2>
      <div className="steps-list">
        <ScrollAnimation animateIn="fadeIn" delay={0}>
          <Step
            number={1}
            title="Business needs"
            details="As an initial step, let's discuss what kind of needs your business has. Then, I will make suggestions on how I can help you with that."
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" delay={300}>
          <Step
            number={2}
            title="Project scope"
            details="It's time to discuss the project scope and what features it will have. Based on that, the duration and budget will be determined."
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" delay={500}>
          <Step
            number={3}
            title="Project Review"
            details="Based on our agreement, I will either design the app/website or build it based on existing mockups and present it for your review."
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" delay={700}>
          <Step
            number={4}
            title="Final Delivery"
            details="After getting review notes, I will finetune the app to make it perfect and deploy to the app stores or make it live!"
          />
        </ScrollAnimation>

      </div>

    </div>
  )
}


export default React.memo(StepsSection);