import React from 'react';
import { Star, Eye, Plus } from 'lucide-react';
import { type MenuItem } from '../data/menuData';
import '../styles/Cards.css';

interface ProductCardProps {
  item: MenuItem;
  onSelect: (item: MenuItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ item, onSelect }) => {
  // Calculate discount percentage if oldPrice exists
  const discountPercent = item.oldPrice
    ? Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100)
    : 0;

  return (
    <div className="product-card" onClick={() => onSelect(item)}>
      {/* Badge Overlay */}
      {item.badge && (
        <div className="product-card-badge">
          <span className={`badge ${item.badge === 'Hot' ? 'badge-red' : 'badge-orange'}`}>
            {item.badge}
          </span>
        </div>
      )}
      
      {/* Discount Percentage Badge */}
      {discountPercent > 0 && (
        <div className="product-card-badge" style={{ left: item.badge ? '80px' : '16px' }}>
          <span className="badge badge-red">-{discountPercent}% OFF</span>
        </div>
      )}

      {/* Product Image Container */}
      <div className="product-card-img-box">
        <img
          src={item.image}
          alt={item.name}
          className="product-card-img"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80';
          }}
        />
        {/* Hover Eye Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          color: '#FFFFFF'
        }} className="hover-eye-overlay">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'var(--primary-orange)',
            padding: '8px 16px',
            borderRadius: '100px',
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 600,
            fontSize: '13px'
          }}>
            <Eye size={16} />
            <span>Customize</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="product-card-content">
        <div className="product-card-meta">
          <span className="product-card-category">{item.category}</span>
          {item.rating && (
            <span className="product-card-rating">
              <Star size={14} />
              <span>{item.rating}</span>
            </span>
          )}
        </div>

        <h3 className="product-card-title">{item.name}</h3>
        <p className="product-card-desc">{item.description}</p>

        {/* Footer with Price and Action */}
        <div className="product-card-footer">
          <div className="product-card-price-box">
            <span className="product-card-price-label">
              {item.isPizza ? 'Starts from' : 'Price'}
            </span>
            <div className="product-card-prices">
              <span className="product-card-price">Rs.{item.price}</span>
              {item.oldPrice && (
                <span className="product-card-old-price">Rs.{item.oldPrice}</span>
              )}
            </div>
          </div>

          <button
            className="product-card-btn"
            aria-label={`Customize and add ${item.name} to cart`}
            onClick={(e) => {
              e.stopPropagation();
              onSelect(item);
            }}
          >
            <Plus size={16} />
            <span>Select</span>
          </button>
        </div>
      </div>

      <style>{`
        .product-card:hover .hover-eye-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};
