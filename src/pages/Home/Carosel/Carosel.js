import React from "react";
import "./Carosel.css";
import { Carousel } from "react-bootstrap";

const Carosel = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block  image"
            src="https://i.ibb.co/LrSX4FC/b2.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="carosel-caption">Welcome to The Car Land.</h3>
            <p className="carosel-caption">Choose Your Dream Car.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  image"
            src="https://i.ibb.co/rpLrvdc/b1.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className="carosel-caption">
            <h3 className="carosel-caption">Welcome to The Car Land.</h3>
            <p className="carosel-caption">Choose Your Dream Car.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  image"
            src="https://i.ibb.co/wstbFpy/b3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="carosel-caption">
            <h3 className="carosel-caption">Welcome to The Car Land.</h3>
            <p className="carosel-caption">Choose Your Dream Car.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carosel;
