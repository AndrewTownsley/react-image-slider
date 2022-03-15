import React from 'react'
import ModalSlide from './ModalSlide'

const ImageModal = ({ photoData, setModal, currentSlide }) => {

  return (
    <div className='image-modal' onClick={() => setModal(false)}>
        <img src={currentSlide} alt="" />
    </div>
  )
}

export default ImageModal