import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/Pages.css';

interface GalleryItem {
  id: number;
  url: string;
  tag: string;
  title: string;
}

export const Gallery: React.FC = () => {
  const [activeImgIdx, setActiveImgIdx] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
      tag: 'Signature Pizza',
      title: 'Chicken Tikka Pizza'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
      tag: 'Crispy Burger',
      title: 'Zinger Burger Deluxe'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80',
      tag: 'Premium Pasta',
      title: 'Alfredo Fettuccine Pasta'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?auto=format&fit=crop&w=800&q=80',
      tag: 'Toasted Sandwich',
      title: 'Chicken Club Sandwich'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&w=800&q=80',
      tag: 'Paratha Roll',
      title: 'seekh Kabab Paratha Roll'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
      tag: 'Appetizers',
      title: 'Cheese Loaded French Fries'
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80',
      tag: 'Shawarma Wrap',
      title: 'Chicken Shawarma Wrap'
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
      tag: 'Wings & Nuggets',
      title: 'Hickory Smoked BBQ Wings'
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80',
      tag: 'Dine-In Area',
      title: 'Family Dining Space'
    },
    {
      id: 10,
      url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      tag: 'Interior Design',
      title: 'Restaurant Warm Atmosphere'
    },
    {
      id: 11,
      url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
      tag: 'Kitchen Hygiene',
      title: 'Food Preparation & Baking'
    },
    {
      id: 12,
      url: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80',
      tag: 'Outdoor View',
      title: 'Main Entrance & Street View'
    }
  ];

  // Navigate lightbox using keyboard arrows and escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImgIdx === null) return;
      
      if (e.key === 'Escape') {
        setActiveImgIdx(null);
      } else if (e.key === 'ArrowRight') {
        setActiveImgIdx((prev) => (prev !== null ? (prev + 1) % galleryItems.length : null));
      } else if (e.key === 'ArrowLeft') {
        setActiveImgIdx((prev) =>
          prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : null
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeImgIdx, galleryItems.length]);

  // Lock background scrolling when lightbox is active
  useEffect(() => {
    if (activeImgIdx !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeImgIdx]);

  return (
    <div>
      {/* Hero Banner */}
      <section className="page-banner" style={{
        backgroundImage: 'linear-gradient(rgba(11, 11, 12, 0.8), rgba(11, 11, 12, 0.85)), url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '140px 0 60px 0'
      }}>
        <div className="page-banner-glow"></div>
        <div className="container">
          <h1 className="page-title">Our Photo Gallery</h1>
          <p className="page-subtitle" style={{ color: '#D1D5DB' }}>
            Take a look at our clean family environment, high hygienic kitchen cooking standards, and fresh mouth-watering menu items.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div className="gallery-grid">
            {galleryItems.map((item, idx) => (
              <div
                key={item.id}
                className="gallery-item"
                onClick={() => setActiveImgIdx(idx)}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="gallery-item-img"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <div>
                    <span className="gallery-tag">{item.tag}</span>
                    <h4 className="gallery-title">{item.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal Overlay */}
      {activeImgIdx !== null && (
        <div
          className={`lightbox-overlay ${activeImgIdx !== null ? 'active' : ''}`}
          onClick={() => setActiveImgIdx(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveImgIdx(null)}
            className="lightbox-close-btn"
            aria-label="Close photo preview"
          >
            <X size={32} />
          </button>

          {/* Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveImgIdx((prev) => (prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : null));
            }}
            className="lightbox-nav-btn lightbox-nav-left"
            aria-label="Previous photo"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Image */}
          <div className="lightbox-img-box" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryItems[activeImgIdx].url}
              alt={galleryItems[activeImgIdx].title}
              className="lightbox-img"
            />
            {/* Image Info Caption */}
            <div style={{
              marginTop: '16px',
              textAlign: 'center',
              fontFamily: 'Outfit, sans-serif',
              color: '#FFFFFF'
            }}>
              <span style={{ color: 'var(--primary-orange)', textTransform: 'uppercase', fontSize: '12px', fontWeight: 700, letterSpacing: '1px' }}>
                {galleryItems[activeImgIdx].tag}
              </span>
              <h4 style={{ fontSize: '18px', fontWeight: 600, marginTop: '4px', color: '#FFFFFF' }}>
                {galleryItems[activeImgIdx].title}
              </h4>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveImgIdx((prev) => (prev !== null ? (prev + 1) % galleryItems.length : null));
            }}
            className="lightbox-nav-btn lightbox-nav-right"
            aria-label="Next photo"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}

      {/* Responsive tweaks */}
      <style>{`
        @media (max-width: 992px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 16px !important;
          }
        }
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
