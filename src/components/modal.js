import React from 'react'
import '../styles/modal.css'

export default function Modal({image, src, alt, closeModal}) {

  let renderContent = () => {
    if(image) {
      return <img src={src} alt={alt} className='content'/>
    }
    else {
      return <iframe src={src} title={alt} className='content'/>
    }
  }

  return (
    <div className='modalContainer'>
      <button className='close' onClick={closeModal} />
      <div className='modal'>
        {renderContent()}
      </div>
    </div>
  )

}