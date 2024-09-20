import React, { useState, useEffect } from 'react';
import image1 from '../../assets/Carousel1.jpg';
import image2 from '../../assets/Carousel2.jpg';
import image3 from '../../assets/Carousel3.jpg';
import './Carousel.css';

const Carousel = () => {

    const images = [image1, image2, image3];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically switch to the next image every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="carousel-container">
            <div className="carousel-slide">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
                    />
                ))}
            </div>
            <div className="carousel-text">
                <h1>Custom Dresses</h1>
                <h3 className='carousel-Subtext'>from 89€</h3>
                <p>
                    Enjoy a perfect fit in your own custom-made dress or gown. Choose your preferred style, from work to evening dresses.
                </p>
                <button className="carousel-button">Create a dress</button>
                <p className="carousel-note">Order today and receive it by October 11. Free shipping above 120€.</p>
            </div>
        </div>
    );
};

export default Carousel;
