import React from 'react'
import './Hedaer_image.css'
import image from './image/notebook.jpg'
function Header_image() {
  return (
    <div className="container1">
  <img src={image} alt="Notebook" style={{width: '100%'}}/>
  <div className="content1">
  <div className="bg-text">TEXT</div>
  </div>
</div>
  )
}

export default Header_image