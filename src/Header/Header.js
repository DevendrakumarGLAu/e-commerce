import React from 'react'
import './Header.css'
import Header_image from '../Image_header/Header_image'

function Header() {
    return (
        <>
        <div id="navbar">
            <a href="#default" id="logo">CompanyLogo</a>
            <div id="navbar-right">
                <a class="active" href="#home">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
            
        </div>
        <Header_image/>
        </>
    )
}

export default Header