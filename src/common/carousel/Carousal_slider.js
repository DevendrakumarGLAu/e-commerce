import React, { useState, useEffect } from 'react';
import './Carousal_slider.css'; // Import your component-specific CSS file
import carouselData from './Carousal_slider.json';

function Carousal_slider() {
    const [carouselItems, setCarouselItems] = useState([]);

    useEffect(() => {
        setCarouselItems(carouselData);
    }, []);

    return (
        <div className="mt-5">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {carouselData && carouselData.map((item, index) => (
                        <button
                            key={item.id}
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={index}
                            className={index === 0 ? "active" : ""}
                            aria-current={index === 0 ? "true" : "false"}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
                <div className="carousel-inner">
                    {carouselData && carouselData.map((item, index) => (
                        <div key={item.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                            <img src={item.imageUrl} className="d-block w-100" alt={`Slide ${index + 1}`} />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{item.title}</h5>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousal_slider;
