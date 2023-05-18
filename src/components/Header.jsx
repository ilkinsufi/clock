import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import logo from "../Images/logo.jpg";
import { connect } from "react-redux";
import bruhSound from "../sounds/bruh.mp3";
import hotGif from "../Images/hot.gif";

function Header({ products, basket, dispatch }) {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [asideModal, setAsideModal] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [shopModal, setShopModal] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState("");
  const [searchText, setSearchText] = useState("");

  const containerRef = useRef(null);

  // ...

  function handleSearchTextChange(event) {
    const text = event.target.value;
    setSearchText(text);
    console.log("salam");
  }
  const filteredProducts = products.filter((product) => {
    if (!product) {
      return false;
    }
    const name = product.title?.toLowerCase();
    return name?.includes(searchText.toLowerCase()) || false;
  });

  function deleteItemFromBasket(id) {
    let newBasket = [...basket.filter((a) => a.id !== id)];
    const bruh = new Audio(bruhSound);
    bruh.play();
    localStorage.setItem("basket", JSON.stringify(newBasket));
    dispatch({
      type: "SET_BASKET",
      payload: newBasket,
    });
  }

  useEffect(() => {
    setTotalItems(basket?.reduce((total, current) => total + current.count, 0));
  }, [basket]);

  useEffect(() => {
    const storedBasket = JSON.parse(localStorage.getItem("basket"));
    if (storedBasket) {
      dispatch({
        type: "SET_BASKET",
        payload: storedBasket,
      });
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".header__right")) {
        setIsActive(false);
      }
    });
  }, []);

  // useEffect(() => {
  //   if (Array.isArray(basket)) {
  //     const total = basket.reduce((acc, curr) => {
  //       const item = products?.find((p) => p.id === curr.id);
  //       return acc + item?.price * curr.count;
  //     }, 0);
  //     setTotalPrice(total);
  //   }
  // }, [basket, products]);
  useEffect(() => {
    if (Array.isArray(basket)) {
      const total = basket.reduce((acc, curr) => {
        const item = products?.find((p) => p.id === curr.id);
        return acc + item?.price * curr.count;
      }, basket.length);
      setTotalPrice(total);
    }
  }, [basket, products]);

  function closeShopModal(e) {
    if (e.target.classList.contains("shop_modal")) {
      setShopModal(!shopModal);
    }
  }

  function toggleShopModal() {
    setShopModal(!shopModal);
  }

  useEffect(() => {
    containerRef.current.style.height = `${containerRef.current.scrollHeight}px`;
  }, [filteredProducts]);
  function asideClose(e) {
    if (e.target.classList.contains("aside")) {
      setAsideModal(!asideModal);
    }
  }

  function handleAside() {
    setAsideModal(!asideModal);
  }

  function handleSearch() {
    setShowSearchModal(!showSearchModal);
  }
  function handleClose(e) {
    if (e.target.classList.contains("search__modal")) {
      setShowSearchModal(!showSearchModal);
    }
  }

  return (
    <>
      <div
        onClick={asideClose}
        className={asideModal ? "aside" : "aside active"}
      >
        <div className="aside_i">
          <div className="aside_form">
            <form className="s_form" action="№">
              <input type="text" placeholder="Axtarış edin" />
              <button className="aside_btn">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>

          <hr />

          <NavLink
            onClick={handleAside}
            style={{
              fontSize: "14px",
              display: "block",
              paddingTop: "13px",
              color: "#06264b",
            }}
            to="/"
          >
            Əsas səhifə
          </NavLink>
          <NavLink
            onClick={handleAside}
            style={{
              fontSize: "14px",
              display: "block",
              paddingTop: "13px",
              color: "#06264b",
            }}
            to="/blog"
          >
            Bloq
          </NavLink>
          <NavLink
            onClick={handleAside}
            style={{
              fontSize: "14px",
              display: "block",
              paddingTop: "13px",
              color: "#06264b",
            }}
            to="/shop"
          >
            Mağaza
          </NavLink>
          <NavLink
            onClick={handleAside}
            style={{
              fontSize: "14px",
              display: "block",
              paddingTop: "13px",
              color: "#06264b",
            }}
            to="/contact"
          >
            Əlaqə
          </NavLink>
          <NavLink
            onClick={handleAside}
            style={{
              fontSize: "14px",
              display: "block",
              paddingTop: "13px",
              color: "#06264b",
            }}
            to="/about"
          >
            Haqqımızda
          </NavLink>
        </div>
      </div>
      <div
        onClick={closeShopModal}
        className={shopModal ? "shop_modal active" : "shop_modal"}
      >
        <div className="shop_modal_top">
          <h3 style={{ border: totalPrice ? "" : "0px" }}>
            SƏBƏT {basket.length ? "" : "boşdur lələ"}
          </h3>
          <div className="line"></div>
          <ul>
            {basket.map((a) => {
              let itemInBasket = products.find((p) => p.id === a.id);
              if (itemInBasket) {
                return (
                  <li key={itemInBasket?.id}>
                    <div>
                      <div>
                        <img
                          className="basket_img"
                          src={itemInBasket?.image[0]}
                        />
                      </div>
                      <div className="for-padding">
                        <p>{itemInBasket?.title}</p>
                        <span>{a.count}</span>
                        <span>x</span>
                        <span>{itemInBasket?.price} ₼</span>
                      </div>
                    </div>

                    <div
                      onClick={() => deleteItemFromBasket(a.id)}
                      className="deleteBasketItem"
                    >
                      <i className="fa-solid fa-ban"></i>
                    </div>
                  </li>
                );
              }
            })}
          </ul>
          {totalPrice ? <div className="line2"></div> : ""}
          <div className="totall">
            {totalPrice ? <span>Total:</span> : ""}
            {totalPrice ? <span>{totalPrice.toFixed(2) - 1} ₼</span> : ""}
          </div>
          {totalPrice ? <div className="line2"></div> : ""}
          {totalPrice ? (
            <Link onClick={toggleShopModal} to="/basket">
              SƏBƏTƏ KEÇ
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>

      <div
        onClick={handleClose}
        className={showSearchModal ? "search__modal" : "search__modal active"}
      >
        <div className="s_m_top" ref={containerRef}>
          <p>Açar söz qeyd edin </p>
          <form
            action=""
            method="post"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div>
              <input
                type="text"
                placeholder="Bütün məhsullar içərisindən axtar..."
                value={searchText}
                onChange={handleSearchTextChange}
              />
              <button onClick={handleSearch}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>
          <span
            style={{ opacity: searchText ? "0" : "1" }}
            className="fdssfsdffd"
          >
            Ən çox axtarılan məhsullar <img className="gwerfef" src={hotGif} />
          </span>
          <ul className="resultsUl smooth-transition">
            {filteredProducts.slice(0, 2).map((product) => (
              <li key={product.id}>
                <Link to={`details/${product.id}`}>
                  <img
                    onClick={() => setShowSearchModal(false)}
                    className="gfereqwwe"
                    src={product.image[0]}
                    alt=""
                  />
                </Link>
                <div>
                  <div>{product.title}</div>
                  <div className="fdsfsdasqü">₼ {product.price}</div>
                  <div className="fdsfdsfsd">
                    Rəngi:{" "}
                    <div
                      style={{ backgroundColor: product.color }}
                      className="fsddasds"
                    ></div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <header>
        <div className="header__main container">
          <div className="logo">
            <Link to="/">
              <img src={logo} />
            </Link>
          </div>
          <ul>
            <li>
              <NavLink to="/">Əsas səhifə</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Bloq</NavLink>
            </li>
            <li className="has_dropdown">
              <NavLink to="/shop">Mağaza</NavLink>

              {/* <ul className="dropdown">
                <li>
                  <a href="">Hamısı</a>
                </li>
                <li>
                  <a href="">Stullar</a>
                </li>
                <li>
                  <a href="">Dekorlar</a>
                </li>
              </ul> */}
            </li>
            <li>
              <NavLink to="/contact">Əlaqə</NavLink>
            </li>
            <li>
              <NavLink to="/about">Haqqımızda</NavLink>
            </li>
          </ul>
          <div className="header__right">
            <i className="fa-solid fa-heart heartHeader">
              <Link to={"/favorites"}>d</Link>
            </i>

            <i
              onClick={handleSearch}
              className="fa-solid fa-magnifying-glass"
            ></i>

            <i onClick={toggleShopModal} className="fa-solid fa-cart-shopping">
              {basket.length ? <div className="forabs">{totalItems}</div> : ""}
              {totalPrice ? (
                <span className="total">
                  ₼ {totalPrice ? (totalPrice - 1).toFixed(2) : "0"}
                </span>
              ) : (
                ""
              )}
            </i>

            <i
              onClick={() => setIsActive(!isActive)}
              className={"fa-solid fa-gear"}
            ></i>

            <div className={`gear_dropdown ${isActive ? "active" : ""}`}>
              <h6 className="g_h">Hesab</h6>
              <ul>
                <li>
                  {" "}
                  <Link onClick={() => setIsActive(false)} to="/account">
                    Giriş
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link onClick={() => setIsActive(false)} to="/account">
                    Qeydiyyatdan keç
                  </Link>
                </li>
                {/* <li> <Link to="/login">Giriş</Link></li> */}
              </ul>
            </div>

            <i onClick={handleAside} className="fa-solid fa-bars"></i>
          </div>
        </div>
      </header>
    </>
  );
}
const t = (a) => a;
export default connect(t)(Header);
