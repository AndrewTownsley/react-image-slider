import './App.scss';
import React, { useState, useEffect } from 'react';
import ImageModal from './components/ImageModal';
import Header from './components/Header';
import PhotoList from './components/PhotoList';

function App() {
  const [photoData, setPhotoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [search, setSearch] = useState('');
  const [pageNum, setPageNum] = useState(1);
  const [perPage, setPerPage] = useState(16);
  const [loadMore, setLoadMore] = useState(false);


  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchQuery);
  }

  const loadMorePhotos = () => {
    setLoadMore(true);
    setPageNum(pageNum + 1)
    setPerPage(perPage + 12)
  }

  useEffect(() => {
    const fetchPhotoData = async () => {
      setIsLoading(true);
      const data = await fetch(`https://api.pexels.com/v1/search?query=${search ? searchQuery : 'europe'}&page=${pageNum}per_page=${perPage}`, {
        headers: {
          Authorization: '563492ad6f91700001000001f58e6def40a2436c823881c0b23a45b7',
        }
      })
      const response = await data.json();
        if (photoData && search && pageNum === 1) {
          setPhotoData([ ...response.photos])
        } else if (pageNum > 1) {
          setPhotoData([...photoData, ...response.photos])
        } else if(searchQuery.value !== search.value) {
          setPhotoData(response.photos);
        } else {
          setPhotoData(response.photos);
        }
      setIsLoading(false);
    }
    fetchPhotoData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setPhotoData, setModal, currentIndex, setCurrentIndex, setSearch, search, setSearchQuery, setPageNum, pageNum])

  const openModal = (image,index) => {
    setCurrentSlide(image)
    setCurrentIndex(index)
    setModal(true);
  }

  return (
    <div className="App">
      <section className='main-content'>
        <Header
          handleSearch={handleSearch}
          setSearchQuery={setSearchQuery}
        />
          <h3 className='search-term'>{(photoData.length || isLoading) ? search : 'No Photos found for that search term.'}</h3>
        <PhotoList
          photoData={photoData}
          openModal={openModal}
          modal={modal}
          isLoading={isLoading}
        />
          <button className='load-more-btn' onClick={loadMorePhotos}>Load More</button>
      </section>
      {
        modal && 
      <ImageModal
        photoData={photoData}
        setModal={setModal}
        currentSlide={currentSlide} 
        setCurrentSlide={setCurrentSlide}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      }
            <p>Powered by <a href="https://www.pexels.com/">Pexels</a></p>
    </div>
  );
}

export default App;
