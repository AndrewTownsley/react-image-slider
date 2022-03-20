import React from 'react'

const ModalLoader = ({ modal }) => {
  return (
    <section className='image-loader-container'>
      <div>
        <div className='spinner-container'>
         <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
      </div>
    </section>
  )
}

export default ModalLoader