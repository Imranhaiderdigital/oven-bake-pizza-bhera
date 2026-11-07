import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Pizza,
  Clock,
  Truck,
  ThumbsUp,
  Award,
  ShieldCheck,
  ShoppingBag,
  ArrowRight,
  Phone,
  MapPin,
  UtensilsCrossed
} from 'lucide-react';
import { menuItems, reviews, type MenuItem } from '../data/menuData';
import { ProductCard } from '../components/ProductCard';
import { ReviewCard } from '../components/ReviewCard';
import { ProductModal } from '../components/ProductModal';
import { WhatsAppIcon } from '../components/Navbar';
import '../styles/Hero.css';
import '../styles/Cards.css';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  // Get best selling items (badge === 'Best Seller')
  const bestSellers = menuItems
    .filter((item) => item.badge === 'Best Seller')
    .slice(0, 4);

  // Get today's deals
  const deals = menuItems.filter((item) => item.category === 'deals').slice(0, 3);

  // Quick menu preview (a few popular items)
  const previewItems = menuItems
    .filter((item) => item.badge === 'Chef\'s Choice' || item.badge === 'Hot')
    .slice(0, 4);

  // Gallery images preview (Unsplash professional URLs)
  const galleryPreviews = [
    { url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80', tag: 'Pizza', title: 'Chicken Tikka' },
    { url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80', tag: 'Burger', title: 'Zinger Deluxe' },
    { url: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=400&q=80', tag: 'Pasta', title: 'Alfredo Fettuccine' },
    { url: 'https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&w=400&q=80', tag: 'Roll', title: 'Seekh Kabab Roll' },
    { url: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80', tag: 'Appetizer', title: 'Loaded Fries' },
    { url: 'https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?auto=format&fit=crop&w=400&q=80', tag: 'Sandwich', title: 'Club Sandwich' }
  ];

  return (
    <div>
      {/* 1. HERO SECTION */}
      <header className="hero-section">
        <div className="hero-glow"></div>
        <div className="container hero-container">
          {/* Left Side Info */}
          <div className="hero-content">
            <div className="hero-badge-container">
              <span className="hero-badge">🍕 Oven Bake Pizza Bhera</span>
            </div>
            <h1 className="hero-title">
              Fresh Pizza,<br />
              Great Taste,<br />
              <span className="hero-title-highlight">Delivered Hot!</span>
            </h1>
            <p className="hero-description">
              Enjoy delicious pizzas, crispy zinger burgers, club sandwiches, creamy alfredo pasta, and more—freshly prepared with premium quality ingredients at Oven Bake Pizza Bhera.
            </p>
            <div className="hero-actions">
              <button onClick={() => navigate('/menu')} className="btn-primary">
                <ShoppingBag size={18} />
                <span>Order Now</span>
              </button>
              <button onClick={() => navigate('/menu')} className="btn-secondary" style={{ color: '#FFFFFF', borderColor: '#333333' }}>
                <span>View Menu</span>
              </button>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="hero-image-container">
            <div className="hero-deco-1"></div>
            <img
              src="./pizza_hero.png"
              alt="Premium Oven Bake Pizza Bhera Special"
              className="hero-main-img"
            />
            <div className="hero-deco-2">🍕</div>
          </div>
        </div>
      </header>

      {/* 2. QUICK INFORMATION STRIP */}
      <section className="info-strip">
        <div className="container info-strip-grid">
          <div className="info-card">
            <div className="info-icon-box">
              <Award size={20} />
            </div>
            <div className="info-text-box">
              <h4>Fresh Ingredients</h4>
              <p>Prepared daily with selected fresh toppings</p>
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon-box">
              <Clock size={20} />
            </div>
            <div className="info-text-box">
              <h4>Open Daily</h4>
              <p>10:00 AM – 2:00 AM Midnight service</p>
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon-box">
              <Truck size={20} />
            </div>
            <div className="info-text-box">
              <h4>Fast Delivery</h4>
              <p>Delivered hot at your doorstep in Bhera</p>
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon-box">
              <ThumbsUp size={20} />
            </div>
            <div className="info-text-box">
              <h4>100% Satisfaction</h4>
              <p>Top rated local taste and hygienic food</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="section" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Quality Standards</span>
            <h2 className="section-title">Why Choose Oven Bake Pizza?</h2>
            <p className="section-description">We serve Bhera with a commitment to absolute food safety, delicious secret recipes, and high-end services.</p>
          </div>

          <div className="why-choose-grid">
            <div style={{ padding: '30px', backgroundColor: 'var(--bg-soft)', borderRadius: 'var(--radius-lg)', textAlign: 'center', transition: 'var(--transition)' }} className="choose-card">
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--primary-orange-light)', color: 'var(--primary-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                <Pizza size={28} />
              </div>
              <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Fresh Ingredients</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-gray)', lineHeight: '1.5' }}>
                We use hand-kneaded fresh dough daily, premium local mozzarella cheese, and vegetables selected from local markets.
              </p>
            </div>

            <div style={{ padding: '30px', backgroundColor: 'var(--bg-soft)', borderRadius: 'var(--radius-lg)', textAlign: 'center', transition: 'var(--transition)' }} className="choose-card">
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--primary-orange-light)', color: 'var(--primary-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                <ShieldCheck size={28} />
              </div>
              <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Hygienic Kitchen</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-gray)', lineHeight: '1.5' }}>
                Our kitchen is strictly maintained. Cooking staff uses gloves, masks, and follows professional food safety guidelines.
              </p>
            </div>

            <div style={{ padding: '30px', backgroundColor: 'var(--bg-soft)', borderRadius: 'var(--radius-lg)', textAlign: 'center', transition: 'var(--transition)' }} className="choose-card">
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--primary-orange-light)', color: 'var(--primary-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                <Truck size={28} />
              </div>
              <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Fast Delivery</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-gray)', lineHeight: '1.5' }}>
                Our riders are equipped with insulated thermal bags to make sure your food remains hot and fresh when it arrives.
              </p>
            </div>

            <div style={{ padding: '30px', backgroundColor: 'var(--bg-soft)', borderRadius: 'var(--radius-lg)', textAlign: 'center', transition: 'var(--transition)' }} className="choose-card">
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--primary-orange-light)', color: 'var(--primary-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                <UtensilsCrossed size={28} />
              </div>
              <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Great Taste</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-gray)', lineHeight: '1.5' }}>
                A custom-developed menu loved by pizza lovers in Bhera. Signature tikka spices, creamy sauces, and crunchy batters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED CATEGORIES */}
      <section className="section" style={{ backgroundColor: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Explore Categories</span>
            <h2 className="section-title">Featured Menu Categories</h2>
            <p className="section-description">We serve a wide variety of meals, from fresh Italian pizzas to crispy American seekh burgers and wraps.</p>
          </div>

          <div className="home-categories-grid">
            {[
              { id: 'pizza', name: 'Pizza', icon: '🍕', desc: 'Fresh & Cheesy' },
              { id: 'burgers', name: 'Burgers', icon: '🍔', desc: 'Crispy Zingers' },
              { id: 'sandwiches', name: 'Sandwiches', icon: '🥪', desc: 'Toasted Clubs' },
              { id: 'pasta', name: 'Pasta', icon: '🍝', desc: 'Creamy Alfredo' },
              { id: 'rolls', name: 'Kabab Rolls', icon: '🌯', desc: 'Flaky Parathas' },
              { id: 'deals', name: 'Special Deals', icon: '🔥', desc: 'Big Combos' }
            ].map((cat) => (
              <div
                key={cat.id}
                onClick={() => navigate(`/menu?cat=${cat.id}`)}
                style={{
                  backgroundColor: 'var(--bg-light)',
                  border: '1px solid var(--border-color)',
                  padding: '24px 16px',
                  borderRadius: 'var(--radius-lg)',
                  textAlign: 'center',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'var(--transition)'
                }}
                className="home-category-card"
              >
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>{cat.icon}</div>
                <h3 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '4px' }}>{cat.name}</h3>
                <span style={{ fontSize: '11px', color: 'var(--text-gray)' }}>{cat.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TODAY'S SPECIAL DEALS */}
      <section className="section" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ color: 'var(--secondary-red)' }}>Save Big</span>
            <h2 className="section-title">Today's Special Deals</h2>
            <p className="section-description">Delicious combos compiled specifically to give you the best value for your money. Grab these limited time offers!</p>
          </div>

          <div className="home-deals-grid">
            {deals.map((deal) => (
              <div key={deal.id} className="product-card" onClick={() => setSelectedItem(deal)} style={{ borderColor: 'rgba(217, 33, 33, 0.1)' }}>
                <div className="product-card-badge">
                  <span className="badge badge-red">Deals</span>
                </div>
                <div className="product-card-img-box">
                  <img src={deal.image} alt={deal.name} className="product-card-img" />
                </div>
                <div className="product-card-content" style={{ padding: '20px' }}>
                  <h3 className="product-card-title">{deal.name}</h3>
                  <p className="product-card-desc">{deal.description}</p>
                  <div className="product-card-footer" style={{ borderTop: '1px solid #FFECEC' }}>
                    <div className="product-card-price-box">
                      <span className="product-card-price-label" style={{ color: 'var(--secondary-red)' }}>Special Deal</span>
                      <div className="product-card-prices">
                        <span className="product-card-price" style={{ color: 'var(--secondary-red)' }}>Rs.{deal.price}</span>
                        {deal.oldPrice && <span className="product-card-old-price">Rs.{deal.oldPrice}</span>}
                      </div>
                    </div>
                    <button
                      className="product-card-btn"
                      style={{ backgroundColor: 'var(--secondary-red)' }}
                      onClick={(e) => { e.stopPropagation(); setSelectedItem(deal); }}
                    >
                      <span>Select</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/deals" className="btn-outline" style={{ borderColor: 'var(--secondary-red)', color: 'var(--secondary-red)' }}>
              <span>View All Pizza Deals</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. BEST SELLING ITEMS */}
      <section className="section" style={{ backgroundColor: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Most Popular</span>
            <h2 className="section-title">Best Selling Items</h2>
            <p className="section-description">Our customer favourites, prepared fresh with our signature secret spice blends and premium toppings.</p>
          </div>

          <div className="products-grid">
            {bestSellers.map((item) => (
              <ProductCard key={item.id} item={item} onSelect={setSelectedItem} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. COMPLETE MENU PREVIEW */}
      <section className="section" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Quick Taste</span>
            <h2 className="section-title">Chef's Choice Selection</h2>
            <p className="section-description">A quick taste of our chef's special items. Browse the full menu to customize and see all categories.</p>
          </div>

          <div className="products-grid">
            {previewItems.map((item) => (
              <ProductCard key={item.id} item={item} onSelect={setSelectedItem} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <button onClick={() => navigate('/menu')} className="btn-primary">
              <span>View Complete Menu</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 8. ORDER PROCESS */}
      <section className="section" style={{ backgroundColor: '#0B0B0C', color: '#FFFFFF', borderTop: '1px solid var(--border-color-dark)', borderBottom: '1px solid var(--border-color-dark)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Easy Ordering</span>
            <h2 className="section-title" style={{ color: '#FFFFFF' }}>How to Place an Order?</h2>
            <p className="section-description" style={{ color: '#9CA3AF' }}>Get your food delivered to your doorstep in four simple steps.</p>
          </div>

          <div className="order-steps-grid">
            {[
              { step: '01', title: 'Browse Menu', desc: 'Browse our menu, select pizzas, burgers, pasta or deals.', icon: <Pizza size={24} /> },
              { step: '02', title: 'Add to Cart', desc: 'Choose sizes, add extra cheese or toppings, and check subtotal.', icon: <ShoppingBag size={24} /> },
              { step: '03', title: 'Delivery Info', desc: 'Enter your name, phone number, Mohalla/Street, and landmark.', icon: <MapPin size={24} /> },
              { step: '04', title: 'Open WhatsApp', desc: 'Place order to automatically compile and send details via WhatsApp.', icon: <WhatsAppIcon size={24} /> }
            ].map((item, idx) => (
              <div key={idx} style={{ position: 'relative', padding: '30px', backgroundColor: '#141418', border: '1px solid #222228', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                <span style={{ position: 'absolute', top: '15px', right: '20px', fontSize: '32px', fontWeight: 800, color: 'rgba(255,107,0,0.1)', fontFamily: 'Outfit, sans-serif' }}>
                  {item.step}
                </span>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(255,107,0,0.1)', color: 'var(--primary-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#FFFFFF', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ fontSize: '13px', color: '#9CA3AF', lineHeight: '1.5' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CUSTOMER REVIEWS */}
      <section className="section" style={{ backgroundColor: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Testimonials</span>
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-description">We take pride in our service. Hear from our loyal customers in Bhera city about their experience.</p>
          </div>

          <div className="home-reviews-grid">
            {reviews.map((rev, idx) => (
              <ReviewCard key={idx} review={rev} />
            ))}
          </div>
        </div>
      </section>

      {/* 10. GALLERY PREVIEW */}
      <section className="section" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Food Gallery</span>
            <h2 className="section-title">Take a Look at Our Dishes</h2>
            <p className="section-description">Crispy crusts, melted cheese, golden chicken patties, and fresh toppings. Our gallery tells the taste story.</p>
          </div>

          <div className="home-gallery-grid">
            {galleryPreviews.map((g, idx) => (
              <div key={idx} className="gallery-item" onClick={() => navigate('/gallery')}>
                <img src={g.url} alt={g.title} className="gallery-item-img" />
                <div className="gallery-overlay">
                  <div>
                    <span className="gallery-tag">{g.tag}</span>
                    <h4 className="gallery-title">{g.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/gallery" className="btn-secondary">
              <span>View Full Gallery</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 11. RESTAURANT INFORMATION & 12. GOOGLE MAP */}
      <section className="section" style={{ backgroundColor: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Find Us</span>
            <h2 className="section-title">Restaurant Location & Details</h2>
            <p className="section-description">Visit us with your friends and family or order from home. Here are our complete contact coordinates.</p>
          </div>

          <div className="contact-grid">
            {/* Info Cards */}
            <div className="contact-info-cards">
              <div className="contact-info-card">
                <div className="contact-info-icon-box">
                  <MapPin size={22} />
                </div>
                <div className="contact-info-text-box">
                  <h4>Restaurant Address</h4>
                  <p>Govt A-I Model High School, Sargodha Road, Bhera, Pakistan</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon-box">
                  <Phone size={22} />
                </div>
                <div className="contact-info-text-box">
                  <h4>Phone Numbers</h4>
                  <p>
                    <a href="tel:0307-6120333" style={{ fontWeight: 600, color: 'var(--text-charcoal)' }}>0307-6120333</a>
                    <br />
                    <span>Call now for delivery or dine-in reservations</span>
                  </p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon-box">
                  <Clock size={22} />
                </div>
                <div className="contact-info-text-box">
                  <h4>Opening Hours</h4>
                  <p>Daily: 10:00 AM – 02:00 AM<br />Dine-in, Takeaway, and Delivery available</p>
                </div>
              </div>
            </div>

            {/* Google Map Box */}
            <div className="contact-map-box">
              <iframe
                title="Oven Bake Pizza Bhera Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3368.591030044538!2d72.9090333!3d32.4831611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3921090555555555%3A0x6faaf93fc5914ca6!2sBhera%2C%20Punjab!5e0!3m2!1sen!2spk!4v1689252000000!5m2!1sen!2spk"
                className="contact-map-iframe"
                height="320"
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
              <div className="contact-map-actions">
                <a
                  href="https://maps.google.com/?q=Oven+Bake+Pizza+Bhera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                >
                  <MapPin size={16} />
                  <span>Get Directions</span>
                </a>
                <a
                  href="tel:0307-6120333"
                  className="btn-primary"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                >
                  <Phone size={16} />
                  <span>Call Restaurant</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. CALL TO ACTION */}
      <section className="section" style={{
        position: 'relative',
        background: 'linear-gradient(rgba(11, 11, 12, 0.85), rgba(11, 11, 12, 0.85)), url("https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=1200&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: '#FFFFFF',
        textAlign: 'center',
        padding: '100px 0'
      }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '40px', fontWeight: 800, color: '#FFFFFF', marginBottom: '20px', fontFamily: 'Outfit, sans-serif' }}>
            Hungry? Order Your Favorite Pizza Today!
          </h2>
          <p style={{ fontSize: '16px', color: '#D1D5DB', lineHeight: '1.6', marginBottom: '40px' }}>
            Browse our full menu of delicious, hot pizzas, crispy zinger burgers, paratha rolls, and pasta. Complete your checkout details and send it directly via WhatsApp.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/menu')} className="btn-primary" style={{ padding: '14px 32px' }}>
              <ShoppingBag size={18} />
              <span>Browse Full Menu</span>
            </button>
            <a
              href="https://wa.me/923076120333"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ padding: '14px 32px' }}
            >
              <WhatsAppIcon size={20} />
              <span>WhatsApp Order</span>
            </a>
          </div>
        </div>
      </section>

      {/* Food Detail Modal Popup */}
      <ProductModal item={selectedItem} onClose={() => setSelectedItem(null)} />

      {/* Styles for grid responsiveness on home */}
      <style>{`
        .why-choose-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }
        .home-categories-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 20px;
        }
        .home-deals-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        .order-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }
        .home-reviews-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .home-gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 992px) {
          .why-choose-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .home-categories-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }
          .home-deals-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .order-steps-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .home-reviews-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .home-gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }
        @media (max-width: 576px) {
          .why-choose-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .choose-card {
            padding: 20px !important;
          }
          .home-categories-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          .home-deals-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .order-steps-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .home-reviews-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .home-gallery-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .gallery-item {
            aspect-ratio: 1.4 !important;
          }
        }
      `}</style>
    </div>
  );
};
