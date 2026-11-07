import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal } from 'lucide-react';
import { type MenuItem, categories, menuItems } from '../data/menuData';
import { ProductCard } from '../components/ProductCard';
import { ProductModal } from '../components/ProductModal';
import '../styles/Pages.css';
import '../styles/Cards.css';

export const Menu: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const catParam = searchParams.get('cat') || 'all';

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(catParam);
  const [sortBy, setSortBy] = useState('popular');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  // Sync state with URL parameter if it changes (e.g. from footer click)
  useEffect(() => {
    setActiveCategory(catParam);
  }, [catParam]);

  // Handle category tab click
  const handleCategorySelect = (catId: string) => {
    setActiveCategory(catId);
    setSearchParams(catId === 'all' ? {} : { cat: catId });
    // Reset search query on category switch for cleaner experience
    setSearchQuery('');
  };

  // Filter and sort items
  const filteredItems = menuItems.filter((item) => {
    // Category match
    const categoryMatch =
      activeCategory === 'all' || item.category === activeCategory;

    // Search query match (search name, category, description)
    const searchQueryLower = searchQuery.toLowerCase();
    const searchMatch =
      searchQuery === '' ||
      item.name.toLowerCase().includes(searchQueryLower) ||
      item.description.toLowerCase().includes(searchQueryLower) ||
      item.category.toLowerCase().includes(searchQueryLower);

    return categoryMatch && searchMatch;
  });

  // Sort items
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === 'price-low') {
      return a.price - b.price;
    } else if (sortBy === 'price-high') {
      return b.price - a.price;
    } else if (sortBy === 'rating') {
      return (b.rating || 0) - (a.rating || 0);
    }
    // 'popular' or default (sort by rating desc first, then badge)
    return (b.rating || 0) - (a.rating || 0);
  });

  const handleResetFilters = () => {
    setSearchQuery('');
    handleCategorySelect('all');
    setSortBy('popular');
  };

  return (
    <div>
      {/* Hero Banner */}
      <section className="page-banner" style={{
        backgroundImage: 'linear-gradient(rgba(11, 11, 12, 0.8), rgba(11, 11, 12, 0.85)), url("https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '140px 0 60px 0'
      }}>
        <div className="page-banner-glow"></div>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <h1 className="page-title">Our Delicious Menu</h1>
          <p className="page-subtitle" style={{ color: '#D1D5DB' }}>
            Freshly prepared with premium quality local ingredients, baked to absolute perfection, served hot and full of flavor.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar Section */}
      <section style={{ backgroundColor: 'var(--bg-light)', borderBottom: '1px solid var(--border-color)', padding: '30px 0' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Search Input and Sort Dropdown */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 250px', gap: '20px' }} className="search-sort-row">
            {/* Search */}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Search size={18} style={{ position: 'absolute', left: '16px', color: 'var(--text-muted)' }} />
              <input
                type="text"
                placeholder="Search pizza, burger, pasta, deal..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ paddingLeft: '48px' }}
                className="form-input"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{ position: 'absolute', right: '16px', color: 'var(--text-muted)', fontSize: '13px', fontWeight: 600 }}
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort */}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <SlidersHorizontal size={18} style={{ position: 'absolute', left: '16px', color: 'var(--text-muted)', pointerEvents: 'none' }} />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{ paddingLeft: '44px', cursor: 'pointer', appearance: 'none', backgroundImage: 'url("data:image/svg+xml;utf8,<svg fill=\'%234B5563\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/><path d=\'M0 0h24v24H0z\' fill=\'none\'/></svg>")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '18px' }}
                className="form-input"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div>
            <div className="categories-container">
              <button
                onClick={() => handleCategorySelect('all')}
                className={`category-tab ${activeCategory === 'all' ? 'category-tab-active' : ''}`}
              >
                🍽️ All Items
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat.id)}
                  className={`category-tab ${activeCategory === cat.id ? 'category-tab-active' : ''}`}
                >
                  <span style={{ fontSize: '15px' }}>{cat.icon}</span>
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Main Menu Grid Section */}
      <section className="section" style={{ minHeight: '400px' }}>
        <div className="container">
          
          {/* Results Summary */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', color: 'var(--text-gray)', fontSize: '14px' }}>
            <span>Showing <strong>{sortedItems.length}</strong> items</span>
            {(searchQuery || activeCategory !== 'all') && (
              <button onClick={handleResetFilters} style={{ color: 'var(--primary-orange)', fontWeight: 600 }}>
                Reset Filters
              </button>
            )}
          </div>

          {/* Empty search matches */}
          {sortedItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 24px', backgroundColor: 'var(--bg-light)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', maxWidth: '600px', margin: '0 auto' }}>
              <div style={{ fontSize: '60px', marginBottom: '20px' }}>🍕</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>No matching food found</h3>
              <p style={{ color: 'var(--text-gray)', fontSize: '14px', marginBottom: '24px' }}>
                We couldn't find any items matching your search query or selected category.
              </p>
              <button onClick={handleResetFilters} className="btn-primary">
                Back to Menu
              </button>
            </div>
          ) : (
            /* Cards Grid */
            <div className="products-grid">
              {sortedItems.map((item) => (
                <ProductCard key={item.id} item={item} onSelect={setSelectedItem} />
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Food Customize Modal */}
      <ProductModal item={selectedItem} onClose={() => setSelectedItem(null)} />

      {/* CSS Overrides */}
      <style>{`
        @media (max-width: 768px) {
          .search-sort-row {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </div>
  );
};
