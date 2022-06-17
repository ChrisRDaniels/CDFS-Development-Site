import PricingCard from '../components/PricingCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import React from 'react';

const Pricing = () => {
	return (
		<div>
			<Navbar />
			<HeroImg2
				heading='PRICING.'
				text='Pricing For Some Of The Services That I Offer. Alternative Rates/Requests Are Negotiable.'
			/>
			<PricingCard />
			<Footer />
		</div>
	);
};
export default Pricing;
