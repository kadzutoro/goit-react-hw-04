import ImageCard from '../ImageCard/ImageCard'

const ImageGallery = ( {images, openModal} ) => {
    return (
        <ul>
            {images.map(image => (
                <li key={image.id}>
                    <imageCard image={image} openModal={openModal} />
                </li>
            ))}
        </ul>
    )
}

export default ImageGallery;