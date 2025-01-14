import Logo from "../../assets/logo.svg";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideLeft } from "../../animation/animate";

const Footer = () => {
  return (
    <motion.footer
      variants={SlideLeft(0.2)}
      initial="initial"
      whileInView="animate"
      className="bg-gray-900 text-white py-12 md:py-12 px-6  md:px-3"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {/* Company info section */}
        <div className="space-y-6 flex flex-col items-center md:items-start">
          <img src={Logo} alt="Logo" className="w-32 sm:w-40 md:w-52 h-auto" />
          <p className="text-center md:text-left text-2xl font-bold">
            ADITYA CRAFTS
          </p>
        </div>

        {/* Address section */}
        <div className="space-y-6">
          <h1 className="text-xl font-semibold flex items-center space-x-3 text-yellow-500">
            <FaMapMarkerAlt />
            <span>Address</span>
          </h1>
          <p
            className="text-base font-normal md:text-left text-gray-300 cursor-pointer"
            onClick={() =>
              window.open(
                "https://www.google.com/maps?q=No.+191+Sathnur+Village+Srinivasa+Nagar,+Bengaluru,+Byappanahalli,+Karnataka+562149",
                "_blank"
              )
            }
          >
            No. 191 Sathnur Village Srinivasa Nagar, Bengaluru, Byappanahalli,
            Karnataka 562149
          </p>
          <h1 className="text-xl font-semibold flex items-center space-x-3 text-yellow-500">
            Phone Number
          </h1>
          <a
            href="tel:+919019027647"
            className="text-base font-normal md:text-left text-gray-300 cursor-pointer"
          >
            +91 9019027647
          </a>

        </div>

        {/* Contact section */}
        <div className="space-y-6">
          <h1 className="text-xl font-semibold text-yellow-500 ml-0 md:ml-16">Contact us</h1>
          <div className="flex flex-wrap justify-center items-center space-x-6 text-gray-300">
            {/* Phone Icon */}
            <a
              href="tel:+919019027647"
              className="flex items-center space-x-2 p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <BsTelephoneFill className="text-2xl text-gray-300 hover:text-yellow-400" />
            </a>

            {/* Email Icon */}
            <a
              href="mailto:adityacrafts1@gmail.com"
              className="flex items-center space-x-2 p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <MdEmail className="text-2xl text-gray-300 hover:text-yellow-400" />
            </a>

            {/* Facebook Icon */}
            <a
              href="https://www.facebook.com/profile.php?id=61570561389106&sk=about"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <BsFacebook className="text-2xl text-gray-300 hover:text-blue-600" />
            </a>

            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/adityacrafts1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <AiFillInstagram className="text-2xl text-gray-300 hover:text-pink-600" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="text-center mt-8 border-t-2 border-gray-700 pt-4">
        <p className="text-sm font-semibold text-gray-400">
          &copy; 2025 Aditya crafts. All rights reserved | Designed by{" "}
          <a
            href="https://thedigitalcraft.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-yellow-400"
          >
            The Digital Craft
          </a>
        </p>
      </div>

    </motion.footer>
  );
};

export default Footer;
