import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { TweenMax, TweenLite } from 'gsap';

import './index.css'

class HeroIntro extends Component {
	componentDidMount() {
		const title = ReactDOM.findDOMNode(this.refs.title);
		
		TweenMax.from (
			title,
			2, 
			{
				opacity: 0,
				x: 100
			}
		)
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