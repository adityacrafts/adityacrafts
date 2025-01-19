import { motion } from "framer-motion";
import img1 from "../../assets/img1.webp";
import img2 from "../../assets/img2.webp";
import img3 from "../../assets/img3.webp";
import img4 from "../../assets/img4.webp";
import { Helmet } from "react-helmet";

const reasons = [
  {
    path: img1,
    title: "BRAIN STORMING",
    details:
      "We understand the importance of your brand identity, so our strategies revolve around putting your brand first. We believe in promoting and upholding your brand throughout the entire tour process from bookings till tour execution.",
  },
  {
    path: img2,
    title: "DESGIN INTEGRATION",
    details:
      "Enjoy personalized attention and assistance from a dedicated account manager who will understand your specific needs and provide tailored support throughout your journey.",
  },
  {
    path: img3,
    title: "3d RENDITION",
    details:
      "Generate professional, accurate, and real-time quotations for your clients effortlessly. When you create a quotation using our platform, it will be generated in your name, ensuring that your brand remains at the forefront of every interaction with your clients.",
  },
  {
    path: img4,
    title: "EXECUTION",
    details:
      "Streamline your booking process with our user-friendly interface, making it convenient and efficient to manage reservations. Integrated payment options simplify transactions, ensuring a seamless experience.",
  },
];

const Steps = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { staggerChildren: 0.3, when: "beforeChildren" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
   <>
    <Helmet>
    <title> Aditya Crafts</title> {/* Set the title of the page */}
    <meta
      name="description"
      content="Explore our achievements in the industry, including years of experience, happy customers, successful projects, and expert staff."
    />
    <meta
      name="keywords"
      content="experience, happy customers, successful projects, expert staff, business achievements, company statistics"
    />
  </Helmet>
    <motion.div
      id="tripinnov"
      className="relative w-full scroll-mt-40 md:mt-24 text-content px-4 sm:px-8 md:px-16 lg:px-36"

      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.section
        className="relative m-auto max-w-8xl p-4 sm:p-8"
        variants={itemVariants}
      >
        <motion.div
          className="flex flex-col items-center justify-center max-h-[600px]"
          variants={itemVariants}
        >
          <h2 className="text-2xl md:text-4xl font-bold py-4 md:py-10 text-secondary">
            Complete Home Interiors in 4 easy steps!
          </h2>
        </motion.div>
        <div>
          <motion.div className="grid grid-cols-1" variants={containerVariants}>
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-between gap-12"
                variants={itemVariants}
              >
                <div className="flex relative group">
                  <div className="flex justify-center items-center shrink-0">
                    <div className="rounded-full w-5 h-5 bg-black text-white flex self-start justify-center mt-16 md:mt-[5rem]"></div>
                    <div
                      className={`w-[1px] border border-dashed border-black absolute  ${
                        index === 0
                          ? "h-3/4 md:h-1/2 bottom-0"
                          : index === reasons.length - 1
                          ? "h-1/5 md:h-1/2 top-0"
                          : "h-full"
                      }`}
                    ></div>
                  </div>
                  <div className="flex p-2 py-6 md:p-8 gap-4">
                    <motion.div
                      className="hidden md:block relative h-22 w-22 shrink-0"
                      variants={itemVariants}
                    >
                      <img
                        src={reason.path}
                        alt={reason.title}
                        className="h-full object-cover w-full scale-110"
                      />
                    </motion.div>

                    <div className="self-center ml-4 md:ml-8">
                      <motion.div
                        className="md:hidden relative h-[100px] w-[100px]"
                        variants={itemVariants}
                      >
                        <img
                          src={reason.path}
                          alt={reason.title}
                          className="object-contain left-0 pr-auto"
                        />
                      </motion.div>

                      <p className="text-left text-lg md:text-2xl font-bold text-secondary pt-4 md:pt-0">
                        {reason.title}
                      </p>
                      <p className="text-justify">{reason.details}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
   </>
  );
};

export default Steps;
