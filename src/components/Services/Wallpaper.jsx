import { motion } from "framer-motion"; // Import framer-motion
import aboutus from "../../assets/wallpaper.jpg"; // Replace with your image path
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";

const Wallpaper = () => {
    return (
        <>
            <Helmet>
                <title>Wallpaper Design - Your Website</title> {/* Set the title of the page */}
                <meta name="description" content="Explore our modern and stylish Wallpaper designs that cater to your needs and preferences. Let us transform your Wallpaper into a relaxing and functional space." />
                <meta name="keywords" content="Wallpaper design, modern Wallpaper, stylish Wallpaper, home decor, Wallpaper renovation, personal hygiene" />
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
                        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Wallpaper</h2>
                        <p className="text-xl">
                            Our wallpaper services offer a wide variety of options to elevate the aesthetics of your space. Whether you prefer traditional patterns or modern, contemporary styles, we have wallpaper solutions designed to match your taste and budget. Made from materials like paper or vinyl, our wallpapers are crafted to enhance the look and feel of any room.
                        </p>
                        <p className="text-xl">
                            Wallpaper is a versatile decorative material used to cover the walls of a room. Available in a range of patterns, colors, and textures, it adds visual interest and depth to any space. Perfect for creating a specific theme or atmosphere, wallpaper can also be used to conceal wall imperfections, making it both a practical and stylish choice for your home.
                        </p>



                    </motion.div>
                </div>
            </motion.div>
            <Footer />
        </>
    );
};

export default Wallpaper;
