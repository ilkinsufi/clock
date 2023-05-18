import { Link } from "react-router-dom";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";
// import emailValidator from "email-validator";
import ScrollToTop from "react-scroll-to-top";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const nameInput = useRef();
  const emailInput = useRef();
  const messageTA = useRef();

  const notify = () =>
    toast("🦄 Mesajınız qəbul edildi", {
      position: "bottom-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const notify2 = () =>
    toast.warn("Zəhmət olmasa formu düzgün doldurun", {
      position: "bottom-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  function action() {
    const email = emailInput.current.value;

    if (
      messageTA.current.value &&
      nameInput.current.value &&
      email &&
      emailValidator.validate(email)
    ) {
      notify();
      // Disable the button for 5 seconds
      const button = document.querySelector(".contactform button");
      button.disabled = true;
      setTimeout(() => {
        button.disabled = false;
      }, 5000);
    } else {
      notify2();
    }
  }

  return (
    <>
      <ScrollToTop smooth />

      <div className="d__header">
        <Link to="/">ƏSAS SƏHİFƏ</Link>
        <span> / </span>
        <span>ƏLAQƏ</span>
      </div>

      <div className="contact_main container">
        <div data-aos="fade-right">
          <h3 className="fdsfeüreürüf">Əlaqə</h3>
          <div className="fewewrfdsf">
            <img src="https://img.icons8.com/pulsar-color/48/null/marker.png" />
            <p>Fəvvarələr meydanı, b54, A84</p>
          </div>
          <div className="fewewrfdsf">
            <img src="https://img.icons8.com/pulsar-color/48/null/name.png" />
            <a href="mailto: abc@example.com">dekor@example.com</a>
          </div>
          <div className="fewewrfdsf">
            <img
              className="fdsfewfdfx"
              src="https://img.icons8.com/dusk/64/null/phone.png"
            />
            <a href="tel:+9941236548">+994 12 345 67 89</a>
          </div>
        </div>
        <div data-aos="fade-left">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="contactform"
            action="#"
          >
            <input ref={nameInput} required type="text" placeholder="Adınız" />
            <input
              ref={emailInput}
              required
              type="email"
              placeholder="Email "
            />
            <input ref={messageTA} required type="text" placeholder="Mövzu" />
            <textarea
              required
              className="frewrffd"
              name=""
              id=""
              cols="20"
              rows="6"
              placeholder="Mesajınızı qeyd edin"
            ></textarea>
            <button onClick={action} className="fordisable">
              GÖNDƏR
            </button>
          </form>
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
        </div>
      </div>
    </>
  );
}

export default Contact;
