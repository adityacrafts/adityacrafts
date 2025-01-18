import { motion } from "framer-motion"; // Import framer-motion
import aboutus from "../../assets/modern-living.jpg"; // Replace with your image path
import Footer from "../Footer/Footer";

const SpaceSaving = () => {
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
                        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Space Saving Furniture</h2>
                        <p className="text-xl">
                            Space saving furniture is the need of the hour in today&apos;s world. We offer a range of space saving furniture options that are both functional and stylish. From wall beds to foldable tables and chairs, we have got you covered. Furniture designed to maximize the use of space in a room, such as foldable or multi-functional furniture. Space-saving furniture is important in smaller homes or apartments where limited space is a concern, as it helps to make the most of the available space.
                        </p>


                    </motion.div>
                </div>
            </motion.div>
            <Footer />
        </>
    );
};

export default SpaceSaving;
