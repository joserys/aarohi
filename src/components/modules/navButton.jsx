import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Text from "./text";

const NavButton = ({ title, url = "/", icon, active = false}) => {
	const classes = active ? "nav-item nav-active width-2" : "nav-item width-2"
	return (
			<Link className={classes} to={url}>
				{typeof icon !== 'undefined' ? <FontAwesomeIcon className='width-2' icon={icon} beat={false}/> : ''}
				<Text type="heading">{title}</Text>
			</Link>
	);
}

export default NavButton;