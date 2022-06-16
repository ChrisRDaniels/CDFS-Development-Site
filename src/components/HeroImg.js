import './HeroImgStyles.css';
import IntroImage from '../assets/intro-bg.webp';

import React from 'react';
import { Link } from 'react-router-dom';

const HeroImg = () => {
	return (
		<div className='hero'>
			<div className='mask'>
				<img className='intro-img' src={IntroImage} alt='IntroImage' />
			</div>
			<div className='content'>
				<h1>Hello.</h1>
				<p>MY NAME IS CHRIS, I'M A FREELANCE</p>
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
