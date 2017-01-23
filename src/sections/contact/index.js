import React from 'react';

const back = () => {
  document.body.classList.remove('contact-section--active');
  document.querySelector('.header-navigation__item--contact').classList.remove('link-underlined--active');
};
function Contact() {
  return (
    <div className="contact-section">
      <div className="container">
        <p>email:</p>
        <p>contato@rafaellucas.com.br</p>
        <p>phone:</p>
        <p>+55 61 9 9167 6245</p>
      </div>

      <button type="button" className="contact-section__back link-underlined" onClick={back}>
        <span className="contact-section__back--arrow" /> Back
      </button>
    </div>
  );
}

export default Contact;
