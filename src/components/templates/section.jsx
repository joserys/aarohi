import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './../pages/about.jsx';
import Experience from './../pages/experience.jsx';

const Section = ({hide = false}) => {
	const classes = hide ? 'main hide-small' : 'main';

	return (
		<section className={classes}>
			<Routes>
				<Route path="/" element={<About />} />
				<Route path="/experience" element={<Experience />} />
			</Routes>
		</section>
	);
}

export default Section;