import React from 'react';
import './FooterStyles.css';
import {
	FaHome,
	FaPhone,
	FaMailBulk,
	FaFacebook,
	FaTwitter,
	FaLinkedin,
	FaGithub
} from 'react-icons/fa';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-container'>
				<div className='left'>
					<div className='location'>
						<FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
						<div>
							<p>Louisville, Colorado</p>
						</div>
					</div>
					<div className='phone'>
						<h4>
							<FaPhone
								size={20}
								style={{ color: '#fff', marginRight: '2rem' }}
							/>
							1-970-779-2387
						</h4>
					</div>
					<div className='email'>
						<h4>
							<FaMailBulk
								size={20}
								style={{ color: '#fff', marginRight: '2rem' }}
							/>
							<a href='mailto:chrisrdaniels765@gmail.com'>
								chrisrdaniels765@gmail.com
							</a>
						</h4>
					</div>
				</div>
				<div className='right'>
					<h4>About The Company</h4>
					<p>
						This is Chris Daniels. I am a Front-End Developer and the Founder of
						CD Development. I enjoy working on new projects and design
						challenges.
					</p>
					<div className='social'>
						<a href='https://www.facebook.com/CDFSDevelopment'>
							<FaFacebook
								size={30}
								style={{ color: '#fff', marginRight: '1rem' }}
							/>
						</a>

						<a href='https://twitter.com/ChrisDa66691131'>
							<FaTwitter
								size={30}
								style={{ color: '#fff', marginRight: '1rem' }}
							/>
						</a>

						<a href='https://www.linkedin.com/in/chrisrdaniels/'>
							<FaLinkedin
								size={30}
								style={{ color: '#fff', marginRight: '1rem' }}
							/>
						</a>

						<a href='https://github.com/ChrisRDaniels'>
							<FaGithub
								size={30}
								style={{ color: '#fff', marginRight: '1rem' }}
								src='https://github.com/ChrisRDaniels'
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
