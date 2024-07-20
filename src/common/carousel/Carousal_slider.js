import React, { useState, useEffect } from 'react';
import './Carousal_slider.css'; // Import your component-specific CSS file
// import carouselData from './Carousal_slider.json'; // Import the JSON data
import carouselData from './Carousal_slider.json';
import image1 from './carousel_image/image1.jpg';

function Carousal_slider() {
    const [carouselItems, setCarouselItems] = useState([]);

    useEffect(() => {
        // Set carouselItems state with imported carouselData
        setCarouselItems(carouselData);
    }, []); // Empty dependency array means this effect runs only once on component mount

    return (
        <div className="mt-5">
            <div className="gallery">
                {carouselItems.map((slide) => (
                    <div key={slide.id} className="gallery-item">
                        <img src={slide.imageUrl} alt={slide.title} className="gallery-image" />
                        <div className="gallery-caption">
                            <h5>{slide.title}</h5>
                            <p>{slide.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carousal_slider;

