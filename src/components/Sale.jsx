import React from "react";
import endirim1 from "../Images/endirim.jpg";
import endirim2 from "../Images/endirim2.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function sale() {
  return (
    <Link className="testtesttest" to={`/shop`}>
      <div className="sale container">
        <div data-aos="zoom-out-right">
          <img src={endirim1} />
        </div>
        <div data-aos="zoom-out-left">
          <img src={endirim2} />
        </div>
      </div>
    </Link>
  );
}

export default sale;
