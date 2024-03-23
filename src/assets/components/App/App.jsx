import { useEffect, useState } from 'react'
import { fetchImages } from '../images-api'
import SearchBar from '../SearchBar/SearchBar'
import ImageGallery from '../ImageGallery/ImageGallery'
import Loader from '../Loader/Loader'

const App = () => {
  const [query, setQuery] = useState("")
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);

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

return (
  <div>
    <SearchBar onSearch={handleSearch} />
      {images.length > 0 && <ImageGallery images={images}/> }
      {error && <b>Oops... Something went wrong, try to reload page!</b>}
      {images.length > 0 && !isLoading && ( 
        <button onClick={handleLoadMore}>Load more</button> 
        )}
      {isLoading && <Loader />}
    </div>
  )
}
export default App
