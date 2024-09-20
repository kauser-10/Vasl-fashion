// src/components/ProductPage.js
import React from 'react';
import './Products.css';
import laptop from'../../assets/laptop.jpg'

const Products = () => {
  return (
    <div className="products-container">
      {/* Left Side: Text */}
      <div className="products-text">
        <h1>How to Design your Own Dress</h1>
        <p>
          When using our unique <strong>dress designer</strong> you can choose a
          Sheath, Shift, or Wrapped top. You can choose the style of the skirt:
          A-line, Flared, Sheath, and obviously its length. Then you can choose
          and see how it looks among different necklines and sleeves. There are
          thousands of options. <strong>Try it out now – it's completely free!</strong>
        </p>
        <button className="btn-design">Design Your Dress</button>
      </div>

      {/* Right Side: Image */}
      <div className="products-image">
        <img
          src= {laptop}
          alt="Dress Preview"
        />
      </div>
    </div>
  );
};

export default Products;
