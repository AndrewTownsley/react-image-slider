import React, { useEffect } from 'react'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import Loading from './Loading'


const ImageModal = ({ photoData, setModal, currentSlide, setCurrentSlide, currentIndex, setCurrentIndex, isLoading, setIsLoading }) => {
  

const nextModalSlide = () => {
    if (currentIndex < photoData.length - 1) {
        setCurrentIndex(currentIndex + 1)
        setCurrentSlide(photoData[currentIndex + 1])
    } else {
        setCurrentIndex(0)
        setCurrentSlide(photoData[0])
    }
}


//   const nextModalSlide = () => {
//       if (currentIndex === 0) {
//       setCurrentIndex(photoData.length - 1);
//       const newUrl = photoData[currentIndex];
//       console.log("currentIndex:", currentIndex);
//       setCurrentSlide(newUrl);
//       return;
//     } else {
//         const newIndex = currentIndex + 1;
//         const newUrl = photoData.filter((item) => {
//             return photoData.indexOf(item) === newIndex;
//         });
//         console.log("newIndex: ",newIndex);
//         console.log("currentIndex:", currentIndex);
//         const newItem = newUrl[0];
//         setCurrentIndex(newIndex);
//         setCurrentSlide(newItem)
//     }
//     }
    
    const prevModalSlide = async () => {
        const totalLength = photoData.length;
        if (currentIndex === 0) {
          setCurrentIndex(totalLength - 1);
          const newUrl = await photoData[totalLength - 1];
          await setCurrentSlide(newUrl);
          console.log("newUrl: ",newUrl);
          return;
        } else {
            const newIndex = currentIndex - 1;
            const newUrl = await photoData.filter((item) => {
                return photoData.indexOf(item) === newIndex;
            });
            const newItem = await newUrl[0];
            console.log("newItem: ",newItem);
                await setCurrentIndex(newIndex);
                console.log("currentSlide: ",currentSlide);
                await setCurrentSlide(newItem)
        }
    }

  return (
    <div className='image-modal'>
        <button onClick={() => setModal(false)}>Close</button>
        <button onClick={prevModalSlide}><MdArrowBackIos/></button>
        {
            isLoading ? <Loading /> : 
            <img src={currentSlide.src.medium} alt='alt-text' />
        }
        <button onClick={nextModalSlide}><MdArrowForwardIos/></button>
    </div>
  )
}

export default ImageModal