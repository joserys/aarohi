import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Text from "./text";

const NavButton = ({ title, url = "/", icon, active = false}) => {
	const classes = active ? "nav-item nav-active" : "nav-item"
	return (
			<Link className={classes} to={url}>
				{typeof icon !== 'undefined' ? <FontAwesomeIcon className='nav-icon' icon={icon} beat={false}/> : ''}
				<Text type="heading" classOverride='nav-heading'>{title}</Text>
			</Link>
	);
}

export default NavButton;