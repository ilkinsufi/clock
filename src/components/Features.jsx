import AOS from "aos";
import "aos/dist/aos.css";
function Features() {
  return (
    <div className="features container">
      <div data-aos="flip-right" className="f_first">
        <div>
          <img
            src="https://htmldemo.net/dkoor/dkoor/assets/images/icons/1.png"
            alt=""
          />
        </div>
        <div>
          <h4>Pulsuz Çatdırılma</h4>
          <p>Məhsullar pulsuz çatdırılır</p>
        </div>
      </div>
      <div data-aos="flip-right" className="f_second">
        <div>
          <img
            src="https://htmldemo.net/dkoor/dkoor/assets/images/icons/2.png"
            alt=""
          />
        </div>
        <div>
          <h4>24/7 Dəstək</h4>
          <p>Günün 24 saatı dəstək</p>
        </div>
      </div>
      <div data-aos="flip-right" className="f_third">
        <div>
          <img
            src="https://htmldemo.net/dkoor/dkoor/assets/images/icons/3.png"
            alt=""
          />
        </div>
        <div>
          <h4>Güvənli ödəniş</h4>
          <p>Günvənliyiniz güvənliyimizdir</p>
        </div>
      </div>
      <div data-aos="flip-right" className="f_forth">
        <div>
          <img
            src="https://htmldemo.net/dkoor/dkoor/assets/images/icons/4.png"
            alt=""
          />
        </div>
        <div>
          <h4>Geri Qaytarma</h4>
          <p>Qaytarma Pulsuzdur</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
