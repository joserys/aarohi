import { BrowserRouter as Router, Link } from 'react-router-dom';
import Text from "./text";

const NavButton = ({ title, url = "/" }) => {
	return (
			<Link className="nav-button width-2" to={url}>
				<Text type="heading">{title}</Text>
			</Link>
	);
}

export default NavButton;