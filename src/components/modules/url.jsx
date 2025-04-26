import Text from './text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Url = ({ children, icon, link = '', external = false, file = false}) => {
	if (typeof icon !== 'undefined') {
		return (
			<a className='link' href={link} target={external ? '_blank' : '_self'}>
				<FontAwesomeIcon className='link-icon' icon={icon} beat={false} />
				<div className='link-heading'>{children}</div>
			</a>
		);
	} else {
		return(
			<a className='normal-link' href={link} target={external ? '_blank' : '_self'} data-fr-linked={file}>
				{children}
			</a>
		);
	}
}

export default Url;