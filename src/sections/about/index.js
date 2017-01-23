import React from 'react';

const back = () => {
  document.body.classList.remove('about-section--active');
  document.querySelector('.header-navigation__item--about').classList.remove('link-underlined--active');
};
function About() {
  return (
    <div className="about-section">
      <div className="container">
        <p>I&apos;m 24, visual designer from Brasília, Brazil. <br /> Currently working at <a href="https://www.movamais.com/" target="_blank" rel="noopener noreferrer">Mova Mais.</a><br /> </p>

        <p>I&apos;m curious, self-taught and passionate about user experience, designing web and mobile to companies <a href="https://www.bb.com.br" target="_blank" rel="noopener noreferrer">Banco do Brasil</a>, <a href="http://www.embratur.gov.br/" target="_blank" rel="noopener noreferrer">Embratur</a>, <a href="http://www.cultura.gov.br/" target="_blank" rel="noopener noreferrer">Brazilian Ministry of Culture</a>, <a href="https://davidyurman.com" target="_blank" rel="noopener noreferrer">David Yurman</a>. My past experiences include <a href="http://www.isobar.com/br/en/" target="_blank" rel="noopener noreferrer">Isobar Brasil</a> and <a href="http://www.moringadigital.com.br/" target="_blank" rel="noopener noreferrer">Moringa Digital.</a></p>
      </div>

      <button type="button" className="about-section__back link-underlined" onClick={back}>
        Back <span className="about-section__back--arrow" />
      </button>
    </div>
  );
}

export default About;
