import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TweenLite from 'gsap';

import './index.css'

class HeroIntro extends Component {
	componentDidMount() {
		const title = ReactDOM.findDOMNode(this.refs.title);
		const background = ReactDOM.findDOMNode(this.refs.background);
			
		window.addEventListener('scroll', function() {
			
			let opacity = 1 - (window.scrollY * 100 / (80 / 100 * window.innerHeight) / 100);
			
			if ( opacity < 0) 
				opacity = 0;
			

			title.setAttribute('style', 'opacity:' + opacity.toFixed(3));
			background.setAttribute('style', 'opacity:' + opacity.toFixed(3));

		});
	}
	goTo(e) {
		const goTo = '.' + e.target.attributes['data-anchoring'].value;

		TweenLite.to(
			window,
			0.5, 
			{
				scrollTo: {
					y: goTo,
					offsetY: 15
				}
			} 
		);

	}
	render() {
		return (

			<header className="hero-intro">
				<div ref="background" className="hero-intro__background"></div>
				<h1 ref="title" className="hero-intro__title">Rafael Lucas</h1>
				<h2 className="hero-intro__description">I am a brazilian designer specializing in interactive experiences living in Brasília, Brazil.</h2>

				<nav className="hero-intro__anchoring">
					<button className="item" type="button">about</button>
					<button className="item" type="button" data-anchoring="list-works" onClick={this.goTo}>work</button>
					<button className="item" type="button" data-anchoring="footer" onClick={this.goTo}>contact</button>
				</nav>
			</header>

		)
	}
}

export default HeroIntro