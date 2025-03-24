import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Url = ({ children, icon, link = '', external = false}) => {
	return (
		<a className='link width-auto' href={link} target={external ? '_blank' : '_self'}>
			{typeof icon !== 'undefined' ? <FontAwesomeIcon className='width-1' icon={icon} beat={false}/> : ''}
			<div className='width-11'>{children}</div>
		</a>
	);
}

export default Url;