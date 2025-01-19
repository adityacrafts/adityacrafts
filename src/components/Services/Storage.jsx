import { motion } from "framer-motion"; // Import framer-motion
import aboutus from "../../assets/storage.jpg"; // Replace with your image path
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";

const Storage = () => {
    return (
        <>
            <Helmet>
                <title>Storage Design - Your Website</title> {/* Set the title of the page */}
                <meta name="description" content="Explore our modern and stylish Storage designs that cater to your needs and preferences. Let us transform your Storage into a relaxing and functional space." />
                <meta name="keywords" content="Storage design, modern Storage, stylish Storage, home decor, bathroom renovation, personal hygiene" />
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
                        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Storage & Wardrobe</h2>
                        <p className="text-xl">
                            With our expert storage solutions, you’ll never have to compromise on space or organization again. Our wardrobes are crafted to optimize space and can be fully customized to match your style and requirements. Designed for efficient storage, such as wardrobe cabinets or dressers, our furniture helps keep your living space organized and clutter-free. It provides a convenient and stylish place to store clothing and personal items, ensuring your home remains neat and functional.
                        </p>



                    </motion.div>
                </div>
            </motion.div>
            <Footer />
        </>
    );
};

export default Storage;
