import './SkillsContentStyles.css';
import React from 'react';
import { FaReact, FaAngular, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiFirebase, SiCsharp } from 'react-icons/si';

const SkillsContent = () => {
	return (
		<div>
			<div className='skills-container'>
				<h1 className='column-header'>-- Front End --</h1>
				<ul>
					<li>
						<FaReact
							className='icons'
							size={125}
							style={{ color: '#fff', marginRight: '1rem' }}
						/>
						<p>ReactJS</p>
					</li>
					<li>
						<FaAngular
							className='icons'
							size={125}
							style={{ color: '#fff', marginRight: '1rem' }}
						/>
						<p>AngularJS</p>
					</li>
					<li>
						<SiTypescript
							className='icons'
							size={125}
							style={{ color: '#fff', marginRight: '1rem' }}
						/>
						<p>TypeScript</p>
					</li>
				</ul>
			</div>
      <hr />
			<div className='column'>
				<h1 className='column-header'>-- Back End --</h1>
				<ul>
					<li>
						<FaNodeJs
							className='icons'
							size={125}
							style={{ color: '#fff', marginRight: '1rem' }}
						/>
						<p>NodeJS</p>
					</li>
					<li>
						<SiFirebase
							className='icons'
							size={125}
							style={{ color: '#fff', marginRight: '1rem' }}
						/>
						<p>Firebase</p>
					</li>
					<li>
						<SiCsharp
							className='icons'
							size={125}
							style={{ color: '#fff', marginRight: '1rem' }}
						/>
						<p>CSharp</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default SkillsContent;
