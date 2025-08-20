import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";

function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <AboutSection />
      <ServiceSection />
    </div>
  );
}

export default HomePage;
