import React from "react";
import "./News.css";
import new1 from "../../images/news1.png";
import new2 from "../../images/news2.png";
import new3 from "../../images/news3.png";
import new4 from "../../images/news4.png";
const News = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="d-flex justify-content-evenly flex-column  align-items-center">
        <h1 className="fs-3 deep-red ">Latest News and Resources</h1>
        <p className="text-wrap">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="row mt-5">
        <div className="col-12 col-lg-6">
          <div>
            <img src={new1} width="" className="img-fluid" height="" />
          </div>
          <div className="news-button text-center my-3">
            <span>news</span>
          </div>
          <div>
            <p className="deep-red fs-5">Where does it come from?</p>
          </div>
          <div>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
            <a class="p-1 rounded red mb-0" href="#s">
              Read more
            </a>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="d-flex flex-column flex-sm-row justify-content-center ">
            <div className="me-4">
              <img src={new2} width="200px" className="img-fluid" height="200px" />
            </div>
            <div>
              <p className="deep-red fs-5">Where does it come from?</p>
              <p>
                Contrary to popular belief, Lorem Ipsum is <br/> not simply random
                text. It has roots in a <br/> piece of classical Latin literature from
                45 <br/> BC, making it over 2000 years old.
              </p>
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-center py-4 ">
            <div className="me-4">
              <img src={new3} width="200px" className="img-fluid" height="200px" />
            </div>
            <div>
              <p className="deep-red fs-5">Where does it come from?</p>
              <p>
                Contrary to popular belief, Lorem Ipsum is <br/> not simply random
                text. It has roots in a <br/> piece of classical Latin literature from
                45 <br/> BC, making it over 2000 years old.
              </p>
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-center ">
            <div className="me-4">
              <img src={new4} width="200px" className="img-fluid" height="200px" />
            </div>
            <div>
              <p className="deep-red fs-5">Where does it come from?</p>
              <p>
                Contrary to popular belief, Lorem Ipsum is <br/> not simply random
                text. It has roots in a <br/> piece of classical Latin literature from
                45 <br/> BC, making it over 2000 years old.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
