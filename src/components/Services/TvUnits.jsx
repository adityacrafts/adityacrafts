import { motion } from "framer-motion"; // Import framer-motion
import aboutus from "../../assets/tvunit.jpeg"; // Replace with your image path
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";

const TvUnits = () => {
    return (
        <>
            <Helmet>
                <title>TvUnits Design - Your Website</title> {/* Set the title of the page */}
                <meta name="description" content="Explore our modern and stylish TvUnits designs that cater to your needs and preferences. Let us transform your TvUnits into a relaxing and functional space." />
                <meta name="keywords" content="TvUnits design, modern TvUnits, stylish TvUnits, home decor, TvUnits renovation, personal hygiene" />
            </Helmet>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full py-12 px-4 bg-gray-100  mt-20"
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
                            Our TV units are crafted to complement your living room decor while offering generous storage space. Stylish and customizable, these units are designed to reflect your unique style and preferences. Specifically built to hold and display televisions, our units often include additional storage for media components and accessories. They not only provide a dedicated space for your TV but also help keep your living area organized while offering convenient storage solutions for your entertainment essentials.
                        </p>



                    </motion.div>
                </div>
            </motion.div>
            <Footer />
        </>
    );
};

export default TvUnits;
