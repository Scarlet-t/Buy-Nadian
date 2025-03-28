import { Button, Container, Row, Col } from "react-bootstrap";
import FilterPanel from "@/components/FilterPanel";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import MainNav from "@/components/MainNav";
import { sampleProducts } from "@/constants/products";
import { useState, useEffect } from "react";
import { useRouter } from "react";

export default function SearchResults() {
  const [products, setProducts] = useState(sampleProducts); // Start with samples

  useEffect(() => {
    // Replace with real data when available
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      <MainNav />

      <Container className="py-4 flex-grow-1">
        <Row>
          {/* Filter Sidebar */}
          <Col lg="auto" className="mb-4 mb-lg-0">
            <FilterPanel />
          </Col>

          {/* Product Grid */}
          <Col>
            <ProductGrid products={products} />
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}
