
const ModalSlide = ({ image }) => {

  return (
    <>
      <img 
        key={image.alt} 
        className='modal-photo-img' 
        src={image.src.large} 
        alt={image.alt} 
      />
    </>
  )
}

export default ModalSlide