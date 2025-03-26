import { useLocation } from 'react-router-dom';
import NavButton from '../modules/navButton';

const Navbar = () => {
	const location = useLocation();
	const currentPage = location.pathname;

	return (
		<nav className='navbar'>
				<NavButton title="About Me" url="/aarohi-portfolio/" icon="fa-solid fa-contact-card" active={currentPage == '/aarohi-portfolio/'}></NavButton>
				<NavButton title="Experience" url="/aarohi-portfolio/experience" icon="fa-solid fa-suitcase" active={currentPage == '/aarohi-portfolio/experience'}></NavButton>
		</nav>
	);
}

export default Navbar;