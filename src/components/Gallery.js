function Gallery(props) {
    return (
        <div className="gallery">
            {
            props.imageList.map(function(listElement) {
                return(
                <div className="eachImage">
                    <img alt={listElement.url} src={listElement.url}/>
                </div>
                )})
            }
        </div>
    );
}

export default Gallery;
