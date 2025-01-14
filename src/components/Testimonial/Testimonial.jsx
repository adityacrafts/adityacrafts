import Slider from 'react-slick';
import { motion } from 'framer-motion';

const Testimonial = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO at Company",
      text: "This product is amazing! It changed the way we do business.",
    },
    {
      name: "Jane Smith",
      role: "Marketing Manager",
      text: "A fantastic experience, would highly recommend it to others!",
    },
    {
      name: "Samuel Lee",
      role: "Developer at TechCorp",
      text: "The best investment I've made this year. Excellent service.",
    },
    // Add more testimonials as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,  // Ensure only one testimonial is shown at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold">What Our Clients Say</h2>
      </motion.div>

      <div className="slick-slider-wrapper">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl italic">{`"${testimonial.text}"`}</p>
              <div className="mt-4">
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
