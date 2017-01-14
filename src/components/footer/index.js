import React from 'react';

function HomeFooter() {
  return (
    <div>
      <footer className="footer">
        <ul className="footer__networks">
          <li><a href="http://twitter.com/rafaellucas" target="_blank" rel="noopener noreferrer">twitter</a></li>
          <li><a href="http://facebook.com.br/rafaellucass" target="_blank" rel="noopener noreferrer">facebook</a></li>
          <li><a href="http://linkedin.com/in/rafaellucass" target="_blank" rel="noopener noreferrer">linkedin</a></li>
          <li><a href="https://www.instagram.com/rafaellucass/" target="_blank" rel="noopener noreferrer">instagram</a></li>
          <li><a href="mailto:contato@rafaellucas.com.br" target="_blank" rel="noopener noreferrer">e-mail</a></li>
        </ul>
      </footer>
      <div className="footer__blank" />
    </div>
  );
}

export default HomeFooter;
