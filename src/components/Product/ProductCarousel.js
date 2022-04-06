import React from "react";
import { Carousel } from "react-bootstrap";

function ProductCarousel() {
  return (
    <>
      <div className="container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: 700 }}
              src="https://cdn.pixabay.com/photo/2020/06/10/07/05/yoga-5281457_960_720.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h2>Get your gear!</h2>
              <p>
                You don’t need anything to start a yoga practice, but here’s
                what you may want as you progress.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: 700 }}
              src="https://cdn.pixabay.com/photo/2016/11/18/14/15/woman-1834827_960_720.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h2>Get your gear!</h2>
              <p>
                You don’t need anything to start a yoga practice, but here’s
                what you may want as you progress.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default ProductCarousel;
