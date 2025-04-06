const Image = ({ view = '', download, downloadAs='image', alt = ''}) => {
	return (
		<a href={typeof download !== 'undefined' ? download : view} download={downloadAs} className="image-container">
			<img src={view} slt={alt} className="image"></img>
		</a>
	);
}

export default Image;