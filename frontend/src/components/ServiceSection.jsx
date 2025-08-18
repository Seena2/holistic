import { FaHandshake, FaInfoCircle, FaTable } from "react-icons/fa";
import Card from "./Card";

function ServiceSection() {
  const cardData = [
    {
      title: "Consultancy",
      description:
        "Professional consultancy services on projects and programs.",
      // image: <FaHandshake/>, //if you want to use image, import it to the file and palce the import name in {}
      image: <FaHandshake className="card_icon" />,
    },
    {
      title: "Products",
      description: "Supply of agri-inputs and agribusiness products.",
      image: <FaInfoCircle className="card_icon" />,
    },
    {
      title: "Training",
      description: "Capacity building trainings",
      image: <FaTable className="card_icon" />,
    },
  ];
  return (
    <div>
      <h3 className="heading_title">Our Services</h3>
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
    </div>
  );
}

export default ServiceSection;
