import React from "react";
import { Card } from "react-bootstrap";

function Cards2({ img, title, body, content }) {
  return (
    <>
      <div className="border border-white rounded-3 shadow">
        <Card className="bg-light text-light">
          <Card.Img
            src={img}
            alt="Card image"
            style={{ height: "18rem", width: "20rem" }}
          />
          <Card.ImgOverlay>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{body}</Card.Text>
            <Card.Text>{content}</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
    </>
  );
}

export default Cards2;
