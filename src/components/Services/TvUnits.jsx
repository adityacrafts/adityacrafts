import { motion } from "framer-motion"; // Import framer-motion
import aboutus from "../../assets/tvunit.jpeg"; // Replace with your image path

const TvUnits = () => {
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
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-6">TV Units</h2>
                    <p className="text-xl">
                    Our TV units are designed to blend in seamlessly with your living room decor while also providing ample storage space. Our units are stylish and customizable, designed to match your style and preference. Furniture specifically designed to hold and display televisions, often with additional storage for media components and accessories. TV units provide a designated space for the television, help to keep the living space organized, and often offer additional storage for media components and accessories.
                    </p>


                </motion.div>
            </div>
        </motion.div>
    );
};

export default TvUnits;
