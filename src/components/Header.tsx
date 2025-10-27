import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

const Header = () => {
  return (
    <header className="min-h-[460px] llg:min-h-screen bg-white dark:bg-darkBg pb-[5rem] md:pb-0">
      <Navbar />

      {/* hero section */}
      <HeroSection />
    </header>
  );
};

export default Header;
