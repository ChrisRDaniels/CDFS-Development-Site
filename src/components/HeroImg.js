import './HeroImgStyles.css';
import IntroImage from '../assets/intro-bg.jpg';

import React from 'react';
import { Link } from 'react-router-dom';

const HeroImg = () => {
	return (
		<div className='hero'>
			<div className='mask'>
				<img className='intro-img' src={IntroImage} alt='IntroImage' />
			</div>
			<div className='content'>
				<p>HI, I'M A FREELANCE</p>
				<h1>React Developer.</h1>
				<Link to='/projects' className='btn'>
					Projects
				</Link>
				<Link to='/contact' className='btn btn-light'>
					Contact
				</Link>
			</div>
		</div>
	);
};

export default HeroImg;
