import React from "react";
import "../Choose/Choose.css";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import { GiWireframeGlobe } from "@react-icons/all-files/gi/GiWireframeGlobe";
import { AiTwotoneLike } from "@react-icons/all-files/ai/AiTwotoneLike";




const SingleCard = ({singleData}) => {
    // console.log(singleData);
    const {title,description,icon}=singleData;
  return (
    <div className="col-12 col-md-6 col-lg-4">

      <div className="mt-3 position-relative">
        <div className="d-flex bg-danger icon-h position-absolute">
            {
                icon==='star' && <AiFillStar className="fs-1 m-auto text-light" />
            }
            {
                icon==='like' && <AiTwotoneLike className="fs-1 m-auto text-light" />
            }
            {
                icon==='globe' && <GiWireframeGlobe className="fs-1 m-auto text-light" />
            }
    
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
