import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from '../SearchBar/SearchBar'
import { fetchImages } from '../images-api'
import ImageGallery from '../ImageGallery/ImageGallery'

const App = () => {
const [images, setImages] = useState([]);

useEffect(() => {
  async function getImages() {
    const data = await fetchImages();
    setImages(data);
  }
  getImages();
}, []);

  return (
    <div>
      {images.length > 0 && <ImageGallery images={images}/> }
    <SearchBar />
    </div>
  )
}

export default App
