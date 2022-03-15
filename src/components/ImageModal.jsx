import React from 'react'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import Loading from './Loading'


const ImageModal = ({ photoData, setModal, currentSlide, setCurrentSlide, currentIndex, setCurrentIndex, isLoading, setIsLoading }) => {

    
  // Tge problem is that the newItem is not loaded yet, so the image is not loaded.
  // The solution is to use the setTimeout function to wait for the newItem to be loaded.
  // or use the useEffect function to wait for the newItem to be loaded.
  
  const prevModalSlide = () => {
    //   setIsLoading(true)
      const totalLength = photoData.length;
      if (currentIndex === 0) {
      setCurrentIndex(totalLength + 1);
      const newUrl = photoData[totalLength + 1];
      setCurrentSlide(newUrl);
        setIsLoading(false);
      return;
    } else {
        const newIndex = currentIndex + 1;
        const newUrl = photoData.filter((item) => {
            return photoData.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0];
        console.log("newItem: ",newItem);
        setCurrentIndex(newIndex);
        // setCurrentSlide(newItem)
        // setIsLoading(false);
        console.log("currentSlide: ", currentSlide);
    }
    }
    
    const nextModalSlide = () => {
        const totalLength = photoData.length;
        if (currentIndex === 0) {
          setCurrentIndex(totalLength - 1);
          const newUrl = photoData[totalLength - 1];
          setCurrentSlide(newUrl);
          console.log("newUrl: ",newUrl);
          return;
        } else {
            const newIndex = currentIndex - 1;
            const newUrl = photoData.filter((item) => {
                return photoData.indexOf(item) === newIndex;
            });
            const newItem = newUrl[0];
            console.log("newItem: ",newItem);
            setCurrentIndex(newIndex);
            // setCurrentSlide(newItem)
            console.log("currentSlide: ",currentSlide);
        }
    }
    
    console.log("currentSlide:", currentSlide);
    console.log("currentIndex:", currentIndex);

  return (
    <div className='image-modal'>
        <button onClick={() => setModal(false)}>Close</button>
        <button onClick={prevModalSlide}><MdArrowBackIos/></button>
        {
            isLoading ? <Loading /> : 
            <img src={currentSlide.src.medium} alt="" />
        }
        <button onClick={nextModalSlide}><MdArrowForwardIos/></button>
    </div>
  )
}

export default ImageModal