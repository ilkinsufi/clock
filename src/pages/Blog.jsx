import { connect } from "react-redux";
import Blogs from "../components/Blogs";
import ScrollToTop from "react-scroll-to-top";
import ScrollToTop2 from "../components/ScrollToTop";

function Blog({ products }) {
  return (
    <div>
      <ScrollToTop smooth />
      <ScrollToTop2 smooth />

      <Blogs />
    </div>
  );
}

const t = (a) => a;
export default connect(t)(Blog);
