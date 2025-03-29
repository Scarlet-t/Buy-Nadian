import { Row, Col, Form, Pagination as BsPagination } from "react-bootstrap";
import { useState } from "react";
import ProductCard from "./ProductCard";
import { products as sampleProducts } from "@/constants/products";

export default function ProductGrid({ products }) {
  const [sortOption, setSortOption] = useState("relevance");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const sortProducts = (products) => {
    switch (sortOption) {
      case "canadian-pct-high":
        return [...products].sort(
          (a, b) => b.canadianPercentage - a.canadianPercentage
        );
      case "canadian-pct-low":
        return [...products].sort(
          (a, b) => a.canadianPercentage - b.canadianPercentage
        );
      default:
        return products;
    }
  };

  const sortedProducts = sortProducts(products);

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="w-100 mt-md-0">
      {/* Sort Controls */}
      <div className="d-flex justify-content-end mb-4">
        <Form.Group className="d-flex align-items-center">
          <Form.Label className="text-secondary me-2 mb-0">
            <small>sort by</small>
          </Form.Label>
          <Form.Select
            size="sm"
            className="w-auto"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="relevance">Relevance</option>
            <option value="canadian-pct-high">Canadian % (High to Low)</option>
            <option value="canadian-pct-low">Canadian % (Low to High)</option>
          </Form.Select>
        </Form.Group>
      </div>

      {/* Products Grid */}
      <Row className="g-4">
        {currentProducts.map((product) => (
          <Col key={product.id} xs={12} sm={6} lg={4}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-center mt-5">
          <BsPagination>
            <BsPagination.Prev
              onClick={() => paginate(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            />
            {[...Array(totalPages).keys()].map((page) => (
              <BsPagination.Item
                key={page + 1}
                active={currentPage === page + 1}
                onClick={() => paginate(page + 1)}
              >
                {page + 1}
              </BsPagination.Item>
            ))}
            <BsPagination.Next
              onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            />
          </BsPagination>
        </div>
      )}
    </div>
  );
}
