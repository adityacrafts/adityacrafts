import { motion } from "framer-motion"; // Import framer-motion
import aboutus from "../../assets/modern-crockery-unit.jpeg"; // Replace with your image path
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";

const Crockery = () => {
  return (
    <>
      <Helmet>
        <title>Crockery Design - Your Website</title> {/* Set the title of the page */}
        <meta name="description" content="Explore our modern and stylish Crockery designs that cater to your needs and preferences. Let us transform your Crockery into a relaxing and functional space." />
        <meta name="keywords" content="Crockery design, modern Crockery, stylish Crockery, home decor, Crockery renovation, personal hygiene" />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full py-12 px-4 bg-gray-100 mt-20"
      >
        {/* About Us Section */}
        <div className="max-w-screen-xl mx-auto text-center lg:text-left flex flex-col lg:flex-row items-center lg:space-x-12">
          {/* Image */}
          <motion.div
            className="mb-8 lg:mb-0 lg:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img
              src={aboutus}
              alt="Awesome Image"
              className="w-full h-auto object-cover rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="lg:w-1/2 text-lg text-gray-700 leading-relaxed space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Crockery Units</h2>
            <p className="text-xl">
              Our crockery units are thoughtfully designed to store and showcase your cherished crockery and cutlery. Combining functionality with style, these units are crafted to complement your kitchen and dining decor. They offer a perfect blend of convenience and elegance, with specialized cabinets or shelves to neatly organize dishes, glasses, and other tableware, while also providing a beautiful space to display and highlight your finest pieces.
            </p>


          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Crockery;
