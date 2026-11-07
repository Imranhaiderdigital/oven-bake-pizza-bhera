import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, Check } from 'lucide-react';
import { type MenuItem, extraToppings } from '../data/menuData';
import { useCart } from '../context/CartContext';
import '../styles/Modals.css';

interface ProductModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ item, onClose }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<'Small' | 'Medium' | 'Large' | 'XL'>('Medium');
  const [selectedToppingIds, setSelectedToppingIds] = useState<string[]>([]);

  // Reset local states when item changes
  useEffect(() => {
    if (item) {
      setQuantity(1);
      setSelectedToppingIds([]);
      if (item.isPizza && item.sizes && item.sizes.length > 0) {
        // Default to Medium if available, else first size
        const hasMedium = item.sizes.some((s) => s.name === 'Medium');
        setSelectedSize(hasMedium ? 'Medium' : item.sizes[0].name);
      }
    }
  }, [item]);

  // Lock background scroll when open
  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [item]);

  if (!item) return null;

  // Calculate pricing
  let itemBasePrice = item.price;
  if (item.isPizza && item.sizes) {
    const sizeObj = item.sizes.find((s) => s.name === selectedSize);
    if (sizeObj) {
      itemBasePrice = sizeObj.price;
    }
  }

  // Topping price depends on pizza size
  const toppingsPrice = selectedToppingIds.reduce((sum, id) => {
    const topping = extraToppings.find((t) => t.id === id);
    if (topping && item.isPizza) {
      return sum + topping.priceBySize[selectedSize];
    }
    return sum;
  }, 0);

  const unitPrice = itemBasePrice + toppingsPrice;
  const totalPrice = unitPrice * quantity;

  const handleToppingToggle = (toppingId: string) => {
    setSelectedToppingIds((prev) => {
      if (prev.includes(toppingId)) {
        return prev.filter((id) => id !== toppingId);
      } else {
        return [...prev, toppingId];
      }
    });
  };

  const handleAddToCart = () => {
    const toppingsToPass = selectedToppingIds.map((id) => {
      const topping = extraToppings.find((t) => t.id === id)!;
      return {
        name: topping.name,
        price: topping.priceBySize[selectedSize]
      };
    });

    addToCart(item, quantity, item.isPizza ? selectedSize : undefined, toppingsToPass);
    onClose();
  };

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="product-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
          <button
            onClick={onClose}
            className="product-modal-close"
            aria-label="Close details popup"
          >
            <X size={20} />
          </button>

          {/* Image Column */}
          <div className="product-modal-img-box">
            <img
              src={item.image}
              alt={item.name}
              className="product-modal-img"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80';
              }}
            />
          </div>

          {/* Details Column */}
          <div className="product-modal-content">
            
            {/* Header info */}
            <div className="product-modal-header">
              <span className="product-card-category">{item.category}</span>
              <h2 className="product-modal-name">{item.name}</h2>
              <p className="product-modal-desc">{item.description}</p>
            </div>

            {/* Size Selector for Pizza */}
            {item.isPizza && item.sizes && (
              <div className="product-modal-section">
                <h4 className="product-modal-section-title">Select Pizza Size</h4>
                <div className="size-selector-grid">
                  {item.sizes.map((s) => (
                    <div
                      key={s.name}
                      onClick={() => setSelectedSize(s.name)}
                      className={`size-option-card ${
                        selectedSize === s.name ? 'size-option-card-active' : ''
                      }`}
                    >
                      <span className="size-name">{s.name}</span>
                      <span className="size-price">Rs.{s.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Toppings Checklist (Pizzas only) */}
            {item.isPizza && extraToppings.length > 0 && (
              <div className="product-modal-section">
                <h4 className="product-modal-section-title">Add Extra Toppings</h4>
                <div className="toppings-checklist">
                  {extraToppings.map((topping) => {
                    const isChecked = selectedToppingIds.includes(topping.id);
                    const toppingPriceForSize = topping.priceBySize[selectedSize];
                    return (
                      <div
                        key={topping.id}
                        className="topping-item"
                        onClick={() => handleToppingToggle(topping.id)}
                      >
                        <div className="topping-left">
                          <div style={{
                            width: '18px',
                            height: '18px',
                            borderRadius: '4px',
                            border: '2px solid var(--border-color)',
                            backgroundColor: isChecked ? 'var(--primary-orange)' : 'transparent',
                            borderColor: isChecked ? 'var(--primary-orange)' : 'var(--border-color)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#FFFFFF'
                          }}>
                            {isChecked && <Check size={12} strokeWidth={3} />}
                          </div>
                          <span>{topping.name}</span>
                        </div>
                        <span className="topping-price">+ Rs.{toppingPriceForSize}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Live Pricing Footer */}
            <div className="product-modal-footer">
              <div className="product-modal-total-box">
                <span className="product-modal-total-label">Total Price</span>
                <span className="product-modal-total-price">Rs.{totalPrice}</span>
              </div>

              <div className="product-modal-actions">
                {/* Quantity adjustments */}
                <div className="quantity-ctrl">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="quantity-btn"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="quantity-number" style={{ width: '40px', fontSize: '15px' }}>{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="quantity-btn"
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                {/* Add to Cart button */}
                <button
                  onClick={handleAddToCart}
                  className="btn-primary product-modal-add-btn"
                >
                  Add To Cart
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
  );
};
