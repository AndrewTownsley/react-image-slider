import React, { useEffect} from 'react'



const ModalSlide = ({ photoData, modal, setModal, currentSlide, image }) => {

    // useEffect(() => {
    //     const fetchPhotos = async () => {
    //         photoData.map((image, index) => (
    //             <div className='modal-slide'>
    //                 <ModalSlide index={index} image={image} key={image.id} className='modal-photo-img' src={image.src.large} alt={image.alt} />
    //             </div>
    //         ))
    //         setModal(true)
    //     } 
    //     fetchPhotos()
    // }, [modal, setModal])
    // // console.log(photoData[currentSlide]);

  return (
    <>
     <img key={image.alt} className='modal-photo-img' src={image.src.large} alt={image.alt} />
    </>
  )
}

export default ModalSlide