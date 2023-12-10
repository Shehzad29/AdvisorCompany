import React from "react";
import { Carousel } from "react-bootstrap";
import "../../Styles/Slider.css";

import Conference1 from "./../../assets/photo-conference.jpeg";
import Conference2 from "./../../assets/photo-conference2.jpeg";
import Conference3 from "./../../assets/photo-conference3.jpeg";

const SliderEvents = () => {
  return (
    <>
      <div>
        <Carousel fade={true} pause={false}>
          <Carousel.Item interval={2500}>
            <div className="mainframe">
              <img
                className="d-block w-100"
                src={Conference1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Learn your credit</h3>
                <p>We have limited tickets due to the huge demand.</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <div className="mainframe">
              <img
                className="d-block w-100"
                src={Conference2}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Access to Professionals</h3>
                <p>We have limited tickets due to the huge demand.</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <div className="mainframe">
              <img
                className="d-block w-100"
                src={Conference3}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>International Conference</h3>
                <p>We have limited tickets due to the huge demand.</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default SliderEvents;
