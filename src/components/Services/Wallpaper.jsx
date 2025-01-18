import { motion } from "framer-motion"; // Import framer-motion
import aboutus from "../../assets/wallpaper.jpg"; // Replace with your image path
import Footer from "../Footer/Footer";

const Wallpaper = () => {
    return (
        <>
           
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
                            Our wallpaper services offer a range of options to enhance the aesthetics of your space. From traditional wallpaper designs to modern and contemporary styles, our wallpaper options are designed to suit your taste and budget. A decorative covering for the walls of a room, typically made of paper or vinyl, used to enhance the appearance of a room.
                        </p>
                        <p className="text-xl">
                            Wallpaper is a decorative material that is used to cover the walls of a room. It can come in a variety of patterns, colors, and textures, and can be used to add interest and texture to a room. Wallpaper can be used to create a specific theme or mood, and can also be used to cover up imperfections in a wall.
                        </p>


                    </motion.div>
                </div>
            </motion.div>
            <Footer />
        </>
    );
};

export default Wallpaper;
