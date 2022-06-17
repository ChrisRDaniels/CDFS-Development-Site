import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';
import Footer from '../components/Footer';
import SkillsContent from '../components/SkillsContent';

const Skills = () => {
	return (
		<div>
			<Navbar />
			<HeroImg2
				heading='SKILLS.'
				text='The Various Languages/Frameworks/Tech Stacks That I Have Worked With In The Past.'
			/>
			<SkillsContent />
			<Footer />
		</div>
	);
};

export default Skills;
