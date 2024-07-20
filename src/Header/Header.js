import React, { useState, useEffect } from 'react';
import './Header.css'
import Header_image from '../Image_header/Header_image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import carousel from '../common/carousel/Carousel';

import { faCartShopping } from '@fortawesome/free-solid-svg-icons';import Carousal_slider from '../common/carousel/Carousal_slider';
 function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <>
            <div id="navbar" className={isScrolled ? 'scrolled' : ''}>
                <a href="#default" id="logo">CompanyLogo</a>
                <div id="navbar-right">
                    {/* <a className="active" href="#home">Home</a> */}
                    <a className={isScrolled ? 'active1' : ''} href="#cart">
                        <FontAwesomeIcon icon={faCartShopping} />
                    </a>
                    {/* <a href="#about">About</a> */}
                    {/* <i class="fa-solid fa-cart-shopping"></i> */}
                </div>

            </div>
            <Header_image />
            <Carousal_slider />
        </>
    )
}

export default Header