import { Helmet } from "react-helmet"; 
import { motion } from "framer-motion"; // Import framer-motion
import aboutus from "../../assets/aboutus.jpeg"; // Replace with your image path
import aboutbanner from "../../assets/aboutbanner.png"; // Replace with your image path
import Footer from "../Footer/Footer";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About AdityaCrafts | Leading Interior Designers in Bangalore</title>
        <meta
          name="description"
          content="Learn about AdityaCrafts, Bangalore’s trusted name in interior design. With years of expertise, we craft personalized spaces that reflect your style and comfort."
        />
        <meta
          name="keywords"
          content="interior design services, interior decorators, Bangalore interior designers, home renovation, space planning"
        />
      </Helmet>
      <div className="w-full mt-20">
        <img src={aboutbanner} className="w-full h-96 object-cover" alt="Gallery" />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full py-16 px-6 bg-gray-100"
      >
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center lg:space-x-16">
          <motion.div
            className="lg:w-1/2 w-full mb-12 lg:mb-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <img
              src={aboutus}
              alt="Rajveer Interior Works"
              className="w-full h-auto object-cover rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105"
            />
          </motion.div>
          <motion.div
            className="lg:w-1/2 w-full text-gray-700 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="text-5xl font-bold text-gray-800 leading-tight">About Us</h2>
            <p className="text-xl leading-relaxed">
              Welcome to <span className="font-semibold text-amber-500">Aditya Crafts</span>, a trusted name in interior design and renovation services. We specialize in creating modern, functional, and aesthetically pleasing spaces tailored to meet your unique needs.
            </p>
            <p className="text-xl leading-relaxed">
              Our dedicated team of professional designers and craftsmen ensures every project is executed with the highest standards of quality and innovation. From concept to completion, we work closely with our clients to bring their vision to life.
            </p>
            <p className="text-xl leading-relaxed">
              Using premium materials and state-of-the-art techniques, we deliver exceptional results that combine functionality and elegance. Let us transform your space into something truly extraordinary.
            </p>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default AboutUs;

