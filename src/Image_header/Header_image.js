import React from 'react'
import './Hedaer_image.css'
import image from './image/notebook.jpg'
function Header_image() {
  return (
    <div class="container">
  <img src={image} alt="Notebook" style={{width: '100%'}}/>
  <div class="content">
  <div class="bg-text">TEXT</div>
  </div>
</div>
  )
}

export default Header_image