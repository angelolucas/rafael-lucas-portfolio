import React from 'react';

const back = () => {
  document.body.classList.remove('about-section--active');
};
function About() {
  return (
    <div className="about-section">
      <p>{'I\'m 24, visual designer from Brasília, Brazil. Currently working at Mova Mais.'}</p>

      <p>{'I\'m curious, self-taught and passionate about user experience, designing web and mobile to companies Banco do Brasil, Embratur, Ministry of Culture of Brazil, David Yurman. My past experiences include Isobar Brasil and Moringa Digital.'}</p>

      <button type="button" className="about-section__back" onClick={back}>
        Back to home
      </button>
    </div>
  );
}

export default About;
