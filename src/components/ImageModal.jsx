import React from 'react'

const ImageModal = ({ photoData, setModal }) => {
  return (
    <div className='image-modal' onClick={() => setModal(false)}>
        {
            photoData.map((photo) => (
                <img src={photo.src.large} alt={photo.alt} />
            ))
        }
    </div>
  )
}

export default ImageModal