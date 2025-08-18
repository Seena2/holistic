import { FaInfo, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
function AboutSection() {
  return (
    <section className="aboutSection">
      <h3 className="heading_title">About Us</h3>
      <div className="col2">
        <div>
          <FaInfoCircle className="about_icon" />
        </div>
        <div className="info">
          <p>
            <strong>Holistic Consult and Agribusiness</strong> is a leading
            professional service provider in the agriculture and livestock
            sector. With decades of combined expertise, we partner with clients
            to design, implement, and scale impactful agricultural programs,
            lead research and knowledge management practices.
          </p>
          <p>
            At the heart of our mission is the belief that livestock are more
            than just assets—they are the backbone of rural prosperity, the
            drivers of vibrant agribusiness, and a cornerstone of global food
            security. By empowering livestock economies, we spark innovation,
            strengthen market linkages, and create opportunities that uplift
            communities. Our approach integrates sustainable practices with
            forward-thinking enterprise, ensuring that productivity today does
            not come at the cost of tomorrow’s resources. With livestock at the
            core, we are building resilient food systems that can withstand
            challenges, adapt to change, and nourish generations to come.
          </p>

          <Link to="/about">
            <button>Learn More</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
