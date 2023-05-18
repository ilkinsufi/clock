import React from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import wooshSound from "../sounds/woosh.mp3";
import ProductTab2 from "../components/ProductTab2";
import ScrollToTop from "react-scroll-to-top";
import ScrollToTop2 from "../components/ScrollToTop";
import Footer from "../components/Footer";

function Details({ dispatch, basket }) {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [productCount, setProductCount] = useState(1);

  const [activeButton, setActiveButton] = useState(0);
  const [selectedDiv, setSelectedDiv] = useState("acilama");

  const handleIncrement = () => {
    setProductCount(productCount + 1);
  };

  const handleDecrement = () => {
    if (productCount > 1) {
      setProductCount(productCount - 1);
    } else {
      setProductCount(1);
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
    setProductCount(1);
  }

  const handleButtonClick = (buttonIndex, divToShow) => {
    setActiveButton(buttonIndex);
    setSelectedDiv(divToShow);
  };

  useEffect(() => {
    fetch(`https://api.npoint.io/9d132f6040324e22caba/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, [id]);

  return (
    <>
      <ScrollToTop2 smooth />

      <ScrollToTop smooth />
      <div className="d__header">
        <Link to="/">ƏSAS SƏHİFƏ</Link>
        <span> / </span>
        <span>MƏHSUL DETALLARI</span>
      </div>

      <div className="dModalInside fdsfsdfsdfqw container">
        <div>
          <img className="dPhoto" src={data?.image && data?.image[0]} alt="" />{" "}
        </div>
        <div>
          <h1>{data?.title}</h1>
          <h2>
            ₼ {parseFloat(data?.price)}
            <span className="forColor">₼ {Math.floor(+data?.price + 20)}</span>
          </h2>

          <ul>
            <li>
              <span>Kateqoriya:</span>
              <span>{data?.category}</span>
            </li>
            <li>
              <span>Stok vəziyyəti</span>
              <span>{Math.ceil(2.9 * data.id)}</span>
            </li>
            <li className="randomforclass">
              <span>Ölçü:</span>
              <span className="p_colors">
                <p className="fdsfdsdfdsa">M</p>
              </span>
            </li>
            <li className="randomforclass">
              <span>Rəngi:</span>
              <span className="p_colors">
                <div style={{ backgroundColor: data.color }}></div>
              </span>
            </li>
            <li className="randomforclass">
              <p className="fdsfdsdfs">{data.description}</p>
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
              <button onClick={() => addBasket(data.id, productCount)}>
                SƏBƏTƏ ƏLAVƏ ET
              </button>
            </div>
          </div>
          <Link to="/basket" className="səbəbbb" href="#">
            SƏBƏTƏ KEÇ
          </Link>
          <ul>
            <li>
              <span>Kateqoriyas:</span>
              <span></span>
              <span>{data.category}</span>
            </li>
            <li>
              <span>Teqlər:</span>
              <span></span>
              <span>kreslolar</span>,<span> divanlar</span>,<span> yumşaq</span>
              ,<span> stullar</span>
            </li>
            <li className="asdf">
              <span>Paylaş</span>
              <div className="asFace"></div>
              <div className="astwi"></div>
              <div className="asreddi"></div>
            </li>
            <p className="grewwe">Güvənli ödəniş</p>
            <img
              src="https://htmldemo.net/dkoor/dkoor/assets/images/photos/payment.png"
              alt=""
            />
          </ul>
        </div>
      </div>

      <div className="fersx container">
        <div>
          <span
            className={activeButton === 0 ? "active" : ""}
            onClick={() => handleButtonClick(0, "acilama")}
          >
            Açıqlama
          </span>
          <span
            className={activeButton === 1 ? "active" : ""}
            onClick={() => handleButtonClick(1, "olcu")}
          >
            Ölçülər haqqında
          </span>
        </div>
        <div
          className="fsdgtrgdf"
          style={{ display: selectedDiv === "acilama" ? "block" : "none" }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
          cumque dicta. quos! Repellat temporibus fugiat et ab exercitationem
          doloribus fugit quos! Repellat temporibus fugiat et ab exercitationem
          doloribus fugit
        </div>
        <div
          className="fsdgtrgdf"
          style={{ display: selectedDiv === "olcu" ? "block" : "none" }}
        >
          os! Repellat temporibus fugiat et ab exercitationem doloribus fugit
          cumque dicta. quos! Repellat temporibus fugiat et ab exercitationem
          doloribus fugit cumque dicta. quos! Repellat temporibus fugiat et ab
          exercitationem doloribus fugit cumque dicta. quos! Repellat temporibus
          fugiat et ab exercitationem doloribus fugit cumque dicta.
        </div>
      </div>

      <h6 className="title_h fdsfsddasds">Bənzər məhsullar</h6>
      <ProductTab2 />
      <Footer />
    </>
  );
}

const t = (a) => a;
export default connect(t)(Details);
