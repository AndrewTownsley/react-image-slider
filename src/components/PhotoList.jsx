import React from 'react'
import Loading from './Loading';
import PhotoCard from './PhotoCard';
import { nanoid } from 'nanoid';
import { BiLink } from 'react-icons/bi';

const PhotoList = ({ isLoading, modal, openModal, photoData }) => {
  return (
    <section className='photos'>
    {
      (isLoading && !modal) ? <Loading /> :
      photoData.map((image, index) => (
        <PhotoCard
            openModal={openModal}
            image={image}
            index={index}
            key={nanoid()}
        />
      ))
    }
  </section>
  )
}

export default PhotoList