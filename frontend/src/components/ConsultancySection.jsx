import { FaHandshake, FaInfoCircle, FaTable } from "react-icons/fa";
import consultancy from "/images/consulting1.jpg";
import monitoring from "/images/monitoring1.jpg";
import policy from "/images/policy.jpg";
import Card from "./CardImage";
const cardData = [
  {
    title: "",
    description: "Project design and feasibility studies",
    // image: <FaHandshake/>, //if you want to use image, import it to the file and palce the import name in {}
    image: consultancy,
    link: "/services#consultancy",
  },
  {
    title: "",
    description: "	Monitoring, evaluation, and impact assessment",
    image: monitoring,
    link: "/services#consultancy",
  },
  {
    title: "",
    description: " Policy and strategy advisory services",
    image: policy,
    link: "/services#consultancy",
  },
];

function ConsultancySection() {
  return (
    <section className="consultancy_section">
      <h4 className="subtitle">Professional Consultancy</h4>
      <h4 className="quote">
        We provide high-level technical and managerial expertise for projects
        and programs in agriculture, livestock, and rural development.
      </h4>
      <div className="cards">
        <Card
          title={cardData[0].title}
          description={cardData[0].description}
          image={cardData[0].image}
          link={cardData[0].link}
        />
        <Card
          title={cardData[1].title}
          description={cardData[1].description}
          image={cardData[1].image}
          link={cardData[1].link}
        />
        <Card
          title={cardData[2].title}
          description={cardData[2].description}
          image={cardData[2].image}
          link={cardData[2].link}
        />
      </div>
    </section>
  );
}

export default ConsultancySection;
