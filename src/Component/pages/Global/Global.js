import React from 'react';
import '../Hero/Hero.css';
import g1 from '../../../images/g1.png';
import g2 from '../../../images/g2.png';
const Global = () => {
    return (
        <div className="container mt-5">
            <div className="m-5">
                <div className="d-flex justify-content-evenly flex-column  align-items-center">
                <h1 className="fs-3 ">
                    <span className="deep-red">Globally</span> Accepted
                </h1>
                <p className="text-wrap">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                    <br />
                    has been the industry's standard dummy text ever since the 1500s, when an unknown 
                    <br />
                    printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                </div>
                <div className="d-flex container flex-column flex-sm-row justify-content-evenly align-items-center  mt-3">
                <div className='px-auto my-sm-3 '>
                    <img
                    src={g1}
                    width="350px"
                    className="img-fluid"
                    height="430px"
                    />
                </div>
                <div className='mt-3'>
                    <img
                    src={g2}
                    width="350px"
                    className="img-fluid"
                    height="430px"
                    />
                </div>
                </div>
            </div>
    </div>
    );
};

export default Global;