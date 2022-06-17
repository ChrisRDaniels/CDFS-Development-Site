import react from 'react';
import './index.css';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Projects from './routes/Projects';
import Pricing from './routes/Pricing';
import Skills from './routes/Skills';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='projects' element={<Projects />} />
				<Route path='about' element={<About />} />
				<Route path='contact' element={<Contact />} />
				<Route path='pricing' element={<Pricing />} />
				<Route path='skills' element={<Skills />} />
			</Routes>
		</>
	);
}

export default App;
