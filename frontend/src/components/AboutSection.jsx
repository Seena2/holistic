import {
  FaInfo,
  FaHandshake,
  FaInfoCircle,
  FaBusinessTime,
  FaArrowAltCircleDown,
  FaEye,
} from "react-icons/fa";

import { Link } from "react-router-dom";
function AboutSection() {
  return (
    <section className="about_section">
      <h3 className="section_heading">About Us</h3>
      <div className="section_content">
        <div>
          <FaInfoCircle className="about_icon card_icon" />
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
          <p>
            Holistic Consult and Agribusiness with at least three main service
            areas:
          </p>
          <ul className="bulletPoints">
            <li>Professional consultancy services on projects and programs</li>
            <li>Supply of agri-inputs and agribusiness products</li>
            <li>Capacity building trainings</li>
          </ul>
        </div>
        <div className="cards">
          <div className="card">
            <FaBusinessTime className="card_icon" />
            <h3> Mission </h3>
            <p>
              "To deliver innovative, sustainable, and evidence-based solutions
              that strengthen livestock-based agricultural systems, enhance
              productivity, unlock market potential, and drive profitable
              agribusiness. By empowering livestock economies, we foster
              efficient value chains, create investment opportunities, and
              uplift farmers and enterprises—fueling thriving rural economies
              and resilient communities."
            </p>
          </div>
          <div className="card">
            <FaEye className="card_icon" />
            <h3> Vision </h3>
            <p>
              "A food-secure future driven by empowered farmers, competitive
              enterprises, and sustainable agribusiness practices—where
              profitable, inclusive, and resilient livestock economies nourish
              communities and sustain prosperity for generations to come. of
              agri-inputs and agribusiness products."
            </p>
          </div>
          <div className="card ">
            <FaArrowAltCircleDown className="card_icon" />
            <h3> Core Values </h3>
            <div>
              <ul className="bulletPoints">
                <li>Integrity</li>
                <li>Innovation</li>
                <li>Sustainability</li>
                <li>Partnership</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="btn">
          <Link to="/about" className="btnLarge">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
