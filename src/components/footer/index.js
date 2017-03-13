import React from 'react';
import ReactGA from 'react-ga';

function HomeFooter() {
  function handleClick(categoryValue, actionValue, labelValue) {
    ReactGA.event({
      category: categoryValue,
      action: actionValue,
      label: labelValue,
    });
  }
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="container">
          <ul className="footer__networks">
            <li>
              <a
                className="link-underlined"
                href="http://twitter.com/rafaellucas"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => { handleClick('Footer', 'Click', 'Twitter'); }}
              >
                twitter
              </a>
            </li>
            <li>
              <a
                className="link-underlined"
                href="http://linkedin.com/in/rafaellucass"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => { handleClick('Footer', 'Click', 'Linkedin'); }}
              >
                linkedin
              </a>
            </li>
            <li>
              <a
                className="link-underlined"
                href="mailto:bsb.rafael@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => { handleClick('Footer', 'Click', 'E-mail'); }}
              >
                e-mail
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default HomeFooter;
