import React, { useState } from 'react';
import { Flame, Percent, Clock, AlertCircle } from 'lucide-react';
import { type MenuItem, menuItems } from '../data/menuData';
import { ProductModal } from '../components/ProductModal';
import '../styles/Pages.css';
import '../styles/Cards.css';

export const Deals: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  // Fetch deal items from the database
  const deals = menuItems.filter((item) => item.category === 'deals');

  return (
    <div>
      {/* Hero Banner */}
      <section className="page-banner" style={{
        backgroundImage: 'linear-gradient(rgba(11, 11, 12, 0.8), rgba(11, 11, 12, 0.85)), url("https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=1200&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '140px 0 60px 0',
        borderBottom: '1px solid rgba(217, 33, 33, 0.15)'
      }}>
        <div className="page-banner-glow" style={{ background: 'radial-gradient(circle, rgba(217, 33, 33, 0.15) 0%, transparent 70%)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <Flame size={40} style={{ color: 'var(--secondary-red)' }} />
            <span>Special Food Deals</span>
          </h1>
          <p className="page-subtitle" style={{ color: '#D1D5DB' }}>
            Delicious pizza combos, burger bundles, and party packs compiled specifically to give you the best value for your money. Order now and save big!
          </p>
        </div>
      </section>

      {/* Info Strip */}
      <section style={{ backgroundColor: 'var(--bg-light)', borderBottom: '1px solid var(--border-color)', padding: '20px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', fontSize: '14px', color: 'var(--text-gray)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Percent size={18} style={{ color: 'var(--secondary-red)' }} />
            <span>Up to 25% discount on combos</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Clock size={18} style={{ color: 'var(--secondary-red)' }} />
            <span>Valid daily (10:00 AM – 2:00 AM)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <AlertCircle size={18} style={{ color: 'var(--secondary-red)' }} />
            <span>Dine-in, Takeaway & Home Delivery</span>
          </div>
        </div>
      </section>

      {/* Deals Grid */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }} className="deals-page-grid">
            {deals.map((deal) => {
              const discountPercent = deal.oldPrice
                ? Math.round(((deal.oldPrice - deal.price) / deal.oldPrice) * 100)
                : 0;

              return (
                <div key={deal.id} className="product-card" onClick={() => setSelectedItem(deal)} style={{ borderColor: 'rgba(217, 33, 33, 0.1)' }}>
                  <div className="product-card-badge">
                    <span className="badge badge-red">Active Combo</span>
                  </div>
                  
                  {discountPercent > 0 && (
                    <div className="product-card-badge" style={{ left: '125px' }}>
                      <span className="badge badge-red">-{discountPercent}% OFF</span>
                    </div>
                  )}

                  <div className="product-card-img-box">
                    <img src={deal.image} alt={deal.name} className="product-card-img" />
                  </div>

                  <div className="product-card-content" style={{ padding: '24px' }}>
                    <h3 className="product-card-title">{deal.name}</h3>
                    <p className="product-card-desc" style={{ height: 'auto', marginBottom: '24px' }}>
                      {deal.description}
                    </p>

                    <div className="product-card-footer" style={{ borderTop: '1px solid #FFECEC' }}>
                      <div className="product-card-price-box">
                        <span className="product-card-price-label" style={{ color: 'var(--secondary-red)' }}>Discount Price</span>
                        <div className="product-card-prices">
                          <span className="product-card-price" style={{ color: 'var(--secondary-red)' }}>Rs.{deal.price}</span>
                          {deal.oldPrice && <span className="product-card-old-price">Rs.{deal.oldPrice}</span>}
                        </div>
                      </div>

                      <button
                        className="product-card-btn"
                        style={{ backgroundColor: 'var(--secondary-red)', boxShadow: '0 4px 10px rgba(217, 33, 33, 0.2)' }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedItem(deal);
                        }}
                      >
                        <span>Select</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Food Customize Modal */}
      <ProductModal item={selectedItem} onClose={() => setSelectedItem(null)} />

      {/* Grid Responsiveness override */}
      <style>{`
        @media (max-width: 992px) {
          .deals-page-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 576px) {
          .deals-page-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
