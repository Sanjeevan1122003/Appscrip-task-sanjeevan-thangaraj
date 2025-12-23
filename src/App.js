import React, { useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Filters from './components/Filters';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import SortDropdown from './components/ShortDropdown';

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [hideFilter, setHideFilter] = useState(true)
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: [0, 1000],
    sizes: [],
    colors: [],
    sortBy: 'featured'
  });


  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters, products, applyFilters]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();

      // Enhance product data with additional properties needed for our PLP
      const enhancedProducts = data.map(product => ({
        ...product,
        sizes: ['S', 'M', 'L', 'XL'][Math.floor(Math.random() * 4)],
        color: ['Red', 'Blue', 'Black', 'White', 'Green'][Math.floor(Math.random() * 5)],
        rating: (Math.random() * 2 + 3).toFixed(1),
        reviews: Math.floor(Math.random() * 100),
        discount: Math.random() > 0.7 ? Math.floor(Math.random() * 40) + 10 : 0
      }));

      setProducts(enhancedProducts);
      setFilteredProducts(enhancedProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let result = [...products];

    // Category filter
    if (filters.category !== 'all') {
      result = result.filter(product =>
        product.category.toLowerCase().includes(filters.category.toLowerCase())
      );
    }

    setFilteredProducts(result);
  };

  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const handleShowFilters = () => {
    setHideFilter(prev => !prev);
    console.log(hideFilter)
  };

  return (
    <div className="App">
      <Header />
      <main className="main-container">
        <div className="page-header">
          <div className='mobile-content'>
            <div className='mobile-content-home'>
              <p style={{ fontSize: '12px' }}>HOME</p>
            </div>
            <div className='mobile-content-shop'>
              <p style={{ fontSize: '12px' }}>SHOP</p>
            </div>
          </div>
          <h1>Discover our products</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
        </div>

        <div className="content-wrapper">
          <div className="products-header desktop-only">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "300px" }}>
              <h2>{filteredProducts.length} ITEMS</h2>
              <div onClick={handleShowFilters} ><svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.23167 0.499998L0.885 4.84666C0.371667 5.36 0.371667 6.2 0.885 6.71333L5.23167 11.06" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>{' '}
                {hideFilter ? <span style={{ fontFamily: `"Times New Roman", Times, serif`, color: "#888792", fontSize: "16px", textDecoration: "underline" }}>Hide filters</span> : <span style={{ fontFamily: `"Times New Roman", Times, serif`, color: "#888792", fontSize: "16px", textDecoration: "underline" }}>Show filters</span>}
              </div>
            </div>
            <SortDropdown
              filters={filters}
              updateFilters={updateFilters}
            />
          </div>
          <div className="mobile-toolbar">
            <button onClick={() => setMobileOpen(true)}>FILTER</button>
            <div className="divider" />
            <SortDropdown
              filters={filters}
              updateFilters={updateFilters}
            />
          </div>
          <div className="products-section">
            <div className="filters-section">
              {hideFilter && (
                <Filters
                  filters={filters}
                  updateFilters={updateFilters}
                  productCount={filteredProducts.length}
                  isMobileOpen={isMobileOpen}
                  setMobileOpen={setMobileOpen}
                />
              )}
            </div>

            <div>
              {loading ? (
                <div className="loading">Loading products...</div>
              ) : (
                <ProductGrid
                  products={filteredProducts}
                  hideFilter={hideFilter}
                />
              )}

              {!loading && filteredProducts.length === 0 && (
                <div className="no-results">
                  <p>No products found matching your filters.</p>
                  <button
                    className="clear-filters-btn"
                    onClick={() =>
                      setFilters({
                        category: "all",
                        priceRange: [0, 1000],
                        sizes: [],
                        colors: [],
                        sortBy: "featured",
                      })
                    }
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main >
      <Footer />
    </div >
  );
}

export default App;
