import './App.scss';
import React, { useState, useEffect } from 'react';
import ImageModal from './components/ImageModal';

function App() {
  const [photoData, setPhotoData] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const fetchPhotoData = async () => {
      const data = await fetch(`https://api.pexels.com/v1/curated?per_page=10`, {
        headers: {
          Authorization: "563492ad6f91700001000001f58e6def40a2436c823881c0b23a45b7"
        }
      })
      const response = await data.json();
      setPhotoData(response.photos);
      console.log(response.photos);
    }
    fetchPhotoData();
  }, [])

  return (
    <div className="App" onClick={(e) => console.log(e.target)}>
      <section className='main-content'>
        <h1>Hi!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsam fuga dignissimos. Voluptatem, voluptates. Voluptas, ipsum? Laboriosam dolore quod minus.</p>
        <section className='photos'>
          {
            photoData.map((image) => (
              <article onClick={() => setModal(true)} className='photo-card' key={image.alt}>
                <img className='photo-img' alt={image.alt} src={image.src.medium}/>
                <div>
                  <p>Lorem, ipsum.</p>
                </div>
              </article>
            ))
          }
        </section>
      </section>
      {
        modal && 
      <ImageModal
        photoData={photoData}
        setModal={setModal} 
      />
      }
    </div>
  );
}

export default App;
