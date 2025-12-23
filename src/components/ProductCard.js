import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div
      className="product-card"
    >
      <div className="product-image-container">
        <img
          src={product.image}
          alt={`${product.title} - Premium ${product.category} product`}
          className="product-image"
          loading="lazy"
        />
      </div>

      <div className="product-info">
        <h3 className="product-title">{product.title || 'Product Name'}</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", width: '100%', height: "auto" }}>
          <p className='product-desc'>Sign in or Create an account to see pricing</p><span>
            <svg width="20" height="20" viewBox="0 0 24 24" onClick={() => setIsLiked(!isLiked)} fill={isLiked ? "#ef4444" : "none"} stroke={isLiked ? "#ef4444" : "currentColor"} strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;