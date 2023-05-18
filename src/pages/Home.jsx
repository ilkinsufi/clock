import Features from "../components/Features";
import Hero from "../components/Hero";
import ProductTabContent from "../components/ProductTabContent";
import Sale from "../components/Sale";
import "swiper/css";
import "swiper/css/pagination";
import ProductTab2 from "../components/ProductTab2";
import BestSelling from "../components/BestSelling";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import FourCol from "../components/FourCol";
import ClientReview from "../components/ClientReview";
import ScrollToTop from "react-scroll-to-top";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  return (
    <>
      <ScrollToTop smooth />

      <Hero />
      <Features />
      <h5 data-aos="fade-down" className="explore_h">MƏHSULLARI KƏŞF ET</h5>
      <h2 data-aos="fade-down" className="title_h">Müxtəlif Məhsullar</h2>
      <ProductTabContent />
      <Sale />
      <h4 data-aos="fade-up" className="explore_h">MƏHSULLARI KƏŞF ET</h4>
      <h5 data-aos="fade-up" className="title_h">Önə Çıxanlar</h5>
      <ProductTab2 />
      <h5 data-aos="fade-up" className="title_h ggdfggf">Seçilən Məhsullar</h5>
      <FourCol />
      <ClientReview />
      <BestSelling />
      <h5 data-aos="fade-up" className="title_h">Son Yazılar</h5>
      <Blogs />
      <Footer />
    </>
  );
}

export default Home;
