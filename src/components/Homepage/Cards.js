import React from "react";
import { Card } from "react-bootstrap";

function Cards({ img, title, body }) {
  return (
    <>
      <div className="border border-light rounded-3 shadow">
        <Card style={{ width: "18rem", height: "24rem" }}>
          <Card.Img
            variant="top"
            src={img}
            style={{ height: "12rem" }}
            className="border-bottom border-white"
          />
          <Card.Body>
            <Card.Title className="border-bottom border-secondary p-1">
              {title}
            </Card.Title>
            <Card.Text>{body}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Cards;
