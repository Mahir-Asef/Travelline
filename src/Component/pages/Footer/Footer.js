import React from "react";
import footer from "../../../images/brand.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-color">
      <div className="container p-5">
        <div className="d-flex flex-row justify-content-center align-items-center">
          <div className="me-5">
            <img src={footer} width="" className="img-fluid" height="430px" />
          </div>
          <div>
            <h1 className="fs-3">
              Domestic <br /> International <br /> Tours
            </h1>
          </div>
        </div>
        <div>
          <div>
            <p className="fs-4 bg-color text-center">
              Subscribe to get our Newsletter
            </p>
          </div>
          <div class="input-group mb-3 d-flex justify-content-center">
            <input
              type="text"
              className="w-50 input-field "
              placeholder="Recipient's username"
              aria-label="Recipient's username"
            />
            <button
              className="btn sub-btn"
              type="button"
            >
              Button
            </button>
          </div>
          <div className="d-flex justify-content-center flex-column align-items-center">
            <p>Careers | Privacy Policy Terms & Conditions <br/> 
            </p>
            © 2021 Tourism Department.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
