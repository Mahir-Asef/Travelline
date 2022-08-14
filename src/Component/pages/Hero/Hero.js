import React from "react";
import "./Hero.css";
import hero1 from "../../../images/hero1.png";
import hero2 from "../../../images/hero2.png";
import hero3 from "../../../images/hero3.png";
const Hero = () => {
  return (
    <div className="container ">
      <div className="m-5">
        <div className="d-flex justify-content-evenly flex-column  align-items-center">
          <h1 className="fs-3 ">
            <span className="deep-red ">Check Our Best</span> Promotional Tour
          </h1>
          <p className="text-wrap">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            <br />
            industry. Lorem Ipsum has been the industry's standard dummy text
            <br />
            ever since the 1500s, when an unknown printer took a galley of type
            <br />
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="d-flex flex-column flex-sm-row align-items-center ">
          <div>
            <img
              src={hero1}
              width="450px"
              className="img-fluid"
              height="430px"
            />
            <p className=" p-2 text-center deep-red">Beijing</p>
          </div>
          <div>
            <img
              src={hero2}
              width="450px"
              className="img-fluid"
              height="430px"
            />
            <p className=" p-2 text-center deep-red">Turkey</p>
          </div>
          <div>
            <img
              src={hero1}
              width="450px"
              className="img-fluid"
              height="430px"
            />
            <p className=" p-2 text-center deep-red">Pakistan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
