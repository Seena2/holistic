import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import ConsultancySection from "../components/ConsultancySection";
import TrainingSection from "../components/TrainingSection";
import SupplySection from "../components/SupplySection";
import ProductsSection from "../components/ProductsSection";

function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <AboutSection />
      <h3 className="section_heading">Services and Products</h3>
      {/* <ServiceSection /> */}
      <ConsultancySection />
      <TrainingSection />
      <h4 className="subtitle">
        {" "}
        Supply of Agri-Inputs and Agribusiness Products
      </h4>
      <SupplySection />
      <h4 className="subtitle"> Products</h4>
      <ProductsSection />
    </div>
  );
}

export default HomePage;
