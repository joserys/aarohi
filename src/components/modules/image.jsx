const Image = ({src = '', alt = ''}) => {
    console.log(src, alt)
    return(
        <div className="img-container">
            <img src={src} slt={alt} className="image"></img>
        </div>
    );
}

export default Image;