import React from 'react'
import { BiLink } from 'react-icons/bi';
import { nanoid } from 'nanoid';


const PhotoCard = ({ openModal, image, index }) => {
  return (
    <article onClick={() => openModal(image, index)} className='photo-card' key={nanoid()}>
    <div className='photo-card-overlay'>
      <div>
        <span>{image.photographer}</span> 
        <a href={image.url} aria-label="link-to-source"><BiLink/></a>
      </div>
    </div>
    <img className='photo-img' alt={image.alt} src={image.src.medium}/>
    <div>
    </div>
  </article>
  )
}

export default PhotoCard