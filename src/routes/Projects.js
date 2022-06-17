import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';
import Footer from '../components/Footer';
import PricingCard from '../components/PricingCard';
import Work from '../components/Work';

const Projects = () => {
	return (
		<div>
			<Navbar />
			<HeroImg2
				heading='PROJECTS.'
				text='Here Are Some Examples Of My Work. You Can View The Live Versions As Well As The Github Source Code.'
			/>
			<Work />
			<Footer />
		</div>
	);
};

export default Projects;
