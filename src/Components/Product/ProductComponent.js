import React, { useState, useEffect } from 'react';
import './ProductComponent.css'; // Assuming CSS is already in place

// Import your images from assets
import image1 from '../../assets/p1.jpg';
import image2 from '../../assets/p2.jpg';
import image3 from '../../assets/p3.jpg';
import image4 from '../../assets/p4.jpg';
import image5 from '../../assets/p5.jpg';
import image6 from '../../assets/p6.jpg';
import image7 from '../../assets/p7.jpg';
import image8 from '../../assets/p8.jpg';

const products = [
  { name: 'Custom Dresses', image: image1, link: '/products/custom-dresses' },
  { name: 'Business Dresses', image: image2, link: '/products/business-dresses' },
  { name: 'Bridesmaid Dresses', image: image3, link: '/products/bridesmaid-dresses' },
  { name: 'Wedding Guest Dresses', image: image4, link: '/products/wedding-guest-dresses' },
  { name: 'Formal Dresses', image: image5, link: '/products/formal-dresses' },
  { name: 'Plus Size Dresses', image: image6, link: '/products/plus-size-dresses' },
  { name: 'Seeth Dresses', image: image7, link: '/products/party-dresses' },
  { name: 'Long Sleevs Dresses', image: image8, link: '/products/party-dresses' },
];

const ProductComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(5); // Default to 5 items for large screens

  // Function to update the number of items based on screen width
  const updateItemsToShow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      setItemsToShow(2); // Show 2 items on mobile
    } else {
      setItemsToShow(5); // Show 5 items on larger screens
    }
  };

  useEffect(() => {
    // Call updateItemsToShow on initial render
    updateItemsToShow();
    
    // Add event listener for window resize
    window.addEventListener('resize', updateItemsToShow);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateItemsToShow);
    };
  }, []);

  // Function to handle the "next" button click
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + itemsToShow) >= products.length ? 0 : prevIndex + itemsToShow
    );
  };

  // Get the products to display based on currentIndex and itemsToShow
  const visibleProducts = products.slice(currentIndex, currentIndex + itemsToShow);

  return (
    <div className="product-carousel-container">
      <h2>Start with a base style</h2>
      <div className="product-carousel">
        {visibleProducts.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <a href={product.link} className="product-link">{product.name}</a>
          </div>
        ))}
      </div>
      <button className="next-button" onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default ProductComponent;
