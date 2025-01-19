import { motion } from "framer-motion"; // Import framer-motion
import aboutus from "../../assets/ligharead1.jpg"; // Replace with your image path
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";

const Light = () => {
    return (
        <>
            <Helmet>
                <title>Light Design - Your Website</title> {/* Set the title of the page */}
                <meta name="description" content="Explore our modern and stylish Light designs that cater to your needs and preferences. Let us transform your Light into a relaxing and functional space." />
                <meta name="keywords" content="Light design, modern Light, stylish Light, home decor, Light renovation, personal hygiene" />
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
                        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Light</h2>
                        <p className="text-xl">
                            Lighting plays a crucial role in interior design, and we offer a variety of lighting solutions to complement your style and needs. From ceiling lights and wall sconces to table lamps, our lighting options are designed to elevate the ambiance of your space. Light, a form of electromagnetic radiation visible to the human eye, has characteristics such as direction, color, and brightness, and is essential for illuminating spaces and enhancing their visual appeal. The right lighting not only improves visibility but also creates a warm and functional living environment. Different lighting types, such as task, accent, and ambient lighting, serve distinct purposes to transform any room.
                        </p>



                    </motion.div>
                </div>
            </motion.div>
            <Footer />
        </>
    );
};

export default Light;
