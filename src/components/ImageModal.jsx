import React, { useState } from 'react'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import ImageLoader from './ImageLoader'
import useFade from '../../utils/useFade'


const ImageModal = ({ photoData, modal,  setModal, currentSlide, setCurrentSlide, currentIndex, setCurrentIndex, isLoading }) => {
    const [fade, setFade] = useState(false)
  

const nextModalSlide = () => {
    setFade(true)
          console.log(fade);
        if (currentIndex < photoData.length - 1) {
            setCurrentIndex(currentIndex + 1)
            setCurrentSlide(photoData[currentIndex + 1])
        } else {
            setCurrentIndex(0)
            setCurrentSlide(photoData[0])
        }
        // setFade(false)
}

const prevModalSlide = () => {
    setFade(true)
    console.log(fade);
          if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1)
        setCurrentSlide(photoData[currentIndex - 1])
    } else {
        setCurrentIndex(photoData.length - 1)
        setCurrentSlide(photoData[photoData.length - 1])
        // setFade(false)
    }
}

  return (
    // <div className={modal ? 'image-modal modal-open' : 'image-modal'}>
    <div className='image-modal'>
        <button onClick={() => setModal(false)}>Close</button>
        <button onClick={prevModalSlide}><MdArrowBackIos/></button>
        {
            isLoading ? <ImageLoader /> : 
            <img 
                src={currentSlide.src.medium} 
                onAnimationEnd={() => setFade(0)}
                className={fade ? 'fade-out-image' : ''}
                alt='alt-text' 
                // fade={fade}
            />
        }
        <button onClick={nextModalSlide}><MdArrowForwardIos/></button>
    </div>
  )
}

export default ImageModal