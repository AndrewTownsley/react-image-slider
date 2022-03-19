import React, { useEffect, useState } from 'react'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import ImageLoader from './ImageLoader';


const ImageModal = ({ photoData, modal,  setModal, currentSlide, setCurrentSlide, currentIndex,setCurrentIndex, isLoading }) => {
  

const nextModalSlide = () => {
    if (currentIndex < photoData.length - 1) {
        setCurrentIndex(currentIndex + 1)
        setCurrentSlide(photoData[currentIndex + 1])
    } else {
        setCurrentIndex(0)
        setCurrentSlide(photoData[0])
    }
}

const prevModalSlide = () => {
    if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1)
        setCurrentSlide(photoData[currentIndex - 1])
    } else {
        setCurrentIndex(photoData.length - 1)
        setCurrentSlide(photoData[photoData.length - 1])
    }
}

  return (
    <div className='image-modal'>
        <button onClick={() => setModal(false)}>Close</button>
        <button onClick={prevModalSlide}><MdArrowBackIos/></button>
        <div>

        {
            isLoading ? <ImageLoader /> : 
            <img 
            src={currentSlide.src.medium} 
            alt='alt-text' 
            />
        }
        </div>
        <button onClick={nextModalSlide}><MdArrowForwardIos/></button>
    </div>
  )
}

export default ImageModal