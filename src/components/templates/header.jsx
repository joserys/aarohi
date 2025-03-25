import NavButton from '../modules/navButton';

const Header = () => {
	return (
		<header className='header background-2'>
			<nav className='navbar'>
				<NavButton title="About Me" url="/" icon="fa-solid fa-contact-card" ></NavButton>
				<NavButton title="Experience" url="/Experience" icon="fa-solid fa-suitcase"></NavButton>
			</nav>
		</header>
	);
}

export default Header;