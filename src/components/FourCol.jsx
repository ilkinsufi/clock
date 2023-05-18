import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function FourCol() {
  return (
    <div data-aos="fade-up"
    data-aos-anchor-placement="top-center" className="FourCol">
      {" "}
      <div className="gfdsfdf">
        <img
          src="https://htmldemo.net/dkoor/dkoor/assets/images/shop/banner/v3.png"
          alt=""
        />
        <h5>Minimal</h5>
        <h2>Minimal</h2>
        <Link to="/details/17">Keçid et</Link>
      </div>
      <div className="gfdsfdf">
        <img
          src="https://htmldemo.net/dkoor/dkoor/assets/images/shop/banner/v4.png"
          alt=""
        />
        <h5>Dekor</h5>
        <h2>Dekor</h2>
        <Link to="/details/18">Keçid et</Link>
      </div>
      <div className="gfdsfdf">
        <img
          src="https://htmldemo.net/dkoor/dkoor/assets/images/shop/banner/v5.png"
          alt=""
        />
        <h5>Yumşaq</h5>
        <h2>Kreslo</h2>
        <Link to="/details/19">Keçid et</Link>
      </div>
      <div className="gfdsfdf">
        <img
          src="https://htmldemo.net/dkoor/dkoor/assets/images/shop/banner/v6.png"
          alt=""
        />
        <h5>Wooden</h5>
        <h2>Stul</h2>
        <Link to="/details/20">Keçid et</Link>
      </div>
    </div>
  );
}

export default FourCol;
