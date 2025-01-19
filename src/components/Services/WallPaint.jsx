import { motion } from "framer-motion"; // Import framer-motion
import aboutus from "../../assets/wallpaint.jpg"; // Replace with your image path
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";

const WallPaint = () => {
    return (
        <>
            <Helmet>
                <title>WallPaint Design - Your Website</title> {/* Set the title of the page */}
                <meta name="description" content="Explore our modern and stylish WallPaint designs that cater to your needs and preferences. Let us transform your WallPaint into a relaxing and functional space." />
                <meta name="keywords" content="WallPaint design, modern WallPaint, stylish WallPaint, home decor, WallPaint renovation, personal hygiene" />
            </Helmet>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full py-12 px-4 mt-20 bg-gray-100"
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
                        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Wall Paint</h2>
                        <p className="text-xl">
                            We offer a wide selection of wall paint options, including various textures and finishes, to add depth and character to your walls. Our team of expert painters will assist you in choosing the ideal paint color and finish to perfectly match your style and preferences. Available in an array of colors and finishes, our paints are designed to enhance the beauty of your space.
                        </p>
                        <p className="text-xl">
                            Wall paint is specially formulated to color and transform the walls of a room. With a diverse range of colors and finishes, it can set the mood or theme of a space. Not only does wall paint help conceal imperfections, but when combined with other decorative elements, it creates a harmonious and cohesive look throughout your home.
                        </p>



                    </motion.div>
                </div>
            </motion.div>
            <Footer />
        </>
    );
};

export default WallPaint;
