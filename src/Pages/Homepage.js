import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import AboutUs from "../components/AboutUs";
import DiasporaEngagement from "../components/DiasporaEngagement";
import Endorsements from "../components/Endorsements";
import Initiatives from "../components/Initiatives";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div className="homepage">
      <Navigation />
      <Hero />
      <Mission />
      <AboutUs />
      <DiasporaEngagement />
      <Endorsements />
      <Initiatives />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
