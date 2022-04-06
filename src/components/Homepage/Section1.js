import { Carousel } from "react-bootstrap";
import React from "react";

function Section1() {
  return (
    <>
    <div className="container mb-4">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{height: 700}}
            src="https://cdn.pixabay.com/photo/2020/06/10/07/05/yoga-5281457_960_720.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{height: 700}}
            src="https://cdn.pixabay.com/photo/2016/11/18/14/15/woman-1834827_960_720.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{height: 700}}
            src="https://cdn.pixabay.com/photo/2020/07/06/07/19/meditate-5375835_960_720.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    </>
  );
}

export default Section1;
