const Image = ({ src = '', alt = '', width = 4}) => {
	return (
		<div className="image-container">
			<img src={src} slt={alt} className="image"></img>
		</div>
	);
}

export default Image;