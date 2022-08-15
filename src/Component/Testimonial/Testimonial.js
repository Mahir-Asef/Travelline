import React from 'react';
import testimonial from '../../images/testimonial.png';
import { HiOutlineArrowNarrowRight } from "@react-icons/all-files/hi/HiOutlineArrowNarrowRight";
const Testimonial = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                        <span className="w-25 d-flex align-items-center"> <hr className="w-25 mx-4" /> TESTIMONIAL</span>
                        <h1 className="fs-1 deep-red my-5">What Customers Say?</h1>
                        <p className="my-5">Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry.</p>
                        <p className="my-5">Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry.</p>
                        <p>Lorem Ipsum is simply dummy text of the</p>
                        <button className="btn btn-outline-danger mb-5">Write your thought <HiOutlineArrowNarrowRight/></button>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <img src={testimonial} className="img-fluid" alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;