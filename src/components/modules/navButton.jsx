import { BrowserRouter as Router, Link } from 'react-router-dom';
import Text from "./text";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavButton = ({ title, url = "/", icon}) => {
	return (
			<Link className="nav-item width-3" to={url}>
				{typeof icon !== 'undefined' ? <FontAwesomeIcon className='width-2' icon={icon} beat={false}/> : ''}
				<Text type="heading">{title}</Text>
			</Link>
	);
}

export default NavButton;