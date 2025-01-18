import { motion } from "framer-motion"; // Import framer-motion
import aboutus from "../../assets/modularkitchen.jpg"; // Replace with your image path
import Footer from "../Footer/Footer";

const ModularKitchen = () => {
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
                        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Modular Kitchen</h2>
                        <p className="text-xl">
                            Our modular kitchen design services cater to the modern day household and cater to the changing trends and preferences. Our kitchens are designed to be functional, stylish, and cost-effective. With the use of modular units, our kitchens are easier to install, maintain and upgrade. A type of kitchen design where cabinets and shelves are pre-manufactured in standardized sizes and can be combined and arranged to fit the specific layout and storage needs of the kitchen. Modular kitchens help to maximize storage and organization, as well as providing a customized and stylish look for the kitchen.
                        </p>


                    </motion.div>
                </div>
            </motion.div>
            <Footer />
        </>
    );
};

export default ModularKitchen;
