import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';
import Footer from '../components/Footer';
import Form from '../components/Form';

const Contact = () => {
	return (
		<div>
			<Navbar />
			<HeroImg2
				heading='CONTACT ME.'
				text='I Am Available for Contract or Full-Time Work currently'
			/>
			<Form />
			<Footer />
		</div>
	);
};

export default Contact;
