import React from 'react'
import '../styles/content.scss' 

export default function Content({image, src, alt}) {

  let renderContent = () => {
    if(image) {
      return <img src={src} alt={alt} />
    }
    else {
      return <iframe src={src} title={alt} />
    }
  }

  return (
    <div className='contentContainer'>
      {renderContent()}
    </div>
  )

}