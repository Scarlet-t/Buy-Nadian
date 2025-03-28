// TODO:
// import {type Product} from 'schema';
import { Card, Badge } from "react-bootstrap";

export default function ProductCard({ product }) {
  // default
  const {
    canadianPercentage = 0,
    name = "Product Name",
    description = "No description available",
    price = "0.00",
    image = null,
  } = product || {};

  // Determine Badge Class based on percentage
  const getCanadianBadgeClass = (percentage) => {
    if (percentage >= 90) return "bg-success";
    if (percentage >= 70) return "bg-warning";
    if (percentage >= 40) return "bg-danger";
    return "bg-danger";
  };

  return (
    <>
      <Card className="h-100 product-card shadow-sm">
        <div className="position-relative">
          {/* Product Image */}
          <div
            className="bg-light d-flex align-items-center justify-content-center"
            style={{ height: "240px" }}
          >
            {image ? (
              <img
                src={image}
                alt={name}
                className="img-fluid h-100 object-fit-cover"
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="text-secondary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
            )}
          </div>

          {/* Canadian Percentage Badge */}
          <Badge
            style={{
              height: "30px",
              width: "100px",
              backgroundColor:
                canadianPercentage >= 90
                  ? "#2e7d32"
                  : canadianPercentage >= 70
                  ? "#689f38"
                  : canadianPercentage >= 40
                  ? "#fbc02d"
                  : "#e53935",
            }}
            className={`position-absolute top-0 start-0 m-2 ${getCanadianBadgeClass(
              canadianPercentage
            )}`}
          >
            <div className="d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="20"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="me-1"
              >
                <path d="M383.8 351.7c2.5-2.5 105.2-92.4 105.2-92.4l-17.5-7.5c-10-4.9-7.4-11.5-5-17.4 2.4-7.6 20.1-67.3 20.1-67.3s-47.7 10-57.7 12.5c-7.5 2.4-10-2.5-12.5-7.5s-15-32.4-15-32.4-52.6 59.9-55.1 62.3c-10 7.5-20.1 0-17.6-10 0-10 27.6-129.6 27.6-129.6s-30.1 17.4-40.1 22.4c-7.5 5-12.6 5-17.6-5C293.5 72.3 255.9 0 255.9 0s-37.5 72.3-42.5 79.8c-5 10-10 10-17.6 5-10-5-40.1-22.4-40.1-22.4S183.3 182 183.3 192c2.5 10-7.5 17.5-17.6 10-2.5-2.5-55.1-62.3-55.1-62.3S98.1 167 95.6 172s-5 9.9-12.5 7.5C73 177 25.4 167 25.4 167s17.6 59.7 20.1 67.3c2.4 6 5 12.5-5 17.4L23 259.3s102.6 89.9 105.2 92.4c5.1 5 10 7.5 5.1 22.5-5.1 15-10.1 35.1-10.1 35.1s95.2-20.1 105.3-22.6c8.7-.9 18.3 2.5 18.3 12.5S241 512 241 512h30s-5.8-102.7-5.8-112.8 9.5-13.4 18.4-12.5c10 2.5 105.2 22.6 105.2 22.6s-5-20.1-10-35.1 0-17.5 5-22.5z" />
              </svg>
              <span>{canadianPercentage}%</span>
            </div>
          </Badge>
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="fs-5 mb-1">{name}</Card.Title>
          <Card.Text
            className="text-secondary small mb-3"
            style={{ height: "50px" }}
          >
            {description}
          </Card.Text>

          <div className="d-flex justify-content-between align-items-center mt-auto">
            <span className="fw-bold">{price}</span>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
