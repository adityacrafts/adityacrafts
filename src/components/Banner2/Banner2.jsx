import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import BannerBack from "../../assets/bed.png";
import { SlideUp } from "../../animation/animate";

const Banner2 = () => {
  return (
    <>
      <Helmet>
        <title>Top Interior Designers in Bangalore | Aditya Crafts</title>
        <meta
          name="description"
          content="Aditya Crafts is a top interior designer in Bangalore with over 18+ years of experience, delivering 5,020+ projects with passion and expertise."
        />
        <meta name="keywords" content="interior designers, Bangalore, Aditya Crafts, home interiors" />
        <meta property="og:title" content="Top Interior Designers in Bangalore | Aditya Crafts" />
        <meta
          property="og:description"
          content="Aditya Crafts is a top interior designer in Bangalore with over 18+ years of experience, delivering 5,020+ projects with passion and expertise."
        />
        <meta property="og:image" content={BannerBack} />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-36 py-8 sm:py-12 md:py-14 sm:mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {/* Image Section */}
          <div className="flex flex-col justify-center">
            <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
              {/* First Image */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative z-10 w-[50%] sm:w-[45%]"
              >
                <img
                  src={BannerBack}
                  alt="Luxury bedroom interior view 1"
                  className="w-full rounded-sm shadow-md"
                />
              </motion.div>

              {/* Orange Connecting Border (Top) */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute right-[28%] sm:right-[33.2%] top-[0%] w-32 sm:w-40 h-32 sm:h-40 border-t-4 border-r-4 border-orange-500 origin-left"
              />

              {/* Second Image */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute top-[20%] sm:top-[30%] right-[15%] sm:right-[20%] z-30 w-[50%] sm:w-[45%]"
              >
                <img
                  src={BannerBack}
                  alt="Luxury bedroom interior view 2"
                  className="w-full rounded-sm shadow-md"
                />
              </motion.div>

              {/* Orange Connecting Border (Bottom) */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute right-[50%] sm:right-[65%] top-[70%] sm:top-[79%] md:top-36 w-32 sm:w-40 md:w-24 xl:w-40 2xl:w-48 h-60 sm:h-36 md:h-28 xl:h-56 2xl:h-64 xs:h-11 border-b-4 border-l-4 border-orange-500 origin-top"
              />
            </div>
          </div>

          {/* Text Content Section */}
          <div className="space-y-5 sm:space-x-0 md:space-x-0 flex justify-center flex-col xl:max-w-[500px] mt-10 smd:mt-28">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-sm sm:text-3xl font-bold text-center md:text-left"
            >
              One-stop interior solutions from Home Interior Designers in Bangalore
            </motion.h1>

            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-gray-500 text-sm sm:text-base leading-6 sm:leading-7 text-center md:text-left"
            >
              At Aditya Crafts, we take immense pride in collaborating with our clients to design
              homes that reflect their unique vision. Our role is to seamlessly weave their ideas
              into a practical, robust, and elegant interior, transforming a house into a warm and
              welcoming home.
            </motion.p>

            <motion.p
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="text-gray-500 text-sm sm:text-base leading-6 sm:leading-7 text-center md:text-left"
            >
              With over 18+ years of expertise in the industry, Aditya Crafts is recognized as one
              of the most trusted and preferred interior designers in Bangalore. Whether designing
              affordable interiors or luxurious spaces, we approach every project with the same
              passion and dedication. Having successfully delivered more than 5,020+ homes, Aditya
              Crafts is proudly ranked among the top interior designers in Bangalore.
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner2;
