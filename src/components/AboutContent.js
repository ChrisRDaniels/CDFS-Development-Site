import './AboutContentStyles.css';
import React1 from '../assets/react1.jpg';
import React2 from '../assets/react2.webp';

import React from 'react';
import { Link } from 'react-router-dom';

const AboutContent = () => {
	return (
		<div className='about'>
			<div className='left'>
				<h1>Who Am I?</h1>
				<p>
					I am a full-stack developer, with a focus on creating responsive
					front-end React websites/apps.
				</p>
				<Link to='/contact'>
					<button className='btn'>Contact</button>
				</Link>
			</div>
			<div className='right'>
				<div className='img-container'>
					<div className='img-stack top'>
						<img src={React1} className='img' alt='react image' />
					</div>
					<div className='img-stack bottom'>
						<img src={React2} className='img' alt='react image' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutContent;
