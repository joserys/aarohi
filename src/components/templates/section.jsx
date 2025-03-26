import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './../pages/about.jsx';
import Experience from './../pages/experience.jsx';

const Section = ({hide = false}) => {
	const classes = hide ? 'main hide-small' : 'main';

	return (
		<section className={classes}>
			<Routes>
				<Route path="/aarohi-portfolio/" element={<About />} />
				<Route path="/aarohi-portfolio/experience" element={<Experience />} />
			</Routes>
		</section>
	);
}

export default Section;