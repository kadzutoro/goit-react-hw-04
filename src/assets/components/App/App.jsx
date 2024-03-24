import { useEffect, useState } from 'react'
import { fetchImages } from '../images-api'
import SearchBar from '../SearchBar/SearchBar'
import ImageGallery from '../ImageGallery/ImageGallery'
import Loader from '../Loader/Loader'
import ImageModal from '../ImageModal/ImageModal'
import LoadMore from '../LoadMore/LoadMore'

const App = () => {
  const [query, setQuery] = useState("")
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImageInfo, setSelectedImageInfo] = useState({});

  useEffect(() => {
    async function getData() {
      if(query === "")
      {
        return;
      }
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchImages({query, page});
        setImages( prevImages => [...prevImages, ...data]);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false)
      }
    }
    getData()
  }, [page, query]) 

  const handleSearch =  (newQuery) => {
    setQuery(newQuery)
    setPage(1);
    setImages([]);
}

  const handleLoadMore = () => {
    setPage(page + 1)
  }

  const openModal = values => {
    setSelectedImageInfo(values);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImageInfo({});
  };

return (
  <div>
    <SearchBar onSearch={handleSearch} />
      {images.length > 0 && <ImageGallery images={images} openModal={openModal}/> }
      {error && <b>Oops... Something went wrong, try to reload page!</b>}
      {images.length > 0 && !isLoading && <LoadMore handleLoadMore={handleLoadMore} />}
      {isLoading && <Loader />}
      <ImageModal closeModal={closeModal} modalIsOpen={showModal} modal={selectedImageInfo} />
    </div>
  )
}
export default App
