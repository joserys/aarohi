import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Url = ({ children, icon, link = '', external = false, file = false}) => {
	if (typeof icon !== 'undefined') {
		return (
			<a className='link width-12' href={link} target={external ? '_blank' : '_self'}>
				{typeof icon !== 'undefined' ? <FontAwesomeIcon className='width-1 padding-r-5' icon={icon} beat={false} /> : ''}
				{children}
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