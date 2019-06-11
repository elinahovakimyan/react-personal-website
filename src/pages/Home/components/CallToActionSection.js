import React from 'react';
import { Button } from 'antd';

function CallToActionSection() {

  return (
    <>
      <h2 className="section-title">Need technical help? Let's cooperate!</h2>
      <div className="call-to-action">
        <h3>
          Are you looking for a
          <span> professional, responsible & communicative </span>
          software engineer with
          <span> strong web & mobile development </span>
          skills?
          <br />
          <br />
          You just found her! 
          <span> I'd love to help </span>
          you with my skills and expertise to
          <span> find solutions </span>
          for your problems and convert your best
          <span> ideas into reality!</span>
        </h3>

        <br />

        <h3>
          <span role="img" aria-label="point-down-emoji">👇 </span>
          So to 
          <span> contact me </span> 
          you can:
          <span role="img" aria-label="point-down-emoji"> 👇 </span>
        </h3>

        <div className="contact-row">
          <div className="col-2">
            <a className="linkedin-link" href="https://www.linkedin.com/in/elina-hovakimyan/" target="_blank" rel="noopener noreferrer">
              <Button type="primary" icon="linkedin" size="large">
                Connect on Linkedin
              </Button>
            </a>
          </div>

          <div className="col-2 email-section">
            <h4>Send me an email at:</h4>
            <a href="mailto:elinahovakimyan@gmail.com?Subject=Let's%20cooperate!" target="_top">
              elinahovakimyan@gmail.com
            </a>
          </div>

        </div>

      </div>

    </>
  )
}


export default CallToActionSection;