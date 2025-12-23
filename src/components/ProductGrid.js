import React, { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";

const PRODUCTS_PER_PAGE = 12;

const ProductGrid = ({ products, hideFilter }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    return products.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);
  }, [products, currentPage]);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="product-grid-container">
      <div
        className={`product-grid ${!hideFilter ? "four-column" : "three-column"
          }`}
      >
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="pagination-btn"
            disabled={currentPage === 1}
            onClick={() => goToPage(currentPage - 1)}
          >
            Previous
          </button>

          <div className="page-numbers">
            {Array.from({ length: totalPages }).map((_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  className={`page-number ${page === currentPage ? "active" : ""
                    }`}
                  onClick={() => goToPage(page)}
                >
                  {page}
                </button>
              );
            })}
          </div>

          <button
            className="pagination-btn"
            disabled={currentPage === totalPages}
            onClick={() => goToPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
