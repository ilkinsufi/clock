import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

function ClientReview() {
  return (
    <div className="client_review">
      <h5 data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">KƏŞF ET</h5>
      <h2 data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">Müştəri Rəyləri</h2>

      <img data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
        src="https://htmldemo.net/dkoor/dkoor/assets/images/photos/client1.png"
        alt=""
      />
      <p data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat Duis aute irure dolor in reprehenderit.
      </p>
      <h4 data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">Lalə Əliyeva</h4>
    </div>
  );
}

export default ClientReview;
