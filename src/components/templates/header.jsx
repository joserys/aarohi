import NavButton from '../modules/navButton';

const Header = () => {
	return (
		<header className='header background-2'>
			<nav className='large-nav'>
				<NavButton title="About Me" url="/"></NavButton>
				<NavButton title="Experience" url="/Experience"></NavButton>
			</nav>
		</header>
	);
}

export default Header;