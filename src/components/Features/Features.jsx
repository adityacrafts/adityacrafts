import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FiClock } from "react-icons/fi";
import { RiMedalLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const featuresData = [
  {
    icon: <FaPhoneAlt className="text-yellow-400 text-5xl" />,
    title: "24/7 Service Support",
    description: "Reach us anytime for assistance with your needs.",
    additionalPoints: [
      "Round-the-clock availability ensures no delays.",
      "Dedicated team to address your concerns promptly.",
      "Support for all types of queries, big or small.",
    ],
  },
  {
    icon: <BsFillPersonFill className="text-yellow-400 text-5xl" />,
    title: "Dedicated Managers",
    description: "Personalized guidance for a seamless experience.",
    additionalPoints: [
      "One-on-one assistance for your projects.",
      "Experienced professionals to handle all requirements.",
      "Tailored solutions to match your preferences.",
    ],
  },
  {
    icon: <AiOutlineCheckCircle className="text-yellow-400 text-5xl" />,
    title: "5-Year Warranty",
    description: "Enjoy peace of mind with our long-term assurance.",
    additionalPoints: [
      "Covers manufacturing defects and material quality.",
      "Hassle-free claims process for your convenience.",
      "Ensures long-lasting satisfaction and trust.",
    ],
  },
  {
    icon: <FiClock className="text-yellow-400 text-5xl" />,
    title: "Fast Delivery",
    description: "Timely delivery within 15 to 30 days guaranteed.",
    additionalPoints: [
      "Strict adherence to project timelines.",
      "Efficient logistics to minimize delays.",
      "Delivery updates to keep you informed.",
    ],
  },
  {
    icon: <RiMedalLine className="text-yellow-400 text-5xl" />,
    title: "Exquisite Designs",
    description: "Crafted with precision and a touch of elegance.",
    additionalPoints: [
      "Unique and modern aesthetics for every project.",
      "Attention to detail in every element of the design.",
      "Blends functionality with artistic expression.",
    ],
  },
];

const Features = () => {
  const [expandedFeatureIndex, setExpandedFeatureIndex] = useState(null);

  const toggleExpansion = (index) => {
    setExpandedFeatureIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <Helmet>
        <title>Premium Interior Design Features | AdityaCrafts</title>
        <meta
          name="description"
          content="Discover the premium features of AdityaCrafts' interior design services. From modern furniture to personalized designs, explore how we create the perfect space for you."
        />
        <meta
          name="keywords"
          content="premium interior design features, best interior design services, modern furniture, personalized interior design"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.adityacrafts.com/features" />
      </Helmet>

      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 px-6 sm:px-10 lg:px-20 overflow-hidden">
        {/* Background Glow Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute w-72 h-72 bg-yellow-400 opacity-30 rounded-full blur-3xl top-10 left-10"></div>
          <div className="absolute w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl bottom-20 right-20"></div>
        </div>

        {/* Header Section */}
        <div className="text-center relative z-10">
          <motion.h2
            className="text-4xl font-extrabold text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Transform Your Home with Stunning Interiors
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg mt-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience the perfect blend of design, durability, and luxury with
            our world-class interior solutions.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 relative z-10">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              className="relative p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              {/* Glowing Border */}
              <div
                className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-red-400 to-purple-500 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:animate-pulse"
                aria-hidden="true"
              ></div>
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-red-400 to-purple-500 shadow-lg mx-auto mb-6 z-10">
                {feature.icon}
              </div>
              {/* Title */}
              <h3 className="text-xl font-bold text-white text-center">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="text-gray-300 text-center mt-3">{feature.description}</p>
              {/* Read More Button */}
              <button
                onClick={() => toggleExpansion(index)}
                className="text-yellow-400 mt-4 mx-auto block z-10"
              >
                {expandedFeatureIndex === index ? "Show Less" : "Read More"}
              </button>
              {/* Additional Points */}
              {expandedFeatureIndex === index && (
                <ul className="mt-4 space-y-2 text-gray-400 text-sm">
                  {feature.additionalPoints.map((point, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.2, duration: 0.4 }}
                    >
                      <span className="mr-2 text-yellow-400">•</span>
                      {point}
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
