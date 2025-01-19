import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import the necessary Router components
import { FaWhatsapp } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner2/Banner2";
import Steps from "./components/Steps/Steps";
import Cards from "./components/Cards/Cards";
import Features from "./components/Features/Features";
import InteriorDesignSlider from "./components/InteriorDesignSlider/InteriorDesignSlider";
import Factory from "./components/Factory/Factory";
import Stats from "./components/Stats/Stats";
import Gallery from "./components/Gallery/Gallery";
import AboutUs from "./components/AboutUs/AboutUs";
import Bathroom from "./components/Services/Bathroom";
import Crockery from "./components/Services/Crockery";
import FalseCeiling from "./components/Services/FalseCeiling";
import Light from "./components/Services/Light";
import ModularKitchen from "./components/Services/ModularKitchen";
import SpaceSaving from "./components/Services/SpaceSaving";
import Storage from "./components/Services/Storage";
import StudyTable from "./components/Services/StudyTable";
import TvUnits from "./components/Services/TvUnits";
import WallPaint from "./components/Services/WallPaint";
import Wallpaper from "./components/Services/Wallpaper";
import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditions";
import { Helmet } from "react-helmet";


const App = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Router>
      <main className="overflow-x-hidden relative">
      <Helmet>
      <title>Best Modern & Premium Interior Designer in Bangalore | AdityaCrafts</title>
          <meta
            name="description"
            content="AdityaCrafts - Best interior designer in Bangalore. Explore modern & premium interior designs for kitchens, bedrooms, living rooms, dining rooms, wardrobes, bathrooms & more. Book your consultation today!"
          />
          <meta
            name="keywords"
            content="interior designer, furniture, home interior design, living room design, modular kitchen, and more"
          />
        </Helmet>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
               <Helmet>
                  <title>Best Modern & Premium Interior Designer in Bangalore | AdityaCrafts</title>
                  <meta
                    name="description"
                    content="AdityaCrafts - Best interior designer in Bangalore. Explore modern & premium interior designs for kitchens, bedrooms, living rooms, dining rooms, wardrobes, bathrooms & more. Book your consultation today!"
                  />
                </Helmet>
                <Banner />
                <Stats />
                <Features />
                <Banner2 />
                <Steps />
                <InteriorDesignSlider />
                <Cards />
                <Factory />
                <Footer />
              </>
            }
          />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services/bathroom" element={<Bathroom />} />
          <Route path="/services/crockery-units" element={<Crockery />} />
          <Route path="/services/false-ceiling" element={<FalseCeiling />} />
          <Route path="/services/light" element={<Light />} />
          <Route path="/services/modular-kitchen" element={<ModularKitchen />} />
          <Route path="/services/space-saving-furniture" element={<SpaceSaving />} />
          <Route path="/services/storage-&-wardrobe" element={<Storage />} />
          <Route path="/services/study-tables" element={<StudyTable />} />
          <Route path="/services/tv-units" element={<TvUnits />} />
          <Route path="/services/wall-paint" element={<WallPaint />} />
          <Route path="/services/wallpaper" element={<Wallpaper />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>

        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/919019027647" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-16 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 mb-6 z-10"
        >
          <FaWhatsapp className="text-2xl" />
        </a>


        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-customYellow text-black p-4 rounded-full shadow-lg hover:bg-customYellow transition duration-300 z-10"
        >
          <FiArrowUp className="text-2xl" />
        </button>
      </main>
    </Router>
  );
};

export default App;




