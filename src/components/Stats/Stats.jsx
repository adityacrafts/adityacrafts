import CountUp from "react-countup";
import { motion } from "framer-motion";

const Stats = () => {
  const statsData = [
    { value: 18, label: "Years of Experience" },
    { value: 5020, label: "Happy Customers" },
    { value: 4951, label: "Success Projects" },
    { value: 85, label: "Expert Staff" },
  ];

  return (
    <div className="bg-white py-14">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center space-y-4 p-6 bg-white  transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 1 }}
          >
            <span className="text-5xl font-bold text-black">
              <CountUp
                start={0}
                end={stat.value}
                duration={2} // Animation duration in seconds
                suffix={stat.label.includes("Years") || stat.label.includes("Staff") ? "+" : "+"}
              />
            </span>
            <span className="text-lg sm:text-xl text-gray-600 font-medium">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
