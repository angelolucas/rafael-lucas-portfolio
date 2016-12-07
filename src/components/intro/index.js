import React, { Component } from 'react';
import './index.css'

class HeroIntro extends Component {
	render() {
		return (

			<header className="hero-intro">
				<h1 className="hero-intro__titile">Rafael Lucas</h1>
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