import Header from "./Header";
import About from "./About";
import BtsSection from "./BtsSection";
import Built from "./Built";
import Results from "./Results";
import Faqsection from "./Faqsection";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <div>
      <Header />
      <About />
      <BtsSection />
      <Built />
      <Results />
      <Faqsection />
      <Footer />
    </div>
  );
};

export default Homepage;
