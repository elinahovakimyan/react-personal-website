import './ContactSection.scss';

import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import * as emailjs from 'emailjs-com';

import Button from '../../../../components/Button/Button';

const initialValues = {
  name: '',
  email: '',
  website: '',
  budget: '',
  notes: '',
}

function ContactSection() {
  const [values, changeValues] = useState(initialValues);
  const [submitText, changeSubmitText] = useState('Submit');
  const isDisabled = !values.name || !values.email;

  const handleChange = (value, key) => {
    changeValues({
      ...values,
      [key]: value,
    })
  }

  const handleSubmit = () => {
    if (values.name && values.email) {
      changeSubmitText('Submitting...');
  
      const templateParams = {
        reply_to: values.email,
        from_name: values.email,
        to_name: 'Contact form submission',
        message_html: JSON.stringify(values),
      };
  
      const serviceId = "default_service";
      const templateId = "template_KWvTDbxq";
      const userId = "user_KTPrRh8HKGMZ7Uw4U0P8U";
  
      emailjs.send(serviceId, templateId, templateParams, userId)
        .then(() => {
          changeSubmitText('Submit');
          changeValues(initialValues);
        })
        .catch(() => {
          changeSubmitText('Try again');
        });
    }
  }

  return (
    <div className="contact-section section-wrapper">
      <ScrollAnimation animateIn="fadeIn" delay={500} animateOnce={true}>
        <img className="bg-image bg-image-1" src={require('../../../../assets/star.svg')} alt="Star" />
        <img className="bg-image bg-image-2" src={require('../../../../assets/star.svg')} alt="Star" />
        <img className="bg-image bg-image-3" src={require('../../../../assets/star.svg')} alt="Star" />
        <img className="bg-image bg-image-4" src={require('../../../../assets/star.svg')} alt="Star" />
        <img className="bg-image bg-image-5" src={require('../../../../assets/star.svg')} alt="Star" />
        <img className="bg-image bg-image-6" src={require('../../../../assets/star.svg')} alt="Star" />
        <img className="bg-image bg-image-7" src={require('../../../../assets/star.svg')} alt="Star" />
        <img className="bg-image bg-image-8" src={require('../../../../assets/star.svg')} alt="Star" />
        <img className="bg-image bg-image-9" src={require('../../../../assets/star.svg')} alt="Star" />
        <img className="bg-image bg-image-10" src={require('../../../../assets/star.svg')} alt="Star" />
        <img className="bg-image bg-image-11" src={require('../../../../assets/star.svg')} alt="Star" />
        <img className="bg-image bg-image-12" src={require('../../../../assets/star.svg')} alt="Star" />
        <img className="bg-image bg-image-13" src={require('../../../../assets/star.svg')} alt="Star" />
        <img className="bg-image bg-image-14" src={require('../../../../assets/star.svg')} alt="Star" />
      </ScrollAnimation>


      <div id="contact" className="section">
        <ScrollAnimation animateIn="bounceIn">
          <h2 className="chat-box chat-box-arrow-left">Awesome! I need a great website/app!</h2>
        </ScrollAnimation>

        <h2 className="section-title">Let's discuss</h2>
        <h3 className="contact-subtitle">I am currently available for freelance work.</h3>
        <div className="contact-form">
          <div className="row">
            <input placeholder="Name *" value={values['name']} onChange={(e) => handleChange(e.target.value, 'name')} />
            <input placeholder="Email *" value={values['email']} onChange={(e) => handleChange(e.target.value, 'email')} />
          </div>

          <div className="row">
            <input placeholder="Website (optional)" value={values['website']} onChange={(e) => handleChange(e.target.value, 'website')} />
            <input placeholder="Budget (optional)" value={values['budget']} onChange={(e) => handleChange(e.target.value, 'budget')} />
          </div>

          <textarea placeholder="Notes & requirements" value={values['notes']} onChange={(e) => handleChange(e.target.value, 'notes')} />

          <Button disabled={isDisabled} onClick={handleSubmit}>{submitText}</Button>
        </div>
      </div>
    </div>
  )
}

export default ContactSection;