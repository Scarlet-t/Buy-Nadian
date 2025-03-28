import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { products } from "@/constants/products";

//TODO: FINISH FILTERPANEL TO sort and remove items inPRODUCT GRID

const toggleSelection = (sectionId) => {};

export default function FilterPanel() {
  const [selections, setSelections] = useState({
    estimatedIngredients: [],
    category: [],
    retailerAvailability: [],
    dietaryPreferences: [],
  });

  const toggleSelection = (category, value) => {
    setSelections((prevState) => {
      const updatedSelections = { ...prevState };
      if (updatedSelections[category].includes(value)) {
        updatedSelections[category] = updatedSelections[category].filter(
          (item) => item !== value
        );
      } else {
        updatedSelections[category] = [...updatedSelections[category], value];
      }
      return updatedSelections;
    });
  };

  const resetFilters = () => {
    setSelections({
      estimatedIngredients: [],
      category: [],
      retailerAvailability: [],
      dietaryPreferences: [],
    });
  };

  return (
    <>
      <Form className="form-filter justify-content-between mb-3 p-5">
        <Form.Group className="d-flex mb-4 pb-2 border-bottom border-success">
          <h4 className="pe-5">Filter</h4>
          <Button
            variant="link"
            className="ps-5 text-success justify-content-end"
            onClick={resetFilters}
          >
            reset
          </Button>
        </Form.Group>

        {/* Estimated Ingredients */}
        <Form.Group className="mb-1 pb-3">
          <Form.Label className="m-0 filter-section-header h6">
            Estimated % of Canadian Ingredients
          </Form.Label>
          <div className="filter-section-content m-2 ms-5">
            {["0-100%", "50-75%", "75-100%"].map((option) => (
              <Form.Check
                label={option}
                key={option}
                type="checkbox"
                checked={selections.estimatedIngredients.includes(option)}
                onChange={() => toggleSelection("estimatedIngredients", option)}
                className="mb-2"
              />
            ))}
          </div>
        </Form.Group>

        {/* Category */}
        <Form.Group className="mb-1 pb-3">
          <Form.Label className="m-0 filter-section-header h6">
            Category
          </Form.Label>
          <div className="filter-section-content m-2 ms-5">
            {[
              "Breakfast",
              "Snacks",
              "Dairy & Alternatives",
              "Meat & Protein",
              "Fresh Produce",
              "Bakery",
              "Pantry Staples",
            ].map((option) => (
              <Form.Check
                label={option}
                key={option}
                type="checkbox"
                checked={selections.category.includes(option)}
                onChange={() => toggleSelection("category", option)}
              />
            ))}
          </div>
        </Form.Group>

        {/* Retail Availability */}
        <Form.Group className="mb-1 pb-3">
          <Form.Label className="m-0 filter-section-header h6">
            Retail Availability
          </Form.Label>
          <div className="filter-section-content m-2 ms-5">
            {["Available", "Unavailable", "All"].map((option) => (
              <Form.Check
                label={option}
                key={option}
                type="checkbox"
                checked={selections.retailerAvailability.includes(option)}
                onChange={() => toggleSelection("retailerAvailability", option)}
              />
            ))}
          </div>
        </Form.Group>

        {/* Dietary Preferences */}
        <Form.Group className="mb-4 pb-3">
          <Form.Label className="m-0 filter-section-header h6">
            Dietary Preferences
          </Form.Label>
          <div className="filter-section-content m-2 ms-5">
            {[
              "Organic",
              "Gluten-Free",
              "Canadian-Sourced (Only)",
              "Sustainable & Ethical",
              "Brands",
            ].map((option) => (
              <Form.Check
                label={option}
                key={option}
                type="checkbox"
                checked={selections.dietaryPreferences.includes(option)}
                onChange={() => toggleSelection("dietaryPreferences", option)}
              />
            ))}
          </div>
        </Form.Group>
      </Form>
    </>
  );
}
