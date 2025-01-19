import { motion } from "framer-motion"; // Import framer-motion
import aboutus from "../../assets/Wooden-ceiling.jpg"; // Replace with your image path
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";

const FalseCeiling = () => {
    return (
        <>
            <Helmet>
                <title>FalseCeiling Design - Your Website</title> {/* Set the title of the page */}
                <meta name="description" content="Explore our modern and stylish FalseCeiling designs that cater to your needs and preferences. Let us transform your FalseCeiling into a relaxing and functional space." />
                <meta name="keywords" content="FalseCeiling design, modern FalseCeiling, stylish FalseCeiling, home decor, FalseCeiling renovation, personal hygiene" />
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
                        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">False Ceiling</h2>
                        <p className="text-xl">
                            Our false ceiling designs are crafted to bring a touch of sophistication and style to your home or office. Whether you prefer modern aesthetics or traditional charm, our false ceilings are tailored to match your taste and budget. A suspended ceiling, installed below the room&apos;s actual ceiling, serves to conceal electrical and mechanical services, enhance acoustics, and create a visually striking effect. False ceilings not only improve sound quality and hide unsightly installations but also add a decorative element to any space.
                        </p>



                    </motion.div>
                </div>
            </motion.div>
            <Footer />
        </>
    );
};

export default FalseCeiling;
