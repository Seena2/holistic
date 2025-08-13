import Card from "./Card";
import reserch from "../assets/images/research.jpeg";
import training from "../assets/images/training.jpeg";
import consulting from "../assets/images/consult.jpeg";

function CardContainer() {
  const cardData = [
    {
      title: "Research",
      description:
        "We offer a variety of services to help you achieve your goals.",
      image: { reserch },
    },
    {
      title: "Trainings",
      description: "We provide training programs to enhance your skills.",
      image: { training },
    },
    {
      title: "Consulting",
      description:
        "Our experts are here to guide you to achieve your goal. trust us",
      image: { consulting },
    },
  ];
  return (
    <div className="card-container">
      <h2 className="heading_title"> Our Services</h2>
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

export default CardContainer;
