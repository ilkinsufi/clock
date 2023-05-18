import { Link } from "react-router-dom";
import BestSelling from "../components/BestSelling";
import ClientReview from "../components/ClientReview";
import Footer from "../components/Footer";
import ScrollToTop from "react-scroll-to-top";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  return (
    <>
      <ScrollToTop smooth />

      <div className="d__header">
        <Link to="/">ƏSAS SƏHİFƏ</Link>
        <span> / </span>
        <span>HAQQIMIZDA</span>
      </div>
      <div className="bestselling container">
        <div data-aos="fade-right" className="twin">
          <img src="https://htmldemo.net/dkoor/dkoor/assets/images/photos/faq.png" />
        </div>
        <div data-aos="fade-left" className="best_right defaultreandom">
          <h2 className="righth2">Biz kimik</h2>
          <p>
            1996- cı ildə fəliyyətə başlayan İlk yerli mebel brendi olan Dekor
            müştəri yönümlü strategiyasını özünün əsas prinsipi olaraq seçmiş və
            bu istiqamətdə əsaslı işləri görməyə davam edir. Mebeldə arzulanan
            tərzi duya bilmək üçün keyfiyyət sistemini yeniləyərək, xidmət
            səviyyəsini daha yüksək pilləyə qaldırmışdır.
          </p>
          <p>
            bu istiqamətdə əsaslı işləri görməyə davam edir. Mebeldə arzulanan
            tərzi duya bilmək üçün keyfiyyət sistemini yeniləyərək, xidmət
            səviyyəsini daha yüksək pilləyə qaldırmışdır.
          </p>
          <p>
            tərzi duya bilmək üçün keyfiyyət sistemini yeniləyərək, xidmət
            səviyyəsini daha yüksək pilləyə qaldırmışdır.
          </p>
        </div>
      </div>
      <ClientReview />
      <h5 data-aos="zoom-out" className="title_h fdsfdsffdsfsd">Komandamız</h5>
      <h4 data-aos="zoom-out" className="explore_h fdsfewfdf">Lorem, ipsum dolor.</h4>
      <div className="crew container">
        <div data-aos="zoom-in-right">
          <img
            src="https://htmldemo.net/dkoor/dkoor/assets/images/team/team-1.jpg"
            alt=""
          />
          <h4>Fərid Mütəllimov</h4>
          <p>Keşiş</p>
        </div>
        <div data-aos="zoom-out">
          <img
            src="https://htmldemo.net/dkoor/dkoor/assets/images/team/team-4.jpg"
            alt=""
          />
          <h4>Faiq Qasımlı</h4>
          <p>Dart Vader</p>
        </div>
        <div data-aos="zoom-in-left">
          <img
            src="https://htmldemo.net/dkoor/dkoor/assets/images/team/team-3.jpg"
            alt=""
          />
          <h4>Emin Süleymanov</h4>
          <p>Anbardar</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
