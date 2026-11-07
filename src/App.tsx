import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartSlider } from './components/CartSlider';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Deals } from './pages/Deals';
import { About } from './pages/About';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { Checkout } from './pages/Checkout';
import { CartProvider } from './context/CartContext';
import './styles/index.css';

const App: React.FC = () => {
  return (
    <CartProvider>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Navigation Bar */}
        <Navbar />

        {/* Global Slide-in Shopping Cart drawer */}
        <CartSlider />

        {/* Main Content Area */}
        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
            {/* Fallback route - redirect to home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
