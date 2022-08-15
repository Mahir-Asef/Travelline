import React from "react";
import "./Header.css";
import brand from "../../images/brand.png";
import media from "../../images/media.png";
import travel from "../../images/travel.png";

import { IoMdCall } from "react-icons/io";
// import { GoCalendar } from "@react-icons/all-files/go/GoCalendar";
const Header = () => {
  return (
    <div className="header rounded-bottom">
      <div className="container">
        <nav className="navbar fixed-top navbar-expand-lg" style={{backgroundColor:"#F0C53E"}}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/#">
              <img src={brand} alt="" width="180px" height="60px" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  ms-auto mb-2 pe-5 mb-lg-0">
                <li className="nav-item me-5">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item me-5">
                  <a className="nav-link" href="#">
                    Events
                  </a>
                </li>
                <li className="nav-item me-5">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item me-3 ">
                  <a className="nav-link" href="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item me-5">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="d-flex" role="search">
                <button
                  className="btn border text-light rounded-pill"
                  type="submit"
                  style={{ backgroundColor: "#B25A59" }}
                >
                  <IoMdCall /> +1 (000) 000 000
                </button>
              </div>
            </div>
          </div>
        </nav>
        <main className="pb-5 pt-5">
          <div className="d-flex flex-column flex-sm-row justify-content-evenly align-items-center">
            <div>
              <h1>
                <span style={{ color: "#7F2736" }}>Life is a journey</span>, not
                a <br />
                destination
              </h1>
              <p>
                Let’s start your journey with us, your dream will <br />
                come true...
              </p>
              <div className="d-flex flex-column flex-sm-row align-items-center">
                <div>
                  <button
                    className="btn border text-light rounded-pill"
                    type="submit"
                    style={{ backgroundColor: "#B25A59" }}
                  >
                    Explore Destinations
                  </button>
                </div>
                <div className="mt-3">
                  <img src={media} width="80px" height="80px" />
                </div>
                <div className="mt-3">
                  <p>Watch how it works</p>
                </div>
              </div>
            </div>
            <div>
              <div className="position-relative">
                <img
                  src={travel}
                  alt=""
                  width="710px"
                  className="img-fluid"
                  height="745px"
                />
                {/* <div className="position-absolute travel-images group-one">
                  <img src={grp1} alt="" width="300px" height="80px" />
                    <div className="d-flex justify-content-start align-items-center my-3">
                      <GoCalendar className="p-2 m-3 fs-1 bg-danger text-light border  border-1 rounded" />
                      <div>
                        <h1 className="fs-5">250k</h1>
                        <span>Plan Your Trip</span>
                        
                      </div>
                    </div>
                </div>
                <div className="position-absolute travel-images2 group-two">
                  <img
                    src={grp2}
                    alt=""
                    width="350px"
                    height="150px"
                  />
                  <div className="d-flex justify-content-start align-items-center my-3">
                      <GoCalendar className="p-2 m-3 fs-1 bg-danger text-light border  border-1 rounded" />
                      <div>
                        <h1 className="fs-5">Upcoming Trips</h1>
                        <span>Today at 12.00 PM</span>
                        
                      </div>
                    </div>
                </div> */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Header;
