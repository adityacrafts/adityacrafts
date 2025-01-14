import  { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FiClock } from "react-icons/fi";
import { RiMedalLine } from "react-icons/ri";
import { motion } from "framer-motion";
import Modal from "../Modal"; // Assuming Modal component is located in the same directory

const featuresData = [
  {
    icon: <FaPhoneAlt className="text-yellow-400 text-5xl" />,
    title: "24/7 Service Support",
    description: "Reach us anytime for assistance with your needs.",
  },
  {
    icon: <BsFillPersonFill className="text-yellow-400 text-5xl" />,
    title: "Dedicated Managers",
    description: "Personalized guidance for a seamless experience.",
  },
  {
    icon: <AiOutlineCheckCircle className="text-yellow-400 text-5xl" />,
    title: "10-Year Warranty",
    description: "Enjoy peace of mind with our long-term assurance.",
  },
  {
    icon: <FiClock className="text-yellow-400 text-5xl" />,
    title: "Fast Delivery",
    description: "Timely delivery within 15 to 30 days guaranteed.",
  },
  {
    icon: <RiMedalLine className="text-yellow-400 text-5xl" />,
    title: "Exquisite Designs",
    description: "Crafted with precision and a touch of elegance.",
  },
];

const Features = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", description: "" });

  const openModal = (title, description) => {
    setModalContent({ title, description });
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 px-6 sm:px-10 lg:px-20 overflow-hidden">
      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title={modalContent.title}>
        <p>{modalContent.description}</p>
      </Modal>

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
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-red-400 to-purple-500 opacity-0 hover:opacity-100 hover:animate-pulse"></div>
            {/* Icon */}
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-red-400 to-purple-500 shadow-lg mx-auto mb-6">
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
              onClick={() => openModal(feature.title, feature.description)}
              className="text-yellow-400 mt-4 mx-auto block"
            >
              Read More
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
