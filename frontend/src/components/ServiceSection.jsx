import { FaHandshake, FaInfoCircle, FaTable } from "react-icons/fa";
import consultancy from "/images/consulting1.jpg";
import products from "/images/product3.jpg";
import training from "/images/training.jpg";
import Card from "./CardImage";
const cardData = [
  {
    title: "Consultancy",
    description: "Professional consultancy services on projects and programs.",
    // image: <FaHandshake/>, //if you want to use image, import it to the file and palce the import name in {}
    image: consultancy,
  },
  {
    title: "Training",
    description: "Carefully curated capacity building trainings",
    image: training,
  },
  {
    title: "Products",
    description: " Supply of agri-inputs, tools and agribusiness products.",
    image: products,
  },
];

function ServiceSection() {
  return (
    <section className="service_section">
      <h3 className="section_heading">Services and Products</h3>
      <div className="cards">
        <Card
          title={cardData[0].title}
          description={cardData[0].description}
          image={cardData[0].image}
        />
        <Card
          title={cardData[1].title}
          description={cardData[1].description}
          image={cardData[1].image}
        />
        <Card
          title={cardData[2].title}
          description={cardData[2].description}
          image={cardData[2].image}
        />
      </div>
    </section>
  );
}

export default ServiceSection;
