import './App.scss';
import React, { useState, useEffect } from 'react';
import ImageModal from './components/ImageModal';
import Loading from './components/Loading';
import { BiLink } from 'react-icons/bi';
import { MdOutlineCamera } from 'react-icons/md';
import { nanoid } from 'nanoid';

function App() {
  const [photoData, setPhotoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [search, setSearch] = useState('');
  const [pageNum, setPageNum] = useState(1);
  const [perPage, setPerPage] = useState(15);
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
          console.log('hello hello');
          setPhotoData(response.photos);
        } else {
          setPhotoData(response.photos);
        }
        console.log(photoData);
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
        <header>
          <div className='header-left-search'>
            <h1><MdOutlineCamera/></h1>
            <form 
              className='search-form' 
              onSubmit={handleSearch}
              spellCheck='false'
            >
              <input 
                placeholder='search photos...'
                type="text" 
                onChange={(e) => setSearchQuery(e.target.value)}
                />
            </form> 
          </div>
          <div>
            <h1>SHUTTERSEARCH</h1>
          </div>
        </header>
          <h3 className='search-term'>{(photoData.length || isLoading) ? search : 'No Photos found for that search term.'}</h3>
        <section className='photos'>
          {
            (isLoading && !modal) ? <Loading /> :
            photoData.map((image, index) => (
              <article onClick={() => openModal(image, index)} className='photo-card' key={nanoid()}>
                <div className='photo-card-overlay'>
                  <div>
                    <span>{image.photographer}</span> 
                    <a href={image.url}><BiLink/></a>
                  </div>
                </div>
                <img className='photo-img' alt={image.alt} src={image.src.medium}/>
                <div>
                </div>
              </article>
            ))
          }
        </section>
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
    </div>
  );
}

export default App;
