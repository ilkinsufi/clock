import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Footer() {
  const [email, setEmail] = useState("");
  const inputRef = useRef();

  const notify = () =>
    toast.success(` Yeniliklər ${email} adresinizə göndərilicək 👻`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  function mailNotify() {
    notify();
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (email) {
      notify();
      setEmail("");
    }
  };
  return (
    <>
      <div className="footer">
        <div className="container footer-main">
          <div className="col1">
            <h4>Səhifələr</h4>
            <ul>
              <li>
                <Link to="/" href="#">
                  Ana səhifə
                </Link>
              </li>
              <li>
                <Link to="/blog" href="#">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/shop
                "
                  href="#"
                >
                  Mağaza
                </Link>
              </li>
              <li>
                <Link to="/contact" href="#">
                  Əlaqə
                </Link>
              </li>
              <li>
                <Link to="/about" href="#">
                  Haqqımızda
                </Link>
              </li>
            </ul>
          </div>
          <div className="col1">
            <h4>Bloglar</h4>
            <ul>
              <li>
                <Link to="/blog1" href="#">
                  Blog 1
                </Link>
              </li>
              <li>
                <Link to="/blog2" href="#">
                  Blog 2
                </Link>
              </li>
              <li>
                <Link to="/blog3" href="#">
                  Blog 3
                </Link>
              </li>
            </ul>
          </div>
          <div className="col1">
            <h4>Demo</h4>
            <ul>
              <li>
                <a href="#">Demo</a>
              </li>
              <li>
                <a href="#">Demo</a>
              </li>
              <li>
                <a href="#">Demo</a>
              </li>
              <li>
                <a href="#">Demo</a>
              </li>
              <li>
                <a href="#">Demo</a>
              </li>
            </ul>
          </div>
          <div className="col1">
            <h4>Demo</h4>
            <ul>
              <li>
                <a href="#">Demo</a>
              </li>
              <li>
                <a href="#">Demo</a>
              </li>
              <li>
                <a href="#">Demo</a>
              </li>
              <li>
                <a href="#">Demo</a>
              </li>
              <li>
                <a href="#">Demo</a>
              </li>
            </ul>
          </div>
          <div className="col5">
            <h4>Haqqımızda</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              iure.
            </p>
            <form className="footerinputtt" onSubmit={handleFormSubmit}>
              <input
                ref={inputRef}
                required
                type="email"
                placeholder="məsələn@text.com"
                value={email}
                onChange={handleEmailChange}
              />
              <button className="fsdfs">Abunə Ol</button>
            </form>
            <p className="pos">Emailiniz heç bir yerdə görünməyəcək</p>
            <div className="storesss">
              <img
                src="https://htmldemo.net/dkoor/dkoor/assets/images/photos/store-app.png"
                alt=""
              />
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div>
            © 2023 DEKOR. Made with <i className="fa-solid fa-heart"></i> by
            <a
              target="_blank"
              href="https://github.com/ilkinsufi"
              className="github"
            >
              Ilkin
            </a>
          </div>
          <img
            src="https://htmldemo.net/dkoor/dkoor/assets/images/shop/payment.png"
            alt=""
          />
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        limit={1}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default Footer;
