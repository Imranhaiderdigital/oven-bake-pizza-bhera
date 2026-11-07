import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import '../styles/Navbar.css';

export const WhatsAppIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="currentColor"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.989 3.3 1.472 5.358 1.473 5.373 0 9.749-4.373 9.752-9.75.002-2.605-1.013-5.054-2.86-6.903C17.007 2.128 14.54 1.11 12.007 1.11c-5.378 0-9.754 4.374-9.757 9.751-.001 2.094.547 4.11 1.588 5.867L2.83 21.13l4.57-1.196L7.4 20.3a9.684 9.684 0 0 0 4.6 1.173h.001zm10.741-6.936c-.29-.145-1.713-.846-1.979-.942-.266-.097-.459-.145-.653.145-.193.29-.748.942-.917 1.134-.169.193-.338.217-.627.072-2.715-1.36-3.876-2.525-4.877-4.249-.267-.461.267-.428.763-1.42.085-.17.042-.319-.021-.464-.063-.145-.653-1.573-.895-2.152-.236-.569-.475-.492-.653-.501-.17-.008-.363-.009-.556-.009-.193 0-.507.072-.773.362-.266.29-1.014.99-1.014 2.414s1.038 2.799 1.183 2.992c.145.193 2.043 3.12 4.949 4.373.691.298 1.231.476 1.652.61.693.22 1.325.19 1.824.115.556-.084 1.713-.7 1.954-1.376.241-.676.241-1.255.169-1.376-.072-.12-.266-.193-.556-.338z" />
  </svg>
);

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItemsCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '';

  // Watch scroll to toggle classes
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Close mobile drawer when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <nav className={`navbar-wrapper ${isScrolled || !isHomePage ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Logo */}
          <Link to="/" className="logo-link">
            <img src="./pizza_logo.jpg" alt="Oven Bake Pizza Logo" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
            <span className="logo-text">
              OVEN BAKE<span className="logo-highlight"> PIZZA</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="nav-menu">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/deals" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                Deals
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Action Buttons */}
          <div className="nav-actions">
            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="cart-icon-btn"
              aria-label="Open Shopping Cart"
            >
              <ShoppingCart size={22} />
              {totalItemsCount > 0 && <span className="cart-count">{totalItemsCount}</span>}
            </button>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/923076120333"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp btn-nav-whatsapp desktop-whatsapp-btn"
            >
              <WhatsAppIcon size={18} />
              <span>Order Now</span>
            </a>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="mobile-toggle"
              aria-label="Open Navigation Menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
        <div className="mobile-menu-drawer" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-drawer-header">
            <Link to="/" className="logo-link" onClick={() => setIsMenuOpen(false)}>
              <img src="./pizza_logo.jpg" alt="Oven Bake Pizza Logo" style={{ width: '36px', height: '36px', borderRadius: '50%' }} />
              <span className="logo-text" style={{ fontSize: '20px' }}>
                OVEN BAKE<span className="logo-highlight"> PIZZA</span>
              </span>
            </Link>
            <button onClick={() => setIsMenuOpen(false)} className="close-drawer-btn" aria-label="Close Menu">
              <X size={24} />
            </button>
          </div>

          <ul className="mobile-nav-menu">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'mobile-nav-link active' : 'mobile-nav-link')}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className={({ isActive }) => (isActive ? 'mobile-nav-link active' : 'mobile-nav-link')}
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/deals"
                className={({ isActive }) => (isActive ? 'mobile-nav-link active' : 'mobile-nav-link')}
                onClick={() => setIsMenuOpen(false)}
              >
                Deals
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'mobile-nav-link active' : 'mobile-nav-link')}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) => (isActive ? 'mobile-nav-link active' : 'mobile-nav-link')}
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? 'mobile-nav-link active' : 'mobile-nav-link')}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="mobile-drawer-actions">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setIsCartOpen(true);
              }}
              className="btn-secondary"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%' }}
            >
              <ShoppingCart size={20} />
              <span>Cart ({totalItemsCount})</span>
            </button>
            <a
              href="https://wa.me/923076120333"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <WhatsAppIcon size={20} />
              <span>Order via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
