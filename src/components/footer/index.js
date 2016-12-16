import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Footer extends Component {
  componentDidMount() {
    const footer = ReactDOM.findDOMNode(this.refs.footer).offsetHeight;
    const social = ReactDOM.findDOMNode(this.refs.social);
    const bodyHeight = document.querySelector('body').offsetHeight;

    window.addEventListener('scroll', function() {
      
      const scroll = document.querySelector('body').offsetHeight - footer;
      const height = window.scrollY + window.innerHeight;

      if (scroll <= height) {
        let opacity = height - scroll;
            opacity = opacity * 100 / footer;
            opacity = opacity / 100;
            opacity = opacity.toFixed(3);

        social.setAttribute('style', 'opacity:'+ opacity );
      }
      
    });
  }
  render() {
    return (
      <footer ref="footer" className="footer">
        <ul ref="social" className="footer__social-networks">
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