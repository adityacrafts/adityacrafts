import { motion } from "framer-motion"; // Import framer-motion
import aboutus from "../../assets/wallpaint.jpg"; // Replace with your image path

const WallPaint = () => {
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
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Wall Paint</h2>
                    <p className="text-xl">
                        We offer a range of wall paint options, including textures and finishes, to add depth and character to your walls. Our team of professional painters will help you select the perfect paint color and finish to suit your style and preferences. A type of paint used to cover the walls of a room, available in a variety of colors and finishes.
                    </p>
                    <p className="text-xl">
                        Wall paint is a type of paint that is used to color the walls of a room. It is available in a wide range of colors and finishes, and can be used to create a specific mood or theme. Wall paint can also be used to hide imperfections in a wall, and can be used in conjunction with other decorative elements to create a cohesive look.
                    </p>


                </motion.div>
            </div>
        </motion.div>
    );
};

export default WallPaint;
