import React, { useEffect, useState } from 'react'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import ModalLoader from './ModalLoader';


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
        <button className='image-modal-btn close-btn' onClick={() => setModal(false)}>&#10006;</button>
        <button className='image-modal-btn' onClick={prevModalSlide}><MdArrowBackIos/></button>
        <div className='image-modal-photo-container'>

        {
            isLoading 
            ? 
            <ModalLoader
                modal={modal}
            /> 
            : 
            <img 
            src={currentSlide.src.large} 
            alt='alt-text' 
            />
        }
        </div>
        <button className='image-modal-btn' onClick={nextModalSlide}><MdArrowForwardIos/></button>
    </div>
  )
}

export default ImageModal