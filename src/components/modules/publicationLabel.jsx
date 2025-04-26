import Text from './text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PublicationLabel = ({ title, icon}) => {
	if (typeof icon !== 'undefined') {
		return (
			<div className='label-container'>
				<FontAwesomeIcon className='award-icon' icon={icon} beat={false} />
				<div className='label-title'>{title}</div>
			</div>
		);
	} else {
		return(
			<Text>{title}</Text>
		);
	}
}

export default PublicationLabel;