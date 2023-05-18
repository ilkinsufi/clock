import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useState } from "react";
import Footer from "../components/Footer";

import wooshSound from "../sounds/woosh.mp3";
import ScrollToTop from "react-scroll-to-top";
import ScrollToTop2 from "../components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";

function Shop({ basket, products, dispatch, fav }) {
  let [tempProducts, setTempProducts] = useState(products);

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };
  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const [filterPriceModal, setFilterPriceModal] = useState(false);
  const [typeModal, setTypeModal] = useState(false);
  const [sizeModal, setSizeModal] = useState(false);
  const [orderModal, setOrderModal] = useState(false);

  const [inputColor, setInputColor] = useState(false);
  const [inputColor2, setInputColor2] = useState(false);
  const [inputColor3, setInputColor3] = useState(false);

  const [order1color, setOrder1] = useState(false);
  const [order2color, setOrder2] = useState(false);
  const [order3color, setOrder3] = useState(false);
  const [order4color, setOrder4] = useState(false);

  const [Ssize1, setSsize1] = useState(false);
  const [Ssize2, setSsize2] = useState(false);
  const [Ssize3, setSsize3] = useState(false);

  const handleSubmit = (event) => {
    // event.preventDefault();

    const filteredProducts = products.filter(
      (product) =>
        product.price >= parseInt(minPrice) &&
        product.price <= parseInt(maxPrice)
    );

    setTempProducts(filteredProducts);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    const { pathname } = useLocation();
    useEffect(() => {
      // ...
    }, []);

    return null;
  };

  function resetFiltersFunction() {
    const filteredProducts = products;
    setTempProducts(filteredProducts);
    setOrder1(false);
    setOrder2(false);
    setOrder3(false);
    setOrder4(false);
    setSsize1(false);
    setSsize2(false);
    setSsize3(false);
    setInputColor2(false);
    setInputColor(false);
    setInputColor3(false);
    setMinPrice("");
    setMaxPrice("");

    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    const { pathname } = useLocation();
    useEffect(() => {
      // ...
    }, []);

    return null;
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
  function setOrderCf1() {
    setOrder1(true);
    setOrder2(false);
    setOrder3(false);
    setOrder4(false);
    // ada gore sırala
    tempProducts.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0));
    setTempProducts([...tempProducts]);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    const { pathname } = useLocation();
    useEffect(() => {
      // ...
    }, []);

    return null;
  }
  function setOrderCf2() {
    setOrder1(false);
    setOrder2(true);
    setOrder3(false);
    setOrder4(false);
    // ada görə tərsinə
    tempProducts.sort((a, b) => b.title.charCodeAt(0) - a.title.charCodeAt(0));
    setTempProducts([...tempProducts]);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    const { pathname } = useLocation();
    useEffect(() => {
      // ...
    }, []);

    return null;
  }
  function setOrderCf3() {
    setOrder1(false);
    setOrder2(false);
    setOrder3(true);
    setOrder4(false);
    // qiyməgə törə
    if (!Ssize1) {
      tempProducts.sort((a, b) => +a.price - +b.price);
      setTempProducts([...tempProducts]);
    }
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    const { pathname } = useLocation();
    useEffect(() => {
      // ...
    }, []);

    return null;
  }
  function setOrderCf4() {
    setOrder1(false);
    setOrder2(false);
    setOrder3(false);
    setOrder4(true);
    // qiyməgə törə tersine
    tempProducts.sort((a, b) => +b.price - +a.price);
    setTempProducts([...tempProducts]);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    const { pathname } = useLocation();
    useEffect(() => {
      // ...
    }, []);

    return null;
  }

  function setSize1() {
    setSsize1(true);
    setSsize2(false);
    setSsize3(false);

    const filteredProducts = products.filter((product) => product.size === "s");
    setTempProducts(filteredProducts);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    const { pathname } = useLocation();
    useEffect(() => {
      // ...
    }, []);

    return null;
  }

  function setSize2() {
    setSsize2(true);
    setSsize1(false);
    setSsize3(false);

    const filteredProducts = products.filter((product) => product.size === "m");
    setTempProducts(filteredProducts);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    const { pathname } = useLocation();
    useEffect(() => {
      // ...
    }, []);

    return null;
  }
  function setSize3() {
    setSsize3(true);
    setSsize2(false);
    setSsize1(false);

    const filteredProducts = products.filter((product) => product.size === "l");
    setTempProducts(filteredProducts);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    const { pathname } = useLocation();
    useEffect(() => {
      // ...
    }, []);

    return null;
  }

  function setColor() {
    setInputColor(true);
    setInputColor2(false);
    setInputColor3(false);

    const filteredProducts = products.filter(
      (product) => product.category === "Dekorlar"
    );
    setTempProducts(filteredProducts);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    const { pathname } = useLocation();
    useEffect(() => {
      // ...
    }, []);

    return null;
  }
  function setColor2() {
    setInputColor2(true);
    setInputColor(false);
    setInputColor3(false);

    const filteredProducts = products.filter(
      (product) => product.category === "Stullar"
    );
    setTempProducts(filteredProducts);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    const { pathname } = useLocation();
    useEffect(() => {
      // ...
    }, []);

    return null;
  }
  function setColor3() {
    setInputColor3(true);
    setInputColor2(false);
    setInputColor(false);

    const filteredProducts = products.filter(
      (product) => product.category === "Kreslolar"
    );
    setTempProducts(filteredProducts);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    const { pathname } = useLocation();
    useEffect(() => {
      // ...
    }, []);

    return null;
  }

  function addBasket(id, count = 1) {
    const newBasket = [...basket];
    const basketItemIndex = newBasket.findIndex((item) => item.id === id);

    if (basketItemIndex >= 0) {
      newBasket[basketItemIndex].count += count;
      console.log("new count:", newBasket[basketItemIndex].count);
    } else {
      newBasket.push({ id: id, count: count });
      console.log("new count:", count);
    }

    localStorage.setItem("basket", JSON.stringify(newBasket));

    dispatch({
      type: "SET_BASKET",
      payload: newBasket,
    });
  }

  return (
    <>
      <ScrollToTop smooth />
      <ScrollToTop2 smooth />

      <div className="d_d_d">
        <div className="d__header">
          <Link to="/">ƏSAS SƏHİFƏ</Link>
          <span> / </span>
          <span>MAĞAZA</span>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="productsContainer randomforres container"
      >
        <div className="productLeftSide">
          <div>
            {" "}
            <div
              className={
                orderModal ? "firstRow formargin active" : "firstRow formargin"
              }
            >
              <div
                className="rowHead"
                onClick={(e) => {
                  setOrderModal(!orderModal);
                }}
              >
                <span>Sırala</span>
                <i
                  style={
                    !orderModal
                      ? { transform: "rotate(180deg)" }
                      : { transform: "rotate(0deg)" }
                  }
                  className="fa-solid fa-chevron-down"
                ></i>
              </div>

              {/* alt */}
              <div className="rowBody">
                <div className="typeOne" onClick={setOrderCf1}>
                  <div
                    style={
                      !order1color
                        ? {
                            backgroundColor: "white",
                          }
                        : {
                            backgroundColor: "#eb6f25",
                            border: "2px solid #eb6f25",
                          }
                    }
                  >
                    <i className="fa-solid fa-check"></i>
                  </div>
                  Sırala (a-z)<span>(19)</span>
                </div>
                <div className="typeOne" onClick={setOrderCf2}>
                  <div
                    style={
                      !order2color
                        ? {
                            backgroundColor: "white",
                          }
                        : {
                            backgroundColor: "#eb6f25",
                            border: "2px solid #eb6f25",
                          }
                    }
                  >
                    <i className="fa-solid fa-check"></i>
                  </div>
                  Sırala (z-a)<span>(19)</span>
                </div>
                <div className="typeOne" onClick={setOrderCf3}>
                  <div
                    style={
                      !order3color
                        ? {
                            backgroundColor: "white",
                          }
                        : {
                            backgroundColor: "#eb6f25",
                            border: "2px solid #eb6f25",
                          }
                    }
                  >
                    <i className="fa-solid fa-check"></i>
                  </div>
                  Qiymətə görə ( artan )<span>(19)</span>
                </div>
                <div className="typeOne" onClick={setOrderCf4}>
                  <div
                    style={
                      !order4color
                        ? {
                            backgroundColor: "white",
                          }
                        : {
                            backgroundColor: "#eb6f25",
                            border: "2px solid #eb6f25",
                          }
                    }
                  >
                    <i className="fa-solid fa-check"></i>
                  </div>
                  Qiymətə görə ( azalan )<span>(19)</span>
                </div>
              </div>
            </div>
            <div className={filterPriceModal ? "firstRow active" : "firstRow"}>
              {/* ust */}
              <div
                className="rowHead"
                onClick={(e) => {
                  setFilterPriceModal(!filterPriceModal);
                }}
              >
                <span>Qiymət aralığı</span>
                <i
                  style={
                    !filterPriceModal
                      ? { transform: "rotate(180deg)" }
                      : { transform: "rotate(0deg)" }
                  }
                  className="fa-solid fa-chevron-down"
                ></i>
              </div>

              {/* alt */}
              <div className="rowBody">
                <div className="inputContainer">
                  <div className="inputCLeft">
                    <span>₼</span>
                    <input
                      value={minPrice}
                      onChange={handleMinPriceChange}
                      placeholder="10"
                      type="number"
                    />
                    dan
                  </div>
                  <div className="inputCLeft">
                    <span>₼</span>
                    <input
                      value={maxPrice}
                      onChange={handleMaxPriceChange}
                      placeholder="60"
                      type="number"
                    />
                    qədər
                  </div>
                </div>
                <button
                  onClick={() => handleSubmit(minPrice, maxPrice)}
                  className="sumbitI"
                >
                  Filtllə
                </button>
              </div>
            </div>
            <div className={typeModal ? "firstRow active" : "firstRow"}>
              {/* ust */}
              <div
                className="rowHead"
                onClick={(e) => {
                  setTypeModal(!typeModal);
                }}
              >
                <span>Tip</span>
                <i
                  style={
                    !typeModal
                      ? { transform: "rotate(180deg)" }
                      : { transform: "rotate(0deg)" }
                  }
                  className="fa-solid fa-chevron-down"
                ></i>
              </div>

              {/* alt */}
              <div className="rowBody">
                <div className="typeOne" onClick={setColor}>
                  <div
                    style={
                      !inputColor
                        ? {
                            backgroundColor: "white",
                          }
                        : {
                            backgroundColor: "#eb6f25",
                            border: "2px solid #eb6f25",
                          }
                    }
                  >
                    <i className="fa-solid fa-check"></i>
                    Dekorlar
                  </div>
                  <span>(10)</span>
                </div>

                <div className="typeOne" onClick={setColor2}>
                  <div
                    style={
                      !inputColor2
                        ? {
                            backgroundColor: "white",
                          }
                        : {
                            backgroundColor: "#eb6f25",
                            border: "2px solid #eb6f25",
                          }
                    }
                  >
                    <i className="fa-solid fa-check"></i>
                    Stullar
                  </div>
                  <span>(4)</span>
                </div>

                <div className="typeOne" onClick={setColor3}>
                  <div
                    style={
                      !inputColor3
                        ? {
                            backgroundColor: "white",
                          }
                        : {
                            backgroundColor: "#eb6f25",
                            border: "2px solid #eb6f25",
                          }
                    }
                  >
                    <i className="fa-solid fa-check"></i>
                    Kreslolar
                  </div>
                  <span>(5)</span>
                </div>
              </div>
            </div>
            <div className={sizeModal ? "firstRow active" : "firstRow"}>
              {/* ust */}
              <div
                className="rowHead"
                onClick={(e) => {
                  setSizeModal(!sizeModal);
                }}
              >
                <span>Ölçü</span>
                <i
                  style={
                    !sizeModal
                      ? { transform: "rotate(180deg)" }
                      : { transform: "rotate(0deg)" }
                  }
                  className="fa-solid fa-chevron-down"
                ></i>
              </div>

              {/* alt */}
              <div className="rowBody">
                <div className="typeOne" onClick={setSize1}>
                  <div
                    style={
                      !Ssize1
                        ? {
                            backgroundColor: "white",
                          }
                        : {
                            backgroundColor: "#eb6f25",
                            border: "2px solid #eb6f25",
                          }
                    }
                  >
                    <i className="fa-solid fa-check"></i>S
                  </div>
                  <span>(6)</span>
                </div>
                <div className="typeOne" onClick={setSize2}>
                  <div
                    style={
                      !Ssize2
                        ? {
                            backgroundColor: "white",
                          }
                        : {
                            backgroundColor: "#eb6f25",
                            border: "2px solid #eb6f25",
                          }
                    }
                  >
                    <i className="fa-solid fa-check"></i>M
                  </div>
                  <span>(8)</span>
                </div>
                <div className="typeOne" onClick={setSize3}>
                  <div
                    style={
                      !Ssize3
                        ? {
                            backgroundColor: "white",
                          }
                        : {
                            backgroundColor: "#eb6f25",
                            border: "2px solid #eb6f25",
                          }
                    }
                  >
                    <i className="fa-solid fa-check"></i>L
                  </div>
                  <span>(5)</span>
                </div>
              </div>
            </div>
            <div className="resetFilter">
              <a
                className={
                  Ssize1 ||
                  Ssize2 ||
                  Ssize3 ||
                  order1color ||
                  order2color ||
                  order3color ||
                  order4color ||
                  inputColor ||
                  inputColor2 ||
                  inputColor3 ||
                  minPrice ||
                  maxPrice
                    ? "cta"
                    : "cta deactive"
                }
                onClick={resetFiltersFunction}
              >
                <span>Sıfırla</span>
                <span>
                  <svg
                    width="76px"
                    height="43px"
                    // viewBox="10 0 16 43"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      id="arrow"
                      stroke="none"
                      strokeWidth="2"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <path
                        className="one"
                        d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        className="two"
                        d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        className="three"
                        d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                        fill="#FFFFFF"
                      ></path>
                    </g>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="productRightSide shoprightsode">
          {tempProducts?.map((prod) => {
            return (
              <div key={prod.id}>
                {/* <div key={prod.id}>
                  <div>{prod.title}</div>
                  <div>{prod.price}</div>
                </div> */}

                <div className="p-i-image-container forhover">
                  <Link to={`/details/${prod.id}`}>
                    <img className="p-i-image" src={prod.image[0]} alt="" />
                  </Link>
                  <ul className="tooltip">
                    <li
                      onClick={() => {
                        addBasket(prod.id);
                        const woosh = new Audio(wooshSound);
                        woosh.play();
                      }}
                    >
                      <a className="magni_h_d test">
                        <i className="bazar fa-brands fa-opencart"></i>
                        <div className="magni_d">Əlavə et</div>
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => {
                          const woosh = new Audio(wooshSound);
                          woosh.play();
                          addFav(prod.id);
                        }}
                        className="magni_h_d"
                      >
                        {/* <i className="fa-solid fa-heart remove"></i> */}
                        <i
                          className={
                            fav.find((product) => product.id === prod.id)
                              ? "fa-solid fa-heart add"
                              : "fa-solid fa-heart remove"
                          }
                        ></i>
                        <div className="magni_d">Favori</div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="catego">
                  <span>Kateqoriya:</span> {prod.category}
                </div>
                <Link to={`/details/${prod.id}`} className="p-i-title">
                  {prod.title}{" "}
                </Link>
                <div className="p-i-price">
                  <span className="old-price">
                    ₼ {Math.floor(+prod.price + 10)}
                  </span>
                  ₼ {prod.price}
                </div>
                <div className="product-item-review-icon pawga">
                  <img src="https://htmldemo.net/dkoor/dkoor/assets/images/icons/star.svg" />
                  <img src="https://htmldemo.net/dkoor/dkoor/assets/images/icons/star.svg" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

const t = (a) => a;
export default connect(t)(Shop);
