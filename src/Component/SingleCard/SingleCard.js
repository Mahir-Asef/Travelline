import React from "react";
import "../Choose/Choose.css";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
const SingleCard = ({singleData}) => {
    // console.log(singleData);
    const {title,description}=singleData;
  return (
    <div className="col-12 col-md-6 col-lg-4">

      <div className="mt-3 position-relative">
        <div className="d-flex bg-danger icon-h position-absolute">
          <AiFillStar className="fs-1 m-auto text-light" />
        </div>
        <div className="p-3 box text-center py-auto">
          <p className="deep-red fs-3 py-5">{title}</p>
          <p>
            {description}
          </p>
        </div>
      </div>

    </div>
  );
};

export default SingleCard;
