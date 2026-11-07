import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, MapPin, User, ClipboardList, CheckCircle, CreditCard, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { WhatsAppIcon } from '../components/Navbar';
import '../styles/Pages.css';

interface FormFields {
  fullName: string;
  phone: string;
  alternatePhone: string;
  houseNo: string;
  streetMohalla: string;
  landmark: string;
  specialInstructions: string;
}

export const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { cartItems, subtotal, deliveryCharges, grandTotal, clearCart } = useCart();

  const [formData, setFormData] = useState<FormFields>({
    fullName: '',
    phone: '',
    alternatePhone: '',
    houseNo: '',
    streetMohalla: '',
    landmark: '',
    specialInstructions: ''
  });

  const [errors, setErrors] = useState<Partial<FormFields>>({});
  const [isOrdered, setIsOrdered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormFields]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const tempErrors: Partial<FormFields> = {};
    if (!formData.fullName.trim()) tempErrors.fullName = 'Full name is required';
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!/^\d{10,12}$/.test(formData.phone.trim().replace(/[\s-]/g, ''))) {
      tempErrors.phone = 'Enter a valid Pakistani phone number (e.g. 03001234567)';
    }
    if (!formData.streetMohalla.trim()) tempErrors.streetMohalla = 'Street / Mohalla address is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert('Your cart is empty. Please add some food items first.');
      return;
    }

    if (!validateForm()) return;

    setIsLoading(true);

    // Create complete delivery address string
    const completeAddress = `${formData.houseNo ? `House #${formData.houseNo}, ` : ''}${formData.streetMohalla}, Bhera city${formData.landmark ? ` (Landmark: ${formData.landmark})` : ''}`;

    // Format order items list text
    const orderItemsText = cartItems
      .map((item) => {
        const sizeInfo = item.size ? ` (${item.size})` : '';
        const toppingsInfo = item.toppings.length > 0
          ? `\n   + Toppings: ${item.toppings.map((t) => t.name).join(', ')}`
          : '';
        return `${item.quantity} × ${item.menuItem.name}${sizeInfo}\n   Rs.${item.unitPrice * item.quantity}${toppingsInfo}`;
      })
      .join('\n\n');

    // Build exactly formatted WhatsApp message
    const waMessage = 
`🍕 *NEW ORDER*

Restaurant:
Oven Bake Pizza Bhera

━━━━━━━━━━━━━━

👤 *Customer*

Name:
${formData.fullName.trim()}

Phone:
${formData.phone.trim()}${formData.alternatePhone ? `\nAlt Phone: ${formData.alternatePhone.trim()}` : ''}

━━━━━━━━━━━━━━

📍 *Delivery Address*

${completeAddress}

━━━━━━━━━━━━━━

🛒 *Order Details*

${orderItemsText}

━━━━━━━━━━━━━━

Subtotal: Rs.${subtotal}
Delivery: Rs.${deliveryCharges}

━━━━━━━━━━━━━━

💰 *Grand Total: Rs.${grandTotal}*

━━━━━━━━━━━━━━

Payment: Cash On Delivery

━━━━━━━━━━━━━━

📝 *Notes*
${formData.specialInstructions.trim() || 'No special instructions.'}

━━━━━━━━━━━━━━

Thank You ❤️`;

    // Encode text message and compile URL
    const encodedMessage = encodeURIComponent(waMessage);
    const waPhoneNumber = '923076120333'; // Oven Bake Pizza Bhera WhatsApp number
    const waUrl = `https://wa.me/${waPhoneNumber}?text=${encodedMessage}`;

    setTimeout(() => {
      // Open WhatsApp in new tab
      window.open(waUrl, '_blank');
      setIsLoading(false);
      setIsOrdered(true);
      // Clear shopping cart state
      clearCart();
    }, 1500); // 1.5 seconds spinner delay
  };

  // If order is completed successfully, show confirmation screen
  if (isOrdered) {
    return (
      <div className="container" style={{ padding: '120px 24px 80px 24px' }}>
        <div className="checkout-steps">
          <div className="checkout-step checkout-step-active">
            <span className="checkout-step-number">✔</span>
            <span>Cart</span>
          </div>
          <div className="checkout-step-line"></div>
          <div className="checkout-step checkout-step-active">
            <span className="checkout-step-number">✔</span>
            <span>Checkout</span>
          </div>
          <div className="checkout-step-line"></div>
          <div className="checkout-step checkout-step-active">
            <span className="checkout-step-number">3</span>
            <span>Order Complete</span>
          </div>
        </div>

        <div className="checkout-card success-card">
          <div className="success-icon-box">
            <CheckCircle size={40} />
          </div>
          <h2>Order Successfully Prepared!</h2>
          <p>
            Your order details have been compiled and opened in WhatsApp. Please press the **Send** button inside WhatsApp to confirm your order with Oven Bake Pizza Bhera.
          </p>
          <div className="success-actions">
            <button onClick={() => navigate('/')} className="btn-secondary">
              Back to Home
            </button>
            <button onClick={() => navigate('/menu')} className="btn-primary">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '120px 24px 80px 24px' }}>
      
      {/* Step Indicator */}
      <div className="checkout-steps">
        <div className="checkout-step checkout-step-active">
          <span className="checkout-step-number">✔</span>
          <span>Cart</span>
        </div>
        <div className="checkout-step-line"></div>
        <div className="checkout-step checkout-step-active">
          <span className="checkout-step-number">2</span>
          <span>Checkout Details</span>
        </div>
        <div className="checkout-step-line"></div>
        <div className="checkout-step">
          <span className="checkout-step-number">3</span>
          <span>Order Complete</span>
        </div>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <Link to="/menu" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-gray)', fontSize: '14px', fontWeight: 600 }}>
          <ArrowLeft size={16} />
          <span>Back to Menu</span>
        </Link>
      </div>

      {/* Main Grid: Form Left, Sticky Summary Right */}
      <div className="checkout-grid">
        
        {/* Left Form */}
        <form onSubmit={handlePlaceOrder}>
          
          {/* Customer Details */}
          <div className="checkout-card">
            <h3 className="checkout-card-title">
              <User size={20} className="logo-highlight" />
              <span>Customer Information</span>
            </h3>
            
            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="form-input"
                style={{ borderColor: errors.fullName ? 'var(--secondary-red)' : '' }}
              />
              {errors.fullName && (
                <span style={{ color: 'var(--secondary-red)', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                  {errors.fullName}
                </span>
              )}
            </div>

            <div className="checkout-grid-row">
              <div className="form-group">
                <label htmlFor="phone">Mobile Number (WhatsApp Active) *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="e.g. 03001234567"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input"
                  style={{ borderColor: errors.phone ? 'var(--secondary-red)' : '' }}
                />
                {errors.phone && (
                  <span style={{ color: 'var(--secondary-red)', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                    {errors.phone}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="alternatePhone">Alternate Mobile (Optional)</label>
                <input
                  type="tel"
                  id="alternatePhone"
                  name="alternatePhone"
                  placeholder="e.g. 03071234567"
                  value={formData.alternatePhone}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>
          </div>

          {/* Delivery Details */}
          <div className="checkout-card">
            <h3 className="checkout-card-title">
              <MapPin size={20} className="logo-highlight" />
              <span>Delivery Address</span>
            </h3>

            <div className="checkout-grid-row">
              <div className="form-group">
                <label htmlFor="houseNo">House / Shop Number (Optional)</label>
                <input
                  type="text"
                  id="houseNo"
                  name="houseNo"
                  placeholder="e.g. House # 12, Floor 1"
                  value={formData.houseNo}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="streetMohalla">Street / Mohalla *</label>
                <input
                  type="text"
                  id="streetMohalla"
                  name="streetMohalla"
                  placeholder="e.g. Mohalla Qazi Pura, Sargodha Road"
                  value={formData.streetMohalla}
                  onChange={handleInputChange}
                  className="form-input"
                  style={{ borderColor: errors.streetMohalla ? 'var(--secondary-red)' : '' }}
                />
                {errors.streetMohalla && (
                  <span style={{ color: 'var(--secondary-red)', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                    {errors.streetMohalla}
                  </span>
                )}
              </div>
            </div>

            <div className="checkout-grid-row">
              <div className="form-group">
                <label htmlFor="landmark">Nearby Landmark (Optional)</label>
                <input
                  type="text"
                  id="landmark"
                  name="landmark"
                  placeholder="e.g. Near Govt High School / Allied Bank"
                  value={formData.landmark}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="city">City (Delivery Area)</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value="Bhera"
                  disabled
                  className="form-input"
                  style={{ backgroundColor: 'var(--bg-soft)', cursor: 'not-allowed', fontWeight: 600 }}
                />
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: 0 }}>
              <label htmlFor="specialInstructions">Special Baking or Delivery Notes</label>
              <textarea
                id="specialInstructions"
                name="specialInstructions"
                placeholder="e.g. Make it extra spicy, less olives, ring the doorbell, call before arrival"
                value={formData.specialInstructions}
                onChange={handleInputChange}
                className="form-input"
                rows={3}
                style={{ resize: 'vertical' }}
              />
            </div>
          </div>

          {/* Payment Method */}
          <div className="checkout-card">
            <h3 className="checkout-card-title">
              <CreditCard size={20} className="logo-highlight" />
              <span>Payment Method</span>
            </h3>

            <div className="payment-selector">
              <div style={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                backgroundColor: 'var(--primary-orange)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF'
              }}>
                ✓
              </div>
              <div>
                <span className="payment-selector-title">Cash on Delivery (COD)</span>
                <p className="payment-selector-desc">Pay with cash when our rider delivers your food hot at your door.</p>
              </div>
            </div>
          </div>

        </form>

        {/* Right Sidebar: Sticky Order Summary */}
        <div className="summary-sticky-card">
          <h3 className="checkout-card-title" style={{ marginBottom: '20px', borderBottom: '1px solid var(--border-color)' }}>
            <ClipboardList size={20} className="logo-highlight" />
            <span>Order Summary</span>
          </h3>

          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '20px 0', color: 'var(--text-muted)' }}>
              <ShoppingBag size={32} style={{ margin: '0 auto 12px auto' }} />
              <p style={{ fontSize: '13px' }}>Your shopping cart is empty.</p>
              <Link to="/menu" className="btn-primary" style={{ display: 'inline-block', marginTop: '12px', padding: '8px 16px', fontSize: '13px' }}>
                Browse Menu
              </Link>
            </div>
          ) : (
            <>
              {/* Items List */}
              <div style={{ maxHeight: '280px', overflowY: 'auto', paddingRight: '4px', marginBottom: '20px' }}>
                {cartItems.map((item) => (
                  <div key={item.id} className="summary-item-line">
                    <div className="summary-item-name">
                      <span>{item.quantity} × {item.menuItem.name}</span>
                      {item.size && <span style={{ display: 'block', fontSize: '11px', color: 'var(--primary-orange)', textTransform: 'uppercase', marginTop: '2px' }}>Size: {item.size}</span>}
                      {item.toppings.length > 0 && (
                        <span style={{ display: 'block', fontSize: '11px', color: 'var(--text-gray)', marginTop: '2px' }}>
                          + {item.toppings.map((t) => t.name).join(', ')}
                        </span>
                      )}
                    </div>
                    <span className="summary-item-price">Rs.{item.unitPrice * item.quantity}</span>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: 'var(--text-gray)', paddingBottom: '16px', borderBottom: '1px solid var(--border-color)', marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Subtotal</span>
                  <span style={{ fontWeight: 600 }}>Rs.{subtotal}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Delivery Charges</span>
                  <span style={{ fontWeight: 600 }}>Rs.{deliveryCharges}</span>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '20px', fontWeight: 800, color: 'var(--text-charcoal)', fontFamily: 'Outfit, sans-serif', marginBottom: '24px' }}>
                <span>Grand Total</span>
                <span>Rs.{grandTotal}</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                onClick={handlePlaceOrder}
                disabled={isLoading || cartItems.length === 0}
                className="btn-primary checkout-submit-btn"
              >
                {isLoading ? (
                  <span>Preparing Order...</span>
                ) : (
                  <>
                    <WhatsAppIcon size={20} />
                    <span>Place Order via WhatsApp</span>
                  </>
                )}
              </button>
            </>
          )}

        </div>

      </div>
    </div>
  );
};
