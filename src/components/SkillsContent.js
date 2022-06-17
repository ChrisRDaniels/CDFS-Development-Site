import './SkillsContentStyles.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaReact, FaAngular, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiFirebase, SiCsharp } from 'react-icons/si';

const SkillsContent = () => {
	return (
		<div className='skills'>
			<div className='column'>
				<h1>Front End</h1>
				<ul>
					<li>
						<FaReact
							size={100}
							style={{ color: '#fff', marginRight: '1rem' }}
						/>
					</li>
					<li>
						<FaAngular
							size={100}
							style={{ color: '#fff', marginRight: '1rem' }}
						/>
					</li>
					<li>
						<SiTypescript
							size={100}
							style={{ color: '#fff', marginRight: '1rem' }}
						/>
					</li>
				</ul>
			</div>
			<div className='column'>
				<h1>Back End</h1>
				<ul>
					<li>
						<FaNodeJs
							size={100}
							style={{ color: '#fff', marginRight: '1rem' }}
						/>
					</li>
					<li>
						<SiFirebase
							size={100}
							style={{ color: '#fff', marginRight: '1rem' }}
						/>
					</li>
					<li>
						<SiCsharp
							size={100}
							style={{ color: '#fff', marginRight: '1rem' }}
						/>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default SkillsContent;
