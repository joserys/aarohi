import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './../pages/about.jsx';
import Experience from './../pages/experience.jsx';

const Section = () => {
	return (
		<section className='main background-1 width-12'>
			<Routes>
				<Route path="/" element={<About />} />
				<Route path="/experience" element={<Experience />} />
			</Routes>
		</section>
	);
}

export default Section;