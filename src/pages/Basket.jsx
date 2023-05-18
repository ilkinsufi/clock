import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import Footer from "../components/Footer";

import ScrollToTop from "react-scroll-to-top";
import ScrollToTop2 from "../components/ScrollToTop";

function Basket({ basket, products, dispatch }) {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCountry2, setSelectedCountry2] = useState("");
  const [modal, setModal] = useState(true);
  const [secondmodal, setSecondModal] = useState(true);
  const radioRef = useRef(null);
  const [shippingOption, setShippingOption] = useState("standart");

  const handleShippingOptionChange = (e) => {
    setShippingOption(e.target.value);
  };

  const totalPrice = basket.reduce((accumulator, currentItem) => {
    const itemInBasket = products?.find(
      (product) => product.id === currentItem.id
    );
    return accumulator + itemInBasket?.price * currentItem.count;
  }, 0);

  function handleOutsideClick(event) {
    const isNiceSelect = event.target.closest(".nice-select");
    if (!isNiceSelect) {
      setModal(true);
      setSecondModal(true);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  function deleteItemFromBasket(id) {
    let newBasket = [...basket.filter((a) => a.id !== id)];

    localStorage.setItem("basket", JSON.stringify(newBasket));
    dispatch({
      type: "SET_BASKET",
      payload: newBasket,
    });
  }

  function increase(index) {
    let newBasket = [...basket];
    newBasket[index].count++;
    localStorage.setItem("basket", JSON.stringify(newBasket));
    dispatch({
      type: "SET_BASKET",
      payload: newBasket,
    });
  }

  function decrease(index) {
    let newBasket = [...basket];
    if (newBasket[index].count > 1) {
      // eğer count 1'den büyükse azaltabiliriz
      newBasket[index].count--;
      localStorage.setItem("basket", JSON.stringify(newBasket));
      dispatch({
        type: "SET_BASKET",
        payload: newBasket,
      });
    }
  }

  // function handleSelect(e) {
  //   const selectedValue = e.target.textContent;
  //   const selectSpan = document.querySelector('.nice-select > span');
  //   selectSpan.textContent = selectedValue;
  // }
  function handleCountryClick(event) {
    setSelectedCountry(event.target.textContent);
  }
  function handleCountryClick2(event) {
    setSelectedCountry2(event.target.textContent);
  }

  return (
    <>
      <ScrollToTop smooth />
      <ScrollToTop2 smooth />

      <div className="d__header">
        <Link to="/">ƏSAS SƏHİFƏ</Link>
        <span> / </span>
        <span>Səbət</span>
      </div>
      {basket.length ? (
        <table className="basketTable container">
          <thead className="basketthead">
            <tr>
              <th className="width-thumbnail"></th>
              <th className="width-name">MƏHSUL</th>
              <th className="width-price">QİYMƏTİ</th>
              <th className="width-quantity">SAYI</th>
              <th className="width-subtotal">TOTAL</th>
              <th className="width-remove"></th>
            </tr>
          </thead>
          <tbody>
            {basket.map((a, index) => {
              let itemInBasket = products.find((p) => p.id === a.id);
              if (itemInBasket) {
                return (
                  <tr key={itemInBasket?.id} className="product-table-tr">
                    <td className="product-thumbnail">
                      <a href="">
                        <img src={itemInBasket?.image[0]} alt="" />
                      </a>
                    </td>
                    <td className="product-name">
                      <h5>
                        <a href="">{itemInBasket?.title}</a>
                      </h5>
                    </td>
                    <td className="product-price">
                      <span>{itemInBasket.price} ₼</span>
                    </td>
                    <td className="cart-quality">
                      <div>
                        <button onClick={() => increase(index)}>+</button>
                        <input type="text" value={a.count} />
                        <button onClick={() => decrease(index)}>-</button>
                      </div>
                    </td>
                    <td className="product-total">
                      {itemInBasket &&
                      !Number.isInteger(itemInBasket.price * a.count)
                        ? (itemInBasket.price * a.count).toFixed(2)
                        : itemInBasket.price * a.count}
                      ₼
                    </td>
                    <td className="icon-close">
                      <img
                        onClick={() => deleteItemFromBasket(a.id)}
                        src="https://img.icons8.com/tiny-color/16/null/delete-sign.png"
                      />
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      ) : (
        <table className="basketTable container">
          <thead className="basketthead">
            <tr>
              <th>SƏBƏTİN BOŞDUR BRO</th>
              {/* <th className="width-thumbnail"></th> */}
              {/* <th className="width-name">MƏHSUL</th> */}
              {/* <th className="width-price">QİYMƏTİ</th> */}
              {/* <th className="width-quantity">Səbətə əlavə et</th> */}
              {/* <th className="width-subtotal">SİL</th> */}
              {/* <th className="width-remove"></th> */}
            </tr>
          </thead>
        </table>
      )}
      <div className="container backtoshop">
        <Link to="/shop">MAĞAZAYA QAYIT</Link>
        <Link to="/favorites">FAVORİLƏRƏ BAX</Link>
      </div>
      {basket.length ? (
        <div className="basketrow container">
          <div>
            <h4>Göndəriş adresi</h4>

            <div
              className="nice-select"
              onClick={() => {
                setSecondModal(!secondmodal);
                setModal(true);
              }}
            >
              <span>{selectedCountry || "Azərbaycan"}</span>
              <img
                style={
                  !secondmodal
                    ? { transform: "rotate(180deg)" }
                    : { transform: "rotate(0deg)" }
                }
                className="niceseleceimg"
                src="https://img.icons8.com/plumpy/24/null/expand-arrow.png"
              />
              <ul className={!secondmodal ? "aktif" : ""}>
                <li
                  className={selectedCountry === "Azərbaycan" ? "selected" : ""}
                  onClick={handleCountryClick}
                >
                  Azərbaycan
                </li>
                <li
                  className={selectedCountry === "Türkiyə" ? "selected" : ""}
                  onClick={handleCountryClick}
                >
                  Türkiyə
                </li>
                <li
                  className={selectedCountry === "Suriya" ? "selected" : ""}
                  onClick={handleCountryClick}
                >
                  Suriya
                </li>
                <li
                  className={selectedCountry === "Əfqanıstan" ? "selected" : ""}
                  onClick={handleCountryClick}
                >
                  Əfqanıstan
                </li>
                <li
                  className={selectedCountry === "İran" ? "selected" : ""}
                  onClick={handleCountryClick}
                >
                  İran
                </li>
              </ul>
            </div>

            <div
              className="nice-select"
              onClick={() => {
                setSecondModal(true);
                setModal(!modal);
              }}
            >
              <span>{selectedCountry2 || "Bakı"}</span>
              <img
                style={
                  !modal
                    ? { transform: "rotate(180deg)" }
                    : { transform: "rotate(0deg)" }
                }
                className="niceseleceimg"
                src="https://img.icons8.com/plumpy/24/null/expand-arrow.png"
              />
              <ul className={!modal ? "aktif" : ""}>
                <li
                  className={selectedCountry2 === "Bakı" ? "selected" : ""}
                  onClick={handleCountryClick2}
                >
                  Bakı
                </li>
                <li
                  className={selectedCountry2 === "İstanbul" ? "selected" : ""}
                  onClick={handleCountryClick2}
                >
                  İstanbul
                </li>
                <li
                  className={selectedCountry2 === "Dəməşq" ? "selected" : ""}
                  onClick={handleCountryClick2}
                >
                  Dəməşq
                </li>
                <li
                  className={selectedCountry2 === "Kabul" ? "selected" : ""}
                  onClick={handleCountryClick2}
                >
                  Kabul
                </li>
                <li
                  className={selectedCountry2 === "Tehran" ? "selected" : ""}
                  onClick={handleCountryClick2}
                >
                  Tehran
                </li>
              </ul>
            </div>

            <input
              type="text"
              placeholder="Şəhər / Qəsəbə"
              className="nice-select teinput"
            />
            <input
              type="text"
              placeholder="Poçt / Zip"
              className="yppsss nice-select teinput"
            />

            <Link className="linkbaskett" to="/basket">
              Yenilə
            </Link>
          </div>

          <div>
            <h4>Kupon</h4>
            <p className="discountBasket">Kuponunuz varsa qeyd edin</p>
            <input
              type="text"
              placeholder="Kupon kodu"
              className="yppsss nice-select teinput"
            />
            <Link className="linkbasket" to="/basket">
              Təstiqlə
            </Link>
          </div>

          <div>
            <div className="grand-total-content">
              <h5>
                Məhsulların dəyəri
                <span> ₼ {(totalPrice + 1).toFixed(2)}</span>
              </h5>
              <div className="grand-shipping">
                <span>Göndəriş üsulu</span>
                <ul>
                  <li>
                    <input
                      checked
                      type="radio"
                      name="shipping"
                      value="standart"
                      onChange={handleShippingOptionChange}
                    />
                    <label htmlFor="shipping"></label>Gəmi ilə + 10 ₼
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="shipping"
                      value="magazadan"
                      onChange={handleShippingOptionChange}
                    />
                    <label htmlFor="shipping"></label>Təyyarə ilə + 150 ₼
                  </li>
                </ul>
              </div>
              <div className="shipping-country">
                <p>Göndərilən ölkə {selectedCountry || "Azərbaycan"}</p>
              </div>
              <div className="grand-totalll">
                Yekun ödəniş
                <span>
                  ₼
                  {shippingOption === "standart"
                    ? (totalPrice + 11).toFixed(2)
                    : (totalPrice + 151).toFixed(2)}
                </span>
              </div>
            </div>

            <div className="grand-total-btn">
              <Link to={"/not-found"}>ÖDƏNİŞ ET</Link>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <Footer />
    </>
  );
}

const t = (a) => a;
export default connect(t)(Basket);
