import React, { Component } from 'react';
import TweenLite from 'gsap';
import './index.css';


class BackToTop extends Component {
	onClickButton() {
		const singleWork = document.querySelector('.single-work');
		TweenLite.to( singleWork, 0.5, {scrollTo:0} );
	}
	render() {
		return (
			<button onClick={ this.onClickButton } className="back-to-top"></button>
		);
	}
}

export default BackToTop;
