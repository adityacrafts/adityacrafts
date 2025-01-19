import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Slider from "react-slick"; // Import slick slider
import { Helmet } from "react-helmet-async";
import factory from "../../assets/factory.jpeg";
import factory1 from "../../assets/factory1.jpeg";
import factory2 from "../../assets/factory2.jpeg";
import factory3 from "../../assets/factory3.jpeg";
import factory4 from "../../assets/factory4.jpeg";
import { useState } from "react";

const Factory = () => {
  const FactoryImages = [
    { id: 1, image: factory, alt: "Factory 1" },
    { id: 2, image: factory1, alt: "Factory 2" },
    { id: 3, image: factory2, alt: "Factory 3" },
    { id: 4, image: factory3, alt: "Factory 4" },
    { id: 5, image: factory4, alt: "Factory 5" },
  ];

  const [activeIndex, setActiveIndex] = useState(1); // Track the active index of the centered image

  const settings = {
    dots: false, // Remove default dots
    infinite: true,
    speed: 800,
    slidesToShow: 3, // Show 3 images at a time
    slidesToScroll: 1,
    centerMode: true, // Enable center mode for resizing images
    focusOnSelect: true,
    centerPadding: "0", // Remove padding around the center image
    arrows: false, // Disable default arrows
    autoplay: true, // Enable autoplay for the slider
    autoplaySpeed: 2000, // Slide transition interval
    beforeChange: (current, next) => {
      // Set the active index whenever the slide is about to change
      setActiveIndex(next);
    },
    afterChange: (index) => {
      // Update the active index after slide change
      setActiveIndex(index);
    },
  };

  return (
    <>
      <Helmet>
        <title>Aditya Crafts</title>
        <meta
          name="description"
          content="Explore the state-of-the-art factory facilities of Aditya Crafts. Witness our innovative processes and superior craftsmanship through a visual journey."
        />
        <meta
          name="keywords"
          content="Aditya Crafts factory, state-of-the-art facilities, superior craftsmanship, innovative manufacturing, interior design production"
        />
        <meta property="og:title" content="Aditya Crafts" />
        <meta
          property="og:description"
          content="Explore the state-of-the-art factory facilities of Aditya Crafts. Witness our innovative processes and superior craftsmanship through a visual journey."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/factory.jpeg" />
        <meta property="og:url" content="https://www.adityacrafts.com/factory" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-center">
          <Typewriter
            words={["Our Factory"]}
            loop={Infinity} // Infinite loop for continuous typing
            cursor
            cursorStyle="|"
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={500}
          />
        </h2>
      </motion.div>
      <div className="relative p-4">
        <Slider {...settings}>
          {FactoryImages.map(({ id, image, alt }, index) => (
            <div key={id} className="relative">
              <img
                src={image}
                alt={alt}
                className="w-full xs:w-[100%] h-48 sm:h-80 lg:h-96 object-cover transition-transform duration-300 ease-in-out"
                style={{
                  // Apply styles based on whether the image is in the center or not
                  transform:
                    index === activeIndex
                      ? "scale(1)" // Center image stays at normal size
                      : "scale(0.7)", // Left and right images are smaller
                  filter:
                    index === activeIndex
                      ? "none" // No blur for the center image
                      : "blur(5px)", // Apply blur to left and right images
                  transition: "transform 0.3s ease-in-out, filter 0.3s ease-in-out", // Smooth transition for scaling and blur
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Factory;
