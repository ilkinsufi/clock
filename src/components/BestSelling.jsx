import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function BestSelling() {
  const [rowOpen, setRowOpen] = useState([false, false, false, false, false]);

  function openRow(index) {
    const newRowOpen = [...rowOpen];
    newRowOpen.forEach((value, i) => {
      newRowOpen[i] = i === index ? !value : false;
    });
    setRowOpen(newRowOpen);
  }

  // function openRow(index) {
  //   const newRowOpen = [...rowOpen];
  //   newRowOpen[index] = !newRowOpen[index];
  //   setRowOpen(newRowOpen);
  // }

  // function openRow(index) {
  //   const newRowOpen = [false, false, false, false, false];
  //   newRowOpen[index] = true;
  //   setRowOpen(newRowOpen);
  // }
  return (
    <div className="bestselling container">
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="twin"
      >
        <img src="https://htmldemo.net/dkoor/dkoor/assets/images/photos/faq.png" />
      </div>

      <div
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="best_right"
      >
        <div
          onClick={() => openRow(0)}
          className={rowOpen[0] ? "fitstRow active" : "fitstRow"}
        >
          <h2>
            Necə sifariş elə bilərəm? <span>{rowOpen[0] ? "-" : "+"}</span>
          </h2>
          <div className={rowOpen[0] ? "innerRow active" : "innerRow"}>
            Məhsulu səbətə əlavə etdikdən sonra "sifariş et" butonuna klik
            etməyiniz kifayətdir
          </div>
        </div>
        <div
          onClick={() => openRow(1)}
          className={rowOpen[1] ? "fitstRow active" : "fitstRow"}
        >
          <h2>
            Bütün məhsulları necə görə bilərəm?{" "}
            <span>{rowOpen[1] ? "-" : "+"}</span>
          </h2>
          <div className={rowOpen[1] ? "innerRow active" : "innerRow"}>
            "Bütün məhsullar" bölməsinə keçid edərək görə bilərsiz
          </div>
        </div>
        <div
          onClick={() => openRow(2)}
          className={rowOpen[2] ? "fitstRow active" : "fitstRow"}
        >
          <h2>
            Məlumatlarım qorunur? <span>{rowOpen[2] ? "-" : "+"}</span>
          </h2>
          <div className={rowOpen[2] ? "innerRow active" : "innerRow"}>
            Bəli, bütün şəxsi məlumatlarınız qorunur
          </div>
        </div>
        <div
          onClick={() => openRow(3)}
          className={rowOpen[3] ? "fitstRow active" : "fitstRow"}
        >
          <h2>
            Necə giriş edə bilərəm? <span>{rowOpen[3] ? "-" : "+"}</span>
          </h2>
          <div className={rowOpen[3] ? "innerRow active" : "innerRow"}>
            "Bütün məhsullar" bölməsinə keçid edərək görə bilərsiz
          </div>
        </div>
        <div
          onClick={() => openRow(4)}
          className={rowOpen[4] ? "fitstRow active" : "fitstRow"}
        >
          <h2>
            Şifrəmi necə dəyişə bilərəç? <span>{rowOpen[4] ? "-" : "+"}</span>
          </h2>
          <div className={rowOpen[4] ? "innerRow active" : "innerRow"}>
            "Bütün məhsullar" bölməsinə keçid edərək görə bilərsiz
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSelling;
