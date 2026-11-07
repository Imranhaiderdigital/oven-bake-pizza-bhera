import React, { useState } from 'react';
import { Phone, MapPin, Clock, Truck, ChevronDown, Compass } from 'lucide-react';
import { WhatsAppIcon } from '../components/Navbar';
import '../styles/Pages.css';

interface FAQ {
  q: string;
  a: string;
}

export const Contact: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const contactFaqs: FAQ[] = [
    {
      q: 'How do I place an order?',
      a: 'Browse our menu, add your favorite items to the shopping cart, complete the checkout details, and place your order. It will compile your cart details and open WhatsApp automatically pre-filled, so you can send the message to confirm.'
    },
    {
      q: 'Do you offer home delivery in Bhera?',
      a: 'Yes, delivery is available in selected areas across Bhera. We charge a flat delivery fee of Rs. 150. All items are dispatched hot in thermal-insulated carrier bags.'
    },
    {
      q: 'Can I order for takeaway or dine-in?',
      a: 'Yes, takeaway and dine-in options are fully supported. Simply add your instructions to the checkout order notes or call us directly to book a table.'
    },
    {
      q: 'What are your operational opening hours?',
      a: 'We are open daily from 10:00 AM in the morning to 02:00 AM midnight. Delivery riders are active throughout this time.'
    }
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section className="page-banner" style={{
        backgroundImage: 'linear-gradient(rgba(11, 11, 12, 0.8), rgba(11, 11, 12, 0.85)), url("https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '140px 0 60px 0'
      }}>
        <div className="page-banner-glow"></div>
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle" style={{ color: '#D1D5DB' }}>
            We'd love to hear from you. Get in touch for orders, dine-in reservations, feedback, or general inquiries.
          </p>
        </div>
      </section>

      {/* Main Info Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div className="contact-grid">
            
            {/* Left Side: Contact Cards */}
            <div className="contact-info-cards">
              
              {/* Phone */}
              <div className="contact-info-card">
                <div className="contact-info-icon-box">
                  <Phone size={22} />
                </div>
                <div className="contact-info-text-box">
                  <h4>Phone Numbers</h4>
                  <p style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-charcoal)', marginBottom: '4px' }}>
                    <a href="tel:0307-6120333" className="footer-link" style={{ color: 'var(--text-charcoal)' }}>0307-6120333</a>
                  </p>
                  <p>Call us directly to place orders or make reservations.</p>
                </div>
              </div>

              {/* Address */}
              <div className="contact-info-card">
                <div className="contact-info-icon-box">
                  <MapPin size={22} />
                </div>
                <div className="contact-info-text-box">
                  <h4>Restaurant Address</h4>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-charcoal)', marginBottom: '4px' }}>
                    Govt A-I Model High School, Sargodha Road, Bhera, Pakistan
                  </p>
                  <p>Located on the main Sargodha Road close to high school.</p>
                </div>
              </div>

              {/* Hours */}
              <div className="contact-info-card">
                <div className="contact-info-icon-box">
                  <Clock size={22} />
                </div>
                <div className="contact-info-text-box">
                  <h4>Opening Hours</h4>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-charcoal)', marginBottom: '4px' }}>
                    Daily: 10:00 AM – 02:00 AM
                  </p>
                  <p>Open for lunch, dinner, and late-night cravings.</p>
                </div>
              </div>

              {/* Services */}
              <div className="contact-info-card">
                <div className="contact-info-icon-box">
                  <Truck size={22} />
                </div>
                <div className="contact-info-text-box">
                  <h4>Our Services Available</h4>
                  <p style={{ display: 'flex', gap: '16px', fontSize: '13px', fontWeight: 700, color: 'var(--primary-orange)', textTransform: 'uppercase', marginTop: '4px' }}>
                    <span>✔ Dine-In</span>
                    <span>✔ Takeaway</span>
                    <span>✔ Delivery</span>
                  </p>
                </div>
              </div>

            </div>

            {/* Right Side: Map & Actions */}
            <div className="contact-map-box">
              <iframe
                title="Oven Bake Pizza Bhera Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3368.591030044538!2d72.9090333!3d32.4831611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3921090555555555%3A0x6faaf93fc5914ca6!2sBhera%2C%20Punjab!5e0!3m2!1sen!2spk!4v1689252000000!5m2!1sen!2spk"
                className="contact-map-iframe"
                height="380"
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
                  <Compass size={16} />
                  <span>Get Directions</span>
                </a>
                <a
                  href="https://wa.me/923076120333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                >
                  <WhatsAppIcon size={18} />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Ordering Help</span>
            <h2 className="section-title">Ordering FAQs</h2>
            <p className="section-description">Quick guide to ordering food from Oven Bake Pizza Bhera.</p>
          </div>

          <div className="faq-list">
            {contactFaqs.map((faq, idx) => (
              <div
                key={idx}
                className={`faq-item ${activeFaq === idx ? 'faq-item-active' : ''}`}
              >
                <button className="faq-question-box" onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}>
                  <span className="faq-question">{faq.q}</span>
                  <ChevronDown size={18} className="faq-icon" />
                </button>
                <div className="faq-answer-box">
                  <div className="faq-answer">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
