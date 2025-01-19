import { motion } from "framer-motion"; // Import framer-motion
import aboutus from "../../assets/bathroom.jpg"; // Replace with your image path
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet"; // Import Helmet for SEO

const Bathroom = () => {
  return (
    <>
      <Helmet>
        <title>Bathroom Design - Your Website</title> {/* Set the title of the page */}
        <meta name="description" content="Explore our modern and stylish bathroom designs that cater to your needs and preferences. Let us transform your bathroom into a relaxing and functional space." />
        <meta name="keywords" content="bathroom design, modern bathroom, stylish bathroom, home decor, bathroom renovation, personal hygiene" />
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
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6">BATHROOM</h2>
            <p className="text-xl">
              Our bathroom design services are tailored to meet the needs of modern households, reflecting the latest trends and preferences. We focus on creating functional, stylish, and budget-friendly designs that are customized to suit your specific requirements. Whether it&apos;s for relaxation, practicality, or both, we ensure each design is a perfect fit for your lifestyle.
            </p>
            <p className="text-xl">
              A bathroom is a dedicated space within a building for personal hygiene activities, such as bathing, showering, and washing. It typically includes essential fixtures like a sink, toilet, and shower or bathtub. Additional features like a bidet, sauna, or jacuzzi can also be incorporated, providing both functionality and a sense of relaxation while enhancing the overall aesthetic appeal.
            </p>

          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Bathroom;
