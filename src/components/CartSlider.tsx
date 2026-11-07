import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import '../styles/Modals.css';

export const CartSlider: React.FC = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    deliveryCharges,
    grandTotal
  } = useCart();
  
  const navigate = useNavigate();
  const sliderRef = useRef<HTMLDivElement>(null);

  // Close cart slider when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (isCartOpen && sliderRef.current && !sliderRef.current.contains(e.target as Node)) {
        // Only close if we didn't click on the toggle button (which handles its own state)
        // Check if the click target or its parent is the cart toggle button
        const target = e.target as HTMLElement;
        if (!target.closest('.cart-icon-btn') && !target.closest('.product-card-btn') && !target.closest('.deal-btn') && !target.closest('.product-modal-add-btn')) {
          setIsCartOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isCartOpen, setIsCartOpen]);

  // Lock background scroll when open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  const handleCheckoutClick = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  const handleBrowseClick = () => {
    setIsCartOpen(false);
    navigate('/menu');
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div className={`modal-overlay ${isCartOpen ? 'active' : ''}`} style={{ zIndex: 1999 }} />

      {/* Sidebar Drawer */}
      <div
        ref={sliderRef}
        className={`cart-slider ${isCartOpen ? 'cart-slider-active' : ''}`}
      >
        {/* Header */}
        <div className="cart-slider-header">
          <h3>
            <ShoppingBag size={20} className="logo-highlight" />
            <span>Shopping Cart ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})</span>
          </h3>
          <button
            onClick={() => setIsCartOpen(false)}
            className="cart-slider-close"
            aria-label="Close Shopping Cart"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="cart-slider-items">
          {cartItems.length === 0 ? (
            <div className="empty-cart-box">
              <div className="empty-cart-icon">
                <ShoppingBag size={40} />
              </div>
              <h4>Your Cart is Empty</h4>
              <p>Add fresh pizzas, crispy burgers, and special deals to your cart now.</p>
              <button onClick={handleBrowseClick} className="btn-primary" style={{ marginTop: '10px' }}>
                Browse Menu
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.menuItem.image}
                  alt={item.menuItem.name}
                  className="cart-item-img"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=150&q=80';
                  }}
                />
                
                <div className="cart-item-details">
                  <div>
                    <h4 className="cart-item-title">{item.menuItem.name}</h4>
                    {item.size && <span className="cart-item-size">Size: {item.size}</span>}
                    {item.toppings.length > 0 && (
                      <div style={{ fontSize: '11px', color: 'var(--text-gray)', marginTop: '2px', display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                        <span>+ Toppings:</span>
                        {item.toppings.map((t, idx) => (
                          <span key={idx} style={{ backgroundColor: 'var(--bg-soft)', padding: '1px 6px', borderRadius: '4px', border: '1px solid var(--border-color)' }}>
                            {t.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="cart-item-row">
                    <div className="quantity-ctrl">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="quantity-btn"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="quantity-number">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="quantity-btn"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span className="cart-item-price">Rs.{item.unitPrice * item.quantity}</span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="cart-item-delete"
                        aria-label="Remove item from cart"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary (only if items exist) */}
        {cartItems.length > 0 && (
          <div className="cart-slider-footer">
            <div className="cart-summary-line">
              <span>Subtotal</span>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}>Rs.{subtotal}</span>
            </div>
            <div className="cart-summary-line">
              <span>Delivery Charges</span>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}>Rs.{deliveryCharges}</span>
            </div>
            <div className="cart-summary-total">
              <span>Grand Total</span>
              <span>Rs.{grandTotal}</span>
            </div>
            <button
              onClick={handleCheckoutClick}
              className="btn-primary cart-checkout-btn"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};
