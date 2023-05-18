import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import wooshSound from "../sounds/woosh.mp3";
import Footer from "../components/Footer";
import ScrollToTop from "react-scroll-to-top";
import ScrollToTop2 from "../components/ScrollToTop";

function Favorites({ fav, products, dispatch, basket }) {
  function deleteFavItem(id) {
    const newFavorites = fav.filter((favv) => favv.id !== id);
    dispatch({
      type: "SET_FAV",
      payload: newFavorites,
    });
    localStorage.setItem("fav", JSON.stringify(newFavorites));
  }

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
  }

  return (
    <>
      <ScrollToTop smooth />
      <ScrollToTop2 smooth />

      <div className="d__header">
        <Link to="/">ƏSAS SƏHİFƏ</Link>
        <span> / </span>
        <span>Favorilər</span>
      </div>
      {fav.length ? (
        <table className="basketTable container">
          <thead className="basketthead">
            <tr>
              <th className="width-thumbnail"></th>
              <th className="width-name">MƏHSUL</th>
              {/* <th className="width-price">QİYMƏTİ</th> */}
              <th className="width-quantity">Səbətə əlavə et</th>
              <th className="width-subtotal">SİL</th>
              <th className="width-remove"></th>
            </tr>
          </thead>
          <tbody>
            {fav?.map((a) => {
              let favIteminP = products.find((b) => b.id == a.id);
              if (favIteminP) {
                return (
                  <tr key={favIteminP?.id} className="product-table-tr">
                    <td className="product-thumbnail">
                      <a href="">
                        <img src={favIteminP?.image[0]} alt="" />
                      </a>
                    </td>
                    <td className="product-name">
                      <h5>
                        <a href="">{favIteminP?.title}</a>
                      </h5>
                    </td>
                    {/* <td className="product-price">
                    <span>{favIteminP.price} ₼</span>
                  </td> */}
                    {/* <td className="cart-quality">
                    <div>
                      <button onClick={() => increase(index)}>+</button>
                      <input type="text" value={a.count} />
                      <button onClick={() => decrease(index)}>-</button>
                    </div>
                  </td> */}
                    <td className="product-total">
                      <button
                        onClick={() => addBasket(parseInt(a.id), 1)}
                        className="addbasketbuttoninf"
                      >
                        Əlavə et
                      </button>
                    </td>
                    <td className="icon-close">
                      <img
                        onClick={() => deleteFavItem(favIteminP.id)}
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
              <th>FAVORI SEÇMƏMİSƏN BRO</th>
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
        <Link to="/basket">SƏBƏTƏ KEÇ</Link>
      </div>
      <Footer />
    </>
  );
}

const t = (a) => a;
export default connect(t)(Favorites);
// <h1>
//   {favIteminP?.title}{" "}
//   <button onClick={() => deleteFavItem(favIteminP.id)}>sil</button>
// </h1>
