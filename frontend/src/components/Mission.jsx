import {
  FaHandshake,
  FaInfoCircle,
  FaBusinessTime,
  FaArrowAltCircleDown,
  FaEye,
} from "react-icons/fa";
import Card from "./Card";

function Mission() {
  const cardData = [
    {
      title: "Mission",
      description:
        "To deliver innovative, sustainable, and evidence-based solutions that strengthen livestock-based agricultural systems, enhance productivity, unlock market potential, and drive profitable agribusiness. By empowering livestock economies, we foster efficient value chains, create investment opportunities, and uplift farmers and enterprises—fueling thriving rural economies and resilient communities.",
      image: <FaBusinessTime className="card_icon" />,
    },
    {
      title: "Vision",
      description:
        "A food-secure future driven by empowered farmers, competitive enterprises, and sustainable agribusiness practices—where profitable, inclusive, and resilient livestock economies nourish communities and sustain prosperity for generations to come. of agri-inputs and agribusiness products.",
      image: <FaEye className="card_icon" />,
    },
    {
      title: "Core Values",
      description: `•	Integrity
•	Innovation
•	Sustainability
•	Partnership
`,
      image: <FaArrowAltCircleDown className="card_icon" />,
    },
  ];
  return (
    <section>
      <h3 className="heading_title"></h3>
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

export default Mission;
