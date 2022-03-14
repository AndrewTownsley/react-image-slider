import React from 'react'
import ModalSlide from './ModalSlide'

const ImageModal = ({ photoData, setModal, currentSlide }) => {

  return (
    <div className='image-modal' onClick={() => setModal(false)}>
        {/* <img src={image[currentSlide]} alt="" /> */}
    </div>
  )
}

export default ImageModal