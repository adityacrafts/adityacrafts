import { Helmet } from "react-helmet-async";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../assets/gallery17.jpeg";
import banner2 from "../../assets/gallery18.jpeg";
import banner3 from "../../assets/gallery19.jpeg";
import "../../index.css";
import ContactUs from "../ContactUs/ContactUs";

const Banner = () => {
  const slides = [
    { id: 1, image: banner1, alt: "Luxurious living room design" },
    { id: 2, image: banner2, alt: "Modern interior design" },
    { id: 3, image: banner3, alt: "Elegant home interiors" },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    dots: false,
    arrows: false,
    fade: false,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Helmet>
        <title>Luxury Interior Designs | Aditya Crafts</title>
        <meta
          name="description"
          content="Discover luxurious interior designs from Aditya Crafts. We bring your vision to life with elegant and practical interiors."
        />
        <meta name="keywords" content="interior design, luxury interiors, home decor" />
        <meta property="og:title" content="Luxury Interior Designs | Aditya Crafts" />
        <meta
          property="og:description"
          content="Discover luxurious interior designs from Aditya Crafts. We bring your vision to life with elegant and practical interiors."
        />
        <meta property="og:image" content={banner1} />
        <meta property="og:type" content="website" />
      </Helmet>
      <motion.div
        initial="hidden"
        animate="visible"
        className="w-full relative mt-[10px] lg:mt-[54px] xl:mt-[54px]"
      >
        <Slider {...settings} className="w-full h-auto">
          {slides.map((slide) => (
            <div key={slide.id}>
              <motion.img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-[60vh] sm:h-[75vh] md:h-[80vh] lg:h-[100vh] object-cover mt-[39px]"
              />
            </div>
          ))}
        </Slider>

        <div className="lg:absolute lg:top-0 lg:right-0 w-full h-auto lg:w-[29%] xl:w-[27%] 2xl:w-[22%] p-3 lg:bg-white/60 lg:shadow-2xl lg:transform lg:rounded-xl z-10 mt-10 lg:mt-[65px] m-4 xs:m-0 smd:m-0 lg:m-24 max-h-screen overflow-hidden">
          <ContactUs />
        </div>
      </motion.div>
    </>
  );
};

export default Banner;
