import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Award,
  ShieldCheck,
  Clock,
  ChevronDown,
  ShoppingBag,
  Target,
  Sparkles
} from 'lucide-react';
import { WhatsAppIcon } from '../components/Navbar';
import '../styles/Pages.css';

interface FAQItem {
  q: string;
  a: string;
}

export const About: React.FC = () => {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const stats = [
    { num: '50+', label: 'Menu Items', icon: '🍕' },
    { num: '10+', label: 'Special Deals', icon: '🔥' },
    { num: '99%', label: 'Happy Customers', icon: '⭐' },
    { num: '20 Min', label: 'Avg Delivery Time', icon: '🚚' }
  ];

  const faqs: FAQItem[] = [
    {
      q: 'How do I place an order online?',
      a: 'Browse our menu, customize your pizza size and add toppings, and click "Add to Cart". Once ready, go to the checkout page, fill in your delivery details, and click "Place Order". This will instantly prepare your order summary and open it directly inside WhatsApp, where you can send the message to confirm.'
    },
    {
      q: 'Do you offer home delivery in Bhera?',
      a: 'Yes! We offer home delivery across Bhera city. We charge a flat delivery fee of Rs. 150. All orders are sent out in thermal-insulated bags so they arrive fresh and piping hot.'
    },
    {
      q: 'Can I order for takeaway or dine-in?',
      a: 'Yes, both Takeaway and Dine-in services are available. You can place your order online and write "Takeaway" or "Dine-in Reservation" in the special instructions box on checkout, or call us directly to reserve.'
    },
    {
      q: 'What are your opening hours?',
      a: 'We are open daily from 10:00 AM in the morning until 02:00 AM midnight. Delivery riders are active throughout our operational hours.'
    },
    {
      q: 'What payment methods do you accept?',
      a: 'For this version, we accept Cash on Delivery (COD). When our delivery rider arrives with your hot food, you can pay them in cash. We are planning to support JazzCash, Easypaisa, and Card payments in our next update.'
    },
    {
      q: 'Can I customize my pizza toppings?',
      a: 'Absolutely! When you click on any pizza item on our menu, a detailed customization modal opens. You can select your preferred pizza size (Small, Medium, Large, XL) and choose extra cheese, chicken chunks, mushrooms, olives, or jalapeños.'
    }
  ];

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <div>
      {/* Hero Banner */}
      <section className="page-banner" style={{
        backgroundImage: 'linear-gradient(rgba(11, 11, 12, 0.8), rgba(11, 11, 12, 0.85)), url("https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=1200&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '140px 0 60px 0'
      }}>
        <div className="page-banner-glow"></div>
        <div className="container">
          <h1 className="page-title">About Our Restaurant</h1>
          <p className="page-subtitle" style={{ color: '#D1D5DB' }}>
            Fresh ingredients, authentic family recipes, excellent customer service, and unforgettable taste since day one.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div className="about-grid">
            {/* Story Image */}
            <div className="about-img-box">
              <img
                src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=600&q=80"
                alt="Oven Bake Pizza kitchen baking fresh pizzas"
                style={{ width: '100%', height: '480px', objectFit: 'cover' }}
              />
              <div className="about-img-badge">
                <h3>100%</h3>
                <span>Hygienic Kitchen</span>
              </div>
            </div>

            {/* Story Text */}
            <div className="about-text">
              <span className="section-tag" style={{ textAlign: 'left' }}>Our Legacy</span>
              <h3>The Oven Bake Taste Story</h3>
              <p>
                Founded with a deep passion for hot, delicious, and premium quality fast food, Oven Bake Pizza Bhera has quickly become the favorite dining destination for pizza lovers in the region. We set out to prove that local restaurant experiences can match premium international standards.
              </p>
              <p>
                Our secrets are simple: we never compromise on quality. Our cheese is pure mozzarella, our meats are sourced fresh daily, and our signature red sauces are blended using custom secret spice recipes. We knead our dough by hand every single day so every crust is soft, airy, and has that perfect golden crunch.
              </p>
              <p>
                Whether you dine-in with your family in our clean, air-conditioned dining area, grab a quick takeaway, or order home delivery, you will experience the same warm hospitality and great taste.
              </p>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="mission-vision-box">
            <div className="mv-card">
              <div className="mv-card-icon">
                <Target size={28} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To serve outstanding, freshly prepared food using the highest quality ingredients, providing exceptional customer service in a welcoming, clean, and family-friendly environment.
              </p>
            </div>

            <div className="mv-card">
              <div className="mv-card-icon">
                <Sparkles size={28} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To become the most trusted and celebrated culinary brand in the region, recognized for our commitment to absolute hygiene, continuous menu innovation, and community satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Strip */}
      <section className="stats-strip">
        <div className="container stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-icon">{stat.icon}</div>
              <h3 className="stat-number">{stat.num}</h3>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Detailed */}
      <section className="section" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Features</span>
            <h2 className="section-title">Our Operational Standards</h2>
            <p className="section-description">How we maintain top-tier taste and service standards every single day.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }} className="why-choose-grid">
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: 'var(--primary-orange-light)', color: 'var(--primary-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Award size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Expert Kitchen Team</h3>
                <p style={{ fontSize: '13px', color: 'var(--text-gray)', lineHeight: '1.5' }}>Our chefs are highly experienced in fast food preparation, focusing on flavor consistency and presentation.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: 'var(--primary-orange-light)', color: 'var(--primary-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ShieldCheck size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Clean Environment</h3>
                <p style={{ fontSize: '13px', color: 'var(--text-gray)', lineHeight: '1.5' }}>We maintain clean dining halls and sanitised workstations to ensure a safe dining experience for families.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: 'var(--primary-orange-light)', color: 'var(--primary-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Clock size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Efficient Service</h3>
                <p style={{ fontSize: '13px', color: 'var(--text-gray)', lineHeight: '1.5' }}>Whether dining in or ordering from home, we respect your time and serve orders with minimal waiting times.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section" style={{ backgroundColor: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Got Questions?</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-description">Read answers to the most common queries our customers have about order dispatch, payments, and delivery.</p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`faq-item ${activeFaq === idx ? 'faq-item-active' : ''}`}
              >
                <button className="faq-question-box" onClick={() => toggleFaq(idx)}>
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

      {/* CTA Section */}
      <section className="section" style={{
        backgroundColor: '#0B0B0C',
        color: '#FFFFFF',
        textAlign: 'center',
        padding: '80px 0',
        borderTop: '1px solid var(--border-color-dark)'
      }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '16px', color: '#FFFFFF' }}>Try Our Delicious Menu Today!</h2>
          <p style={{ color: '#9CA3AF', fontSize: '15px', marginBottom: '32px' }}>Experience premium quality seekh kebab rolls, crispy zinger burgers, alfredo pasta, and hot cheese-loaded pizzas in Bhera.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/menu')} className="btn-primary">
              <ShoppingBag size={18} />
              <span>Order Online Now</span>
            </button>
            <a href="https://wa.me/923076120333" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <WhatsAppIcon size={20} />
              <span>Order via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
