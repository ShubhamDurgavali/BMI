import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductCard({ image, title, body, url }) {
  return (
    <>
      <div className="border border-light rounded-3 shadow">
        <Card style={{ width: "18rem", height: "24rem" }}>
          <Card.Img
            variant="top"
            src={image}
            style={{ height: "12rem" }}
            className="border-bottom border-white"
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{body}</Card.Text>
          </Card.Body>

          <a
            target="_blank"
            href={url}
          >
            <Button variant="primary" className="w-50 m-3">
              Buy Now!
            </Button>
          </a>
        </Card>
      </div>
    </>
  );
}

export default ProductCard;
