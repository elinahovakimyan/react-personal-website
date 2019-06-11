import React from 'react';

function OpenSourceSection() {

  return (
    <>
      <h2 className="section-title">Open source contribution</h2>
      <a href="https://www.npmjs.com/package/react-recaptcha-google" target="_blank" rel="noopener noreferrer">
        <img src={require('../../../assets/react-recaptcha-google.png')} alt="react-recaptcha-google" className="open-source-img" />
      </a>
    </>
  )
}


export default OpenSourceSection;