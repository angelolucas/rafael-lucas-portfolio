import React, { Component } from 'react';
import './index.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <ul className="footer__social-networks">
          <li><a href="http://twitter.com/rafaellucas" target="_blank">twitter</a></li>
          <li><a href="http://facebook.com.br/rafaellucass" target="_blank">facebook</a></li>
          <li><a href="http://linkedin.com/in/rafaellucass" target="_blank">linkedin</a></li>
          <li><a href="https://www.instagram.com/rafaellucass/" target="_blank">instagram</a></li>
          <li><a href="mailto:contato@rafaellucas.com.br" target="_blank">e-mail</a></li>
        </ul>
      </footer>
    )
  }
}

export default Footer