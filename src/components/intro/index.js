import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TweenMax from 'gsap';
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
	render() {
		return (

			<header className="hero-intro">
				<h1 ref="title" className="hero-intro__title">Rafael Lucas</h1>
				<h2 className="hero-intro__description">I am a brazilian designer specializing in interactive experiences living in Brasília, Brazil.</h2>

				<nav className="hero-intro__anchoring">
					<a href="#">about</a>
					<a href="#">work</a>
					<a href="#">contact</a>
				</nav>
			</header>

			)
	}
}

export default HeroIntro