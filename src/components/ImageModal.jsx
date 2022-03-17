import React, { useEffect } from 'react'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import Loading from './Loading'


const ImageModal = ({ photoData, setModal, currentSlide, setCurrentSlide, currentIndex, setCurrentIndex, isLoading, setIsLoading }) => {
  

const prevModalSlide = () => {
    setIsLoading(true)
console.log("currentSlide:", currentSlide);
console.log("currentIndex:", currentIndex);
if (currentIndex === 0) {
    setCurrentIndex(photoData.length - 1)
    setIsLoading(false)
    console.log("newSlide:", photoData[currentIndex]);
    let newSlide = photoData[currentIndex]
    setCurrentSlide(newSlide)
} else {
    setCurrentIndex(currentIndex - 1)
    setIsLoading(false)
    let newSlide = photoData[currentIndex]
    console.log("newSlide:", photoData[currentIndex]);
    setCurrentSlide(newSlide)
}
}

//   const prevModalSlide = async () => {
//       const totalLength = photoData.length;
//       if (currentIndex === 0) {
//       setCurrentIndex(totalLength + 1);
//       const newUrl = await photoData[totalLength + 1];
//       await setCurrentSlide(newUrl);
//       return;
//     } else {
//         const newIndex = currentIndex + 1;
//         const newUrl = await photoData.filter((item) => {
//             return photoData.indexOf(item) === newIndex;
//         });
//         console.log("newIndex: ",newIndex);
//         console.log("newUrl", newUrl);
//         const newItem = await newUrl[0];
//         console.log("newItem: ",newItem);
//         setCurrentIndex(newIndex);
//         await setCurrentSlide(newItem)
//     }
//     }
    
    const nextModalSlide = async () => {
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