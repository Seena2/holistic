import { FaHandshake, FaInfoCircle, FaTable } from "react-icons/fa";
import seeds from "/images/seeds.jpg";
import animalFeed from "/images/animalFeed.jpg";
import tools from "/images/tools.png";
import Card from "./CardImage";
const cardData = [
  {
    title: "Seeds",
    description: "Improved seeds and planting materials ",
    // image: <FaHandshake/>, //if you want to use image, import it to the file and palce the import name in {}
    image: seeds,
    link: "/products#seeds",
  },
  {
    title: "Animal feed",
    description: "Veterinary supplies and animal feed ",
    image: animalFeed,
    link: "/products#feed",
  },
  {
    title: "Tools",
    description: "Farm tools and irrigation equipment ",
    image: tools,
    link: "/products#tools",
  },
];

function SupplySection() {
  return (
    <section className="consultancy_section">
      {/* <h4 className="subtitle"> Supply of Agri-Inputs and Agribusiness Products</h4> */}
      <h4 className="quote">
        We ensure farmers and agribusinesses have access to high-quality,
        affordable inputs and market-ready products.
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

export default SupplySection;
