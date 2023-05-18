import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import wooshSound from "../sounds/woosh.mp3";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function ProductTab2({ products, dispatch, basket, fav }) {
  const updateSwiperOptions = () => {
    if (window.innerWidth < 768) {
      setSwiperOptions({
        ...swiperOptions,
        slidesPerView: 1,
      });
    } else if (window.innerWidth < 1024) {
      setSwiperOptions({
        ...swiperOptions,
        slidesPerView: 2,
      });
    } else if (window.innerWidth < 1200) {
      setSwiperOptions({
        ...swiperOptions,
        slidesPerView: 3,
      });
    } else {
      setSwiperOptions({
        ...swiperOptions,
        slidesPerView: 4,
      });
    }
  };

  useEffect(() => {
    updateSwiperOptions();
    window.addEventListener("resize", updateSwiperOptions);
    return () => {
      window.removeEventListener("resize", updateSwiperOptions);
    };
  }, []);

  const [swiperOptions, setSwiperOptions] = useState({
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      clickable: true,
    },
    modules: [FreeMode, Pagination],
  });

  useEffect(() => {
    updateSwiperOptions();
    window.addEventListener("resize", updateSwiperOptions);
    return () => {
      window.removeEventListener("resize", updateSwiperOptions);
    };
  }, []);
  const [demo, setDemo] = useState(4);
  const [dModal, setDModal] = useState(false);
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const ilkin = demo + 8;
  const [productCount, setProductCount] = useState(1);

  const handleIncrement = () => {
    setProductCount(productCount + 1);
  };

  const handleDecrement = () => {
    if (productCount > 1) {
      setProductCount(productCount - 1);
    }
  };

  function addBasket(id, count) {
    const newBasket = [...basket];
    const basketItemIndex = newBasket.findIndex((item) => item.id === id);
    const woosh = new Audio(wooshSound);
    woosh.play();

    if (basketItemIndex >= 0) {
      newBasket[basketItemIndex].count += count;
    } else {
      newBasket.push({ id: id, count: count });
    }

    localStorage.setItem("basket", JSON.stringify(newBasket));

    dispatch({
      type: "SET_BASKET",
      payload: newBasket,
    });

    setDModal(false);
  }

  function handleMagni(index) {
    setSelectedProductIndex(index + demo);
    setProductCount(1);
    setDModal(!dModal);
  }
  function closeMagni(e) {
    if (e.target.classList.contains("detailsModal")) {
      setDModal(!dModal);
    }
  }
  function addFav(id) {
    console.log("əlavə edildi'");
    const newFav = [...fav];
    const favItemIndex = newFav.findIndex((item) => item.id === id);

    if (favItemIndex >= 0) {
      // newFav[favItemIndex].count += count;
      // console.log("new count:", newFav[favItemIndex].count);
      return;
    } else {
      newFav.push({ id: id });
    }

    localStorage.setItem("fav", JSON.stringify(newFav));

    dispatch({
      type: "SET_FAV",
      payload: newFav,
    });
    console.log(fav.length);
  }

  const selectedProduct = products[selectedProductIndex];
  function showStul(index) {
    setDemo(index);
  }

  return (
    <>
      <div
        onClick={closeMagni}
        className={dModal ? "detailsModal" : "detailsModal active"}
      >
        <div className="dModalInside">
          <div>
            <img className="dPhoto" src={selectedProduct?.image[0]} alt="" />{" "}
          </div>
          <div>
            <h1>{selectedProduct?.title}</h1>
            <h2>
              ₼ {selectedProduct?.price}
              <span className="forColor">
                ₼ {Math.floor(+selectedProduct?.price + 20)}
              </span>
            </h2>

            <ul>
              <li>
                <span>Kateqoriya:</span>
                <span>{selectedProduct?.category}</span>
              </li>
              <li>
                <span>Stok vəziyyəti</span>
                <span>{Math.ceil(2.9 * selectedProduct?.id)}</span>
              </li>
              <li className="randomforclass">
                <span>Rəngi:</span>
                <span className="p_colors">
                  <div
                    style={{ backgroundColor: selectedProduct?.color }}
                  ></div>
                </span>
              </li>
            </ul>
            <div className="atc">
              <div>
                <div>
                  <button onClick={handleDecrement}>-</button>
                  <input type="text" value={productCount} readOnly />
                  <button onClick={handleIncrement}>+</button>
                </div>
              </div>
              <div>
                <button
                  onClick={() => addBasket(selectedProduct.id, productCount)}
                >
                  SƏBƏTƏ ƏLAVƏ ET
                </button>
              </div>
            </div>
            <ul>
              <li>
                <span>Teqlər:</span>
                <span></span>
                <span>kreslolar</span>,<span> divanlar</span>,
                <span> yumşaq</span>,<span> stullar</span>
              </li>
              <li className="asdf">
                <span>Paylaş</span>
                <div className="asFace"></div>
                <div className="astwi"></div>
                <div className="asreddi"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="ProductTabContent container">
        <Swiper
          // slidesPerView={4}
          // spaceBetween={20}
          // freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          {...swiperOptions}
          // slidesPerView={4}
          spaceBetween={30}
          freeMode={false}
          showsPagination={false}
          className="mySwiper ikinciswiper"
        >
          <div className="container">
            {products.slice(demo, ilkin).map((a, index) => (
              <SwiperSlide key={a.id} className="product-item">
                <div className="p-i-image-container">
                  <img className="p-i-image" src={a.image[0]} alt="" />
                  <ul className="tooltip">
                    <li>
                      <a
                        onClick={() => handleMagni(index)}
                        className="magni_h_d"
                      >
                        <i className="magni fa-solid fa-magnifying-glass"></i>
                        <div className="magni_d">Bax</div>
                      </a>
                    </li>
                    <li onClick={() => addBasket(parseInt(a.id), 1)}>
                      <a
                        // onClick={() => handleMagni(index)}
                        className="magni_h_d test"
                      >
                        <i className="bazar fa-brands fa-opencart"></i>
                        <div className="magni_d">Əlavə et</div>
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => {
                          const woosh = new Audio(wooshSound);
                          woosh.play();
                          addFav(a.id);
                        }}
                        className="magni_h_d"
                      >
                        {/* <i className="fa-solid fa-heart remove"></i> */}
                        <i
                          className={
                            fav.find((product) => product.id === a.id)
                              ? "fa-solid fa-heart add"
                              : "fa-solid fa-heart remove"
                          }
                        ></i>
                        <div className="magni_d">Favori</div>
                      </a>
                    </li>
                  </ul>
                </div>
                <Link to={`/details/${a.id}`} className="p-i-title">
                  {a.title}
                </Link>
                <div className="p-i-price">
                  <span className="old-price">
                    ₼ {Math.floor(+a.price + 10)}
                  </span>
                  ₼ {a.price}
                </div>
                <div className="product-item-review-icon">
                  <img src="https://htmldemo.net/dkoor/dkoor/assets/images/icons/star.svg" />
                  <img src="https://htmldemo.net/dkoor/dkoor/assets/images/icons/star.svg" />
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </>
  );
}

const t = (a) => a;
export default connect(t)(ProductTab2);
