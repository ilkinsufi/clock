import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  return (
    <div className="demo">
      <Swiper
        speed={2000}
        effect={"cube"}
        autoplay={{
          delay: 2300,
          disableOnInteraction: true,
        }}
        loop={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        parallax={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="hero">
            <div className="hero__container container">
              <div data-aos="fade-up" className="hero_container__left">
                <div className="hero_c_l_content">
                  <h3>Modern tərzdə</h3>
                  <h1 className="hero-slide-title">Lena Kreslo </h1>
                  <p className="hero-slide-desc">
                    Antrasit <br />
                    Tezliklə filiallarımızda
                  </p>
                  <div className="explore_watch">
                    <div className="explore">
                      <Link to="/shop">
                        Kəşf et
                        <i className="fa-solid fa-cart-shopping"></i>
                      </Link>
                    </div>

                    <div className="watch">
                      <a href="#" className="zindex">
                        <i className="fa-solid  fa-play pulse"></i>
                      </a>
                      <a href="#">Videonu İzlə</a>
                    </div>
                  </div>
                </div>
              </div>

              <div data-aos="fade-left" className="hero_container__right">
                <div className="hero_c_r_content">
                  <img
                    src="https://htmldemo.net/dkoor/dkoor/assets/images/slider/slider1-3.png"
                    alt=""
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero">
            <div className="hero__container container">
              <div className="hero_container__left">
                <div className="hero_c_l_content">
                  <h3>Antrasit tərzdə</h3>
                  <h1 className="hero-slide-title">Rosaline kreslo</h1>
                  <p className="hero-slide-desc">
                    Nehir kumu parlaq,mərmər görünümlü dsp. <br />
                    Tezliklə filiallarımızda
                  </p>
                  <div className="explore_watch">
                    <div className="explore">
                      <Link to="/shop">
                        Kəşf et
                        <i className="fa-solid fa-cart-shopping"></i>
                      </Link>
                    </div>

                    <div className="watch">
                      <a href="#" className="zindex">
                        <i className="fa-solid  fa-play pulse"></i>
                      </a>
                      <a href="#">Videonu İzlə</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hero_container__right">
                <div className="hero_c_r_content">
                  <img
                    data-aos="fade-up"
                    src="https://htmldemo.net/dkoor/dkoor/assets/images/slider/slider1-2.png"
                    alt=""
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero">
            <div className="hero__container container">
              <div className="hero_container__left">
                <div className="hero_c_l_content">
                  <h3 data-aos="fade-up">Palmira tərzdə</h3>
                  <h1 className="hero-slide-title">Vivaldi Kreslo</h1>
                  <p className="hero-slide-desc">
                    Catania Oak elementlər <br />
                    Tezliklə filiallarımızda
                  </p>
                  <div className="explore_watch">
                    <div className="explore">
                      <Link data-aos="fade-up" to="/shop">
                        Kəşf et
                        <i className="fa-solid fa-cart-shopping"></i>
                      </Link>
                    </div>

                    <div className="watch">
                      <a href="#" className="zindex">
                        <i className="fa-solid  fa-play pulse"></i>
                      </a>
                      <a data-aos="fade-up" href="#">Videonu İzlə</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hero_container__right">
                <div className="hero_c_r_content">
                  <img
                    data-aos="fade-up"
                    src="https://htmldemo.net/dkoor/dkoor/assets/images/slider/slider1-1.png"
                    alt=""
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Hero;
