import React from 'react';

function HomeFooter() {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="container">
          <ul className="footer__networks">
            <li>
              <a className="link-underlined" href="http://twitter.com/rafaellucas" target="_blank" rel="noopener noreferrer">twitter</a>
            </li>
            <li>
              <a className="link-underlined" href="http://facebook.com.br/rafaellucass" target="_blank" rel="noopener noreferrer">facebook</a>
            </li>
            <li>
              <a className="link-underlined" href="http://linkedin.com/in/rafaellucass" target="_blank" rel="noopener noreferrer">linkedin</a>
            </li>
            <li>
              <a className="link-underlined" href="https://www.instagram.com/rafaellucass/" target="_blank" rel="noopener noreferrer">instagram</a>
            </li>
            <li>
              <a className="link-underlined" href="mailto:contato@rafaellucas.com.br" target="_blank" rel="noopener noreferrer">e-mail</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default HomeFooter;
