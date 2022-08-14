import React from "react";
import "./Tour.css";
import tour from "../../../images/tour.png";
import icon1 from "../../../images/icon1.png";
import icon2 from "../../../images/icon2.png";
const Tour = () => {
  return (
    <div className="d-flex container flex-column flex-sm-row justify-content-evenly align-items-center  pt-3 pb-5">
      <div className="d-flex justify-content-start flex-column  align-items-start">
        <img
          className="position-relative img-fluid"
          src={icon1}
          style={{ right: "10px" }}
          width="40px"
          height=""
        />
        <p className="fs-4 position-absolute">
          <span className="deep-red">Watch</span> our lattest tour
        </p>
        <p className="text-wrap">
          Lorem Ipsum is simply dummy text of the printing and <br />
          typesetting industry. Lorem Ipsum has been the industry's <br />
          standard dummy text ever since the 1500s, when an
          <img
            className="position-relative img-fluid"
            src={icon2}
            style={{ left: "20px" }}
            width="20px"
            height=""
          />
          <br /> unknown printer took a galley of type and scrambled it to
          <br /> make a type specimen book.
          <br />
        </p>
        <a class="p-1 rounded red mb-0" href="#s">
          learn more
        </a>
      </div>
      <div>
        <img src={tour} width="400px" className="img-fluid" height="430px" />
      </div>
    </div>
  );
};

export default Tour;
