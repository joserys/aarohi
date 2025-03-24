import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className='header background-2'>
			<nav>
				<div><Link to="/">About Me</Link></div>
				<div><Link to="/Experience">Experience</Link></div>
			</nav>
		</header>
	);
}

export default Header;