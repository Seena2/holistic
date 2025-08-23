import {
  FaInfo,
  FaHandshake,
  FaInfoCircle,
  FaBusinessTime,
  FaArrowAltCircleDown,
  FaEye,
} from "react-icons/fa";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ProductsSection from "../components/ProductsSection";
import Gallary from "../components/Gallary";
import Books from "../components/Books";

function Library() {
  //initialize the location hook
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Optional: smooth scrolling
      }
    }
  }, [location.hash]);
  return (
    <div className="page">
      <h3 className="section_heading">Gallary</h3>

      <section id="galary">
        <div className="section_content">
          {/* <h4 className="subtitle">Professional and consultancy services</h4> */}
          <Gallary />
        </div>
      </section>
      <h3 className="section_heading">Books</h3>
      <section id="books">
        <div className="section_content">
          <Books />
        </div>
      </section>
    </div>
  );
}

export default Library;
