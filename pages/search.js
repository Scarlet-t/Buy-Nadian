import { Button, Container, Row, Col } from "react-bootstrap";
import FilterPanel from "@/components/FilterPanel";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import MainNav from "@/components/MainNav";
import { sampleProducts } from "@/constants/products";
import { useState } from "react";
import { useRouter } from "next/router";

export default function SearchResults() {
  const [filters, setFilters] = useState({
    estimatedIngredients: [],
    category: [],
    retailerAvailability: [],
    dietaryPreferences: [],
  });

  const handleFilterChange = (category, value) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (updatedFilters[category].includes(value)) {
        updatedFilters[category] = updatedFilters[category].filter(
          (item) => item !== value
        );
      } else {
        updatedFilters[category] = [...updatedFilters[category], value];
      }
      return updatedFilters;
    });
  };

  const resetFilters = () => {
    setFilters({
      estimatedIngredients: [],
      category: [],
      retailerAvailability: [],
      dietaryPreferences: [],
    });
  };

  const filteredProducts = (sampleProducts || []).filter((product) => {
    if (
      filters.estimatedIngredients.length > 0 &&
      !filters.estimatedIngredients.some((range) => {
        if (range === "0-50%")
          return (
            product.canadianPercentage >= 0 && product.canadianPercentage < 50
          );
        if (range === "50-75%")
          return (
            product.canadianPercentage >= 50 && product.canadianPercentage < 75
          );
        if (range === "75-100%")
          return (
            product.canadianPercentage >= 75 &&
            product.canadianPercentage <= 100
          );
        return false;
      })
    ) {
      return false;
    }

    // Filter by category
    if (
      filters.category.length > 0 &&
      !filters.category.includes(product.category)
    ) {
      return false;
    }

    return true;
  });

  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      <MainNav />

      <Container className="py-4 flex-grow-1">
        <Row>
          {/* Filter Sidebar */}
          <Col lg="auto" className="mb-4 mb-lg-0">
            <FilterPanel
              filters={filters}
              onFilterChange={handleFilterChange}
              onResetFilters={resetFilters}
            />
          </Col>

          {/* Product Grid */}
          <Col>
            <ProductGrid products={filteredProducts} />
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}
