import './App.scss';
import React, { useState, useEffect } from 'react';
import ImageModal from './components/ImageModal';
import ModalSlide from './components/ModalSlide';
import Loading from './components/Loading';
import ContactIcons from './components/ContactIcons';

function App() {
  const [photoData, setPhotoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchPhotoData = async () => {
      setIsLoading(true);
      const data = await fetch(`https://api.pexels.com/v1/curated?per_page=10`, {
        headers: {
          Authorization: "563492ad6f91700001000001f58e6def40a2436c823881c0b23a45b7"
        }
      })
      const response = await data.json();
      setPhotoData(response.photos);
      setIsLoading(false);
    }
    fetchPhotoData();
  }, [setModal, currentIndex, setCurrentIndex])

  const openModal = (image,index) => {
    setCurrentSlide(image)
    // set the current index to the index of the image clicked
    setCurrentIndex(index)
    setModal(true);
  }

  return (
    <div className="App">
      <section className='main-content'>
        <h1>Hi!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsam fuga dignissimos. Voluptatem, voluptates. Voluptas, ipsum? Laboriosam dolore quod minus.</p>
        <section className='photos'>
          {
            isLoading ? <Loading /> :
            photoData.map((image, index) => (
              <article onClick={() => openModal(image, index)} className='photo-card' key={image.id}>
                <img className='photo-img' alt={image.alt} src={image.src.medium}/>
                <div>
                  <p>Lorem, ipsum.</p>
                </div>
              </article>
            ))
          }
        </section>
        <ContactIcons />
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
