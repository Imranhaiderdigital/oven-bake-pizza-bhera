import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#0B0B0C', borderTop: '1px solid #2A2C33', padding: '80px 0 30px 0', color: '#9CA3AF' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr 0.8fr 1.2fr', gap: '40px', marginBottom: '60px' }}>
        
        {/* Brand Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src="./pizza_logo.jpg" alt="Oven Bake Pizza Logo" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '22px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.5px' }}>
              OVEN BAKE<span style={{ color: '#FF6B00' }}> PIZZA</span>
            </span>
          </Link>
          <p style={{ fontSize: '14px', lineHeight: '1.6' }}>
            Freshly prepared premium pizzas, burgers, rolls, and pasta. Experience international standard taste and warm local hospitality in Bhera.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            {/* Social Link Placeholders */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ width: 36, height: 36, borderRadius: '50%', backgroundColor: '#1A1A1D', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', transition: 'all 0.3s' }} className="social-icon-hover">
              FB
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ width: 36, height: 36, borderRadius: '50%', backgroundColor: '#1A1A1D', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', transition: 'all 0.3s' }} className="social-icon-hover">
              IG
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" style={{ width: 36, height: 36, borderRadius: '50%', backgroundColor: '#1A1A1D', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', transition: 'all 0.3s' }} className="social-icon-hover">
              WA
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontFamily: 'Outfit, sans-serif', color: '#FFFFFF', fontSize: '16px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px' }}>
            Quick Links
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/menu" className="footer-link">Our Menu</Link></li>
            <li><Link to="/deals" className="footer-link">Pizza Deals</Link></li>
            <li><Link to="/about" className="footer-link">About Us</Link></li>
            <li><Link to="/gallery" className="footer-link">Photo Gallery</Link></li>
            <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 style={{ fontFamily: 'Outfit, sans-serif', color: '#FFFFFF', fontSize: '16px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px' }}>
            Menu Categories
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
            <li><Link to="/menu?cat=pizza" className="footer-link">Premium Pizzas</Link></li>
            <li><Link to="/menu?cat=deals" className="footer-link">Hot Deals</Link></li>
            <li><Link to="/menu?cat=burgers" className="footer-link">Zinger Burgers</Link></li>
            <li><Link to="/menu?cat=pasta" className="footer-link">Alfredo Pasta</Link></li>
            <li><Link to="/menu?cat=rolls" className="footer-link">Paratha Rolls</Link></li>
            <li><Link to="/menu?cat=appetizers" className="footer-link">Loaded Fries</Link></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 style={{ fontFamily: 'Outfit, sans-serif', color: '#FFFFFF', fontSize: '16px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px' }}>
            Contact Info
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <MapPin size={18} style={{ color: '#FF6B00', flexShrink: 0, marginTop: '2px' }} />
              <span>Govt A-I Model High School, Sargodha Road, Bhera, Pakistan</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Phone size={18} style={{ color: '#FF6B00', flexShrink: 0 }} />
              <a href="tel:0307-6120333" className="footer-link">0307-6120333</a>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Clock size={18} style={{ color: '#FF6B00', flexShrink: 0 }} />
              <span>Daily: 10:00 AM – 02:00 AM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="container" style={{ borderTop: '1px solid #1A1A1D', paddingTop: '30px', display: 'flex', justifyContent: 'between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', fontSize: '13px' }}>
        <p>© {currentYear} Oven Bake Pizza Bhera. All rights reserved.</p>
        <p style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          Designed with <Heart size={12} fill="#D92121" color="#D92121" /> for Oven Bake Pizza Bhera
        </p>
      </div>

      {/* Injecting CSS styles since vanilla CSS is imported globally but inline pseudo classes aren't supported directly */}
      <style>{`
        .footer-link {
          transition: all 0.2s ease;
          color: #9CA3AF;
        }
        .footer-link:hover {
          color: #FF6B00 !important;
          padding-left: 4px;
        }
        .social-icon-hover:hover {
          background-color: #FF6B00 !important;
          transform: translateY(-3px);
        }
        @media (max-width: 992px) {
          footer .container:first-of-type {
            grid-template-columns: 1.5fr 1fr !important;
            gap: 30px !important;
          }
        }
        @media (max-width: 576px) {
          footer .container:first-of-type {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          footer .container:last-of-type {
            flex-direction: column;
            text-align: center;
            justify-content: center !important;
          }
        }
      `}</style>
    </footer>
  );
};
