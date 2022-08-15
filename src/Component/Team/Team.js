import React from "react";
import "./Team.css";
import team from "../../images/team.png";
import { SiWindows } from "@react-icons/all-files/si/SiWindows";
import { HiOutlineUserGroup } from "@react-icons/all-files/hi/HiOutlineUserGroup";
const Team = () => {
  return (
    <div className=" container mt-5">
      <div className="d-flex justify-content-evenly flex-column  align-items-center">
        <h1 className="fs-3 ">
          <span className="deep-red ">Our</span> Team
        </h1>
        <p className="text-wrap">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="row">
        <div className="col-lg-6 col-12">
          <img src={team} width="" className="img-fluid" height="" />
        </div>
        <div className="col-lg-6 col-12 pt-5">
          <div className="d-flex justify-content-evenly flex-column  align-items-center">
            <h1 className="fs-4 ">
              Our <span className="deep-red ">team is the secret</span> to our
              success
            </h1>
          </div>
          <div className="d-flex justify-content-evenly flex-row  align-items-start mt-3">
            <div className="windows me-3">
              <div className="d-flex justify-content-start flex-column  ">
                <SiWindows
                  className="icon-color"
                  style={{ margin: "24px" }}
                />
              </div>
            </div>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </span>
          </div>
          <div className="d-flex justify-content-evenly flex-row  align-items-start">
            <div className="windows me-3">
              <div className="d-flex justify-content-start flex-column">
                <HiOutlineUserGroup
                  className="icon-color"
                  style={{ margin: "24px" }}
                />
              </div>
            </div>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Team;
