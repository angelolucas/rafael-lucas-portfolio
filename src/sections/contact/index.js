import React from 'react';

const back = () => {
  document.body.classList.remove('contact-section--active');
};
function Contact() {
  return (
    <div className="contact-section">
      <p>email:</p>
      <p>contato@rafaellucas.com.br</p>
      <p>phone:</p>
      <p>+55 61 9 9167 6245</p>
      <button type="button" className="contact-section__back" onClick={back}>
        Back to home
      </button>
    </div>
  );
}

export default Contact;
