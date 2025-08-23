import { FaHandshake, FaInfoCircle, FaTable } from "react-icons/fa";
import { Link } from "react-router-dom";
import training from "/images/training.jpg";
import Card from "./CardImage";

function TrainingSection() {
  return (
    <section className="training">
      <h4 className="subtitle">Capacity Building and Training</h4>
      <div className="trainingsCard card">
        <div>
          <h4 className="quote">
            "We equip farmers, cooperatives, and agribusiness professionals with
            the skills they need to excel - Agribusiness management training and
            post-harvest handling and value addition"
          </h4>
          <div className="btn">
            <Link to="/services#training" className="btnLarge">
              Learn More
            </Link>
          </div>
        </div>
        <div>
          <img src={training} alt="training farmers" />
        </div>
      </div>
    </section>
  );
}

export default TrainingSection;
