import { motion } from "framer-motion"; // Import framer-motion
import aboutus from "../../assets/bathroom.jpg"; // Replace with your image path
import Footer from "../Footer/Footer";

const Bathroom = () => {
  return (
    <>
 
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
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6">BATHROOM</h2>
            <p className="text-xl">
              Our bathroom design services cater to the modern day household and cater to the changing trends and preferences. Our bathroom designs are functional, stylish, and cost-effective and are designed to meet your specific needs and budget. A room in a house or building designated for washing, bathing, and using the toilet.
            </p>
            <p className="text-xl">
              A bathroom is a room in a building that is used for personal hygiene activities, such as bathing, showering, and washing. Bathrooms typically include a sink, toilet, and shower or bathtub, and can also include additional features such as a bidet, sauna, or jacuzzi. Bathrooms can be designed to be functional, relaxing, and aesthetically pleasing.
            </p>

          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Bathroom;
