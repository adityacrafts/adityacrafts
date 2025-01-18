import { motion } from "framer-motion"; // Import framer-motion
import aboutus from "../../assets/ligharead1.jpg"; // Replace with your image path
import Footer from "../Footer/Footer";

const Light = () => {
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
                        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Light</h2>
                        <p className="text-xl">
                            Lighting is an essential element of interior design and we offer a range of lighting options to suit your style and preference. From ceiling lights to wall lights and table lamps, our lighting options are designed to enhance the aesthetics of your space. A form of electromagnetic radiation that is visible to the human eye and has properties such as direction, color, and brightness, used to illuminate an area or an object. Light is essential for visibility and to create a welcoming and functional living environment. Different types of lighting can be used for different purposes, such as task lighting, accent lighting, and ambient lighting.
                        </p>


                    </motion.div>
                </div>
            </motion.div>
            <Footer />
        </>
    );
};

export default Light;
