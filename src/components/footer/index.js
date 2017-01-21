import React from 'react';

function HomeFooter() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <ul className="footer__networks">
            <li>
              <a className="footer__twitter" href="http://twitter.com/rafaellucas" target="_blank" rel="noopener noreferrer">twitter</a>
            </li>
            <li>
              <a className="footer__facebook" href="http://facebook.com.br/rafaellucass" target="_blank" rel="noopener noreferrer">facebook</a>
            </li>
            <li>
              <a className="footer__linkedin" href="http://linkedin.com/in/rafaellucass" target="_blank" rel="noopener noreferrer">linkedin</a>
            </li>
            <li>
              <a className="footer__instagram" href="https://www.instagram.com/rafaellucass/" target="_blank" rel="noopener noreferrer">instagram</a>
            </li>
            <li>
              <a className="footer__email" href="mailto:contato@rafaellucas.com.br" target="_blank" rel="noopener noreferrer">e-mail</a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="footer__shadow" />
    </div>
  );
}

export default HomeFooter;
