import { motion } from "framer-motion"; // Import framer-motion
import aboutus from "../../assets/modern-living.jpg"; // Replace with your image path
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";

const SpaceSaving = () => {
    return (
        <>
            <Helmet>
                <title>SpaceSaving Design - Your Website</title> {/* Set the title of the page */}
                <meta name="description" content="Explore our modern and stylish SpaceSaving designs that cater to your needs and preferences. Let us transform your SpaceSaving into a relaxing and functional space." />
                <meta name="keywords" content="SpaceSaving design, modern SpaceSaving, stylish SpaceSaving, home decor, SpaceSaving renovation, personal hygiene" />
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
                        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Space Saving Furniture</h2>
                        <p className="text-xl">
                            In today’s world, space-saving furniture is essential. We offer a variety of functional and stylish space-saving solutions to suit your needs. From wall beds to foldable tables and chairs, we have everything to help optimize your space. Designed to maximize room usage, our space-saving furniture is perfect for smaller homes or apartments where every inch counts. These versatile, multi-functional pieces help you make the most of limited space without compromising on style or comfort.
                        </p>


                    </motion.div>
                </div>
            </motion.div>
            <Footer />
        </>
    );
};

export default SpaceSaving;
