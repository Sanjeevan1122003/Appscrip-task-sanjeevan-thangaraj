import React, { useState } from 'react';
import './Filters.css';

const Filters = ({
  filters,
  updateFilters,
  productCount,
  isMobileOpen,
  setMobileOpen
}) => {

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (key) => {
    setOpenSection(openSection === key ? null : key);
  };

  const idealFor = ['All', 'Men', 'Women', 'Baby & Kids'];
  const occasion = ['All', 'Casual', 'Formal', 'Party', 'Sports'];
  const work = ['All', 'Office', 'Daily Wear', 'Ethnic'];
  const fabric = ['All', 'Cotton', 'Polyester', 'Wool', 'Silk'];
  const segment = ['All', 'Premium', 'Mid Range', 'Budget'];
  const suitableFor = ['All', 'Summer', 'Winter', 'All Season'];
  const rawMaterials = ['All', 'Natural', 'Synthetic', 'Blended'];
  const pattern = ['All', 'Solid', 'Printed', 'Striped', 'Checked'];

  const toggleCheckbox = (key, value) => {
    const current = filters[key] || [];
    const updated = current.includes(value)
      ? current.filter(v => v !== value)
      : [...current, value];

    updateFilters({ [key]: updated });
  };

  const clearAllFilters = () => {
    updateFilters({
      customizable: false,
      idealFor: [],
      occasion: [],
      work: [],
      fabric: [],
      segment: [],
      suitableFor: [],
      rawMaterials: [],
      pattern: [],
      sortBy: 'recommended'
    });
  };

  const upArrow = <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.499997 5.23L4.84666 0.884864C5.36 0.371712 6.2 0.371712 6.71333 0.884864L11.06 5.23" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /> </svg>

  const downArrow = <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.499998 0.500022L4.84666 4.84669C5.36 5.36002 6.2 5.36002 6.71333 4.84669L11.06 0.500022" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /> </svg>

  const renderList = (items, key) =>
    items.map(item => (
      <label key={item} className="filter-item">
        <input
          type="checkbox"
          checked={filters[key]?.includes(item)}
          onChange={() => toggleCheckbox(key, item)}
        />
        <span>{item}</span>
      </label>
    ));

  return (
    <>
      <div
        className={`filter-overlay ${isMobileOpen ? 'show' : ''}`}
        onClick={() => setMobileOpen(false)}
      />

      <aside className={`filters-sidebar ${isMobileOpen ? 'open' : ''}`}>

        <div className="filter-block">
          <label className="filter-item">
            <input
              type="checkbox"
              checked={filters.customizable || false}
              onChange={(e) =>
                updateFilters({ customizable: e.target.checked })
              }
            />
            <span className="fw-bold">CUSTOMIZABLE</span>
          </label>
        </div>

        <div className="filter-block">
          <div className="filter-top" onClick={() => toggleSection('idealFor')}>
            <h4>IDEAL FOR</h4>
            <span>
              {openSection !== 'idealFor' ? (
                <svg width="12" height="6" viewBox="0 0 12 6" fill="none">
                  <path d="M0.5 5.23L4.84666 0.884864C5.36 0.371712 6.2 0.371712 6.71333 0.884864L11.06 5.23"
                    stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg width="12" height="6" viewBox="0 0 12 6" fill="none">
                  <path d="M0.5 0.500022L4.84666 4.84669C5.36 5.36002 6.2 5.36002 6.71333 4.84669L11.06 0.500022"
                    stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </span>
          </div>
          {openSection !== 'idealFor' && renderList(idealFor, 'idealFor')}
        </div>

        <div className="filter-block">
          <div className="filter-top" onClick={() => toggleSection('occasion')}>
            <h4>OCCASION</h4>
            <span>
              {openSection === 'occasion' ? (
                <svg width="12" height="6" viewBox="0 0 12 6" fill="none">
                  <path d="M0.5 5.23L4.84666 0.884864C5.36 0.371712 6.2 0.371712 6.71333 0.884864L11.06 5.23"
                    stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg width="12" height="6" viewBox="0 0 12 6" fill="none">
                  <path d="M0.5 0.500022L4.84666 4.84669C5.36 5.36002 6.2 5.36002 6.71333 4.84669L11.06 0.500022"
                    stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </span>
          </div>
          {openSection === 'occasion' && renderList(occasion, 'occasion')}
        </div>

        <div className="filter-block">
          <div className="filter-top" onClick={() => toggleSection('work')}>
            <h4>WORK</h4>
            <span>{openSection === 'work' ? upArrow : downArrow}</span>
          </div>
          {openSection === 'work' && renderList(work, 'work')}
        </div>

        <div className="filter-block">
          <div className="filter-top" onClick={() => toggleSection('fabric')}>
            <h4>FABRIC</h4>
            <span>{openSection === 'fabric' ? upArrow : downArrow}</span>
          </div>
          {openSection === 'fabric' && renderList(fabric, 'fabric')}
        </div>

        <div className="filter-block">
          <div className="filter-top" onClick={() => toggleSection('segment')}>
            <h4>SEGMENT</h4>
            <span>{openSection === 'segment' ? upArrow : downArrow}</span>
          </div>
          {openSection === 'segment' && renderList(segment, 'segment')}
        </div>

        <div className="filter-block">
          <div className="filter-top" onClick={() => toggleSection('suitableFor')}>
            <h4>SUITABLE FOR</h4>
            <span>{openSection === 'suitableFor' ? upArrow : downArrow}</span>
          </div>
          {openSection === 'suitableFor' && renderList(suitableFor, 'suitableFor')}
        </div>

        <div className="filter-block">
          <div className="filter-top" onClick={() => toggleSection('rawMaterials')}>
            <h4>RAW MATERIALS</h4>
            <span>{openSection === 'rawMaterials' ? upArrow : downArrow}</span>
          </div>
          {openSection === 'rawMaterials' && renderList(rawMaterials, 'rawMaterials')}
        </div>

        <div className="filter-block">
          <div className="filter-top" onClick={() => toggleSection('pattern')}>
            <h4>PATTERN</h4>
            <span>{openSection === 'pattern' ? upArrow : downArrow}</span>
          </div>
          {openSection === 'pattern' && renderList(pattern, 'pattern')}
        </div>

        <div className="filter-footer">
          <button className="clear-btn" onClick={clearAllFilters}>
            CLEAR ALL
          </button>
          <button className="apply-btn" onClick={() => setMobileOpen(false)}>
            SHOW {productCount}
          </button>
        </div>

      </aside>
    </>
  );
};

export default Filters;
