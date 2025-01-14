import { motion } from "framer-motion"; // Import framer-motion
import aboutus from "../../assets/modern-crockery-unit.jpeg"; // Replace with your image path

const Crockery = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full py-12 px-4 mt-28"
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
          Our crockery units are designed to store and display your precious crockery and cutlery items. Our units are both functional and stylish and are designed to match your kitchen and dining decor. Cabinets or shelves specifically designed to store and display dishes, glasses, and other tableware. Crockery units allow for convenient and organized storage of tableware, and also provide a place to display and showcase dishes and other items.
          </p>
         
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Crockery;
