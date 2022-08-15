import React from "react";
import "./Choose.css";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import SingleCard from "../SingleCard/SingleCard";
const Choose = () => {
  return (
    <div className="container my-5">
      <div className="container">
        <div className="text-center">
          <h1 className="fs-3">
            <span className="deep-red">Why</span> Choose Us
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            <br /> industry. Lorem Ipsum has been the industry's standard dummy
            text <br /> ever since the 1500s.
          </p>
        </div>
        <div className="py-5">
          <div className="row g-5">
          {
          [...new Array(3)].map((element,index)=> <SingleCard key={index}/>)
         }
            {/* <div className="col-12 col-md-6 col-lg-4">
              <div className="mt-3 position-relative">
                <div className="d-flex bg-danger icon-h position-absolute">
                  <AiFillStar className="fs-1 m-auto text-light" />
                </div>
                <div className="p-3 box text-center py-auto">
                  <p className="deep-red fs-3 py-5">Handpicked Hotels</p>
                  <p>
                    Lorem ipsum dolor sit amet, <br /> consect adipiscing elit.
                    Aenean
                    <br /> commodo ligula eget dolor. <br /> Aenean massa
                  </p>
                </div>
              </div>
              
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
