import Logo from "../../assets/logo.svg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async"; // Importing Helmet for SEO

const Navbar = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false); // For mobile

  const handleGetQuoteClick = () => {
    navigate("/gallery");
    closeSidebar();
  };

  const handleNavigateToAboutUs = () => {
    navigate("/about-us");
    closeSidebar();
  };

  const handleLogoClick = () => {
    navigate("/");
    closeSidebar();
  };

  const closeSidebar = () => setIsSidebarOpen(false);

  const handleServiceClick = (serviceName) => {
    const formattedServiceName = serviceName.toLowerCase().replace(/\s+/g, '-');
    navigate(`/services/${formattedServiceName}`);
    setIsMobileServicesOpen(false);
    closeSidebar();
  };

  const toggleMobileServicesDropdown = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  // Adjusted MouseEnter/Leave logic for Services dropdown
  const handleMouseEnter = () => {
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsServicesOpen(false);
    }, 200); // Delay before closing
  };

  return (
    <>
      <Helmet>
      <title>About AdityaCrafts | Leading Interior Designers in Bangalore</title>
        <meta name="description" content="Explore modern interior design services including modular kitchens, storage solutions, and more." />
        <meta name="keywords" content="interior design, home decor, modular kitchen, storage, furniture" />
        <meta property="og:title" content="Modern Interior Designs" />
        <meta property="og:description" content="Explore modern interior design services including modular kitchens, storage solutions, and more." />
        <meta property="og:image" content={Logo} />
        <meta property="og:url" content="https://www.adityacrafts.com" />
      </Helmet>

      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full py-1 flex justify-between items-center bg-white z-50 shadow-md"
      >
        <div
          className="px-4 sm:px-8 md:px-16 lg:px-36 cursor-pointer"
          onClick={handleLogoClick}
        >
          <img src={Logo} alt="logo" className="w-28 sm:w-40 md:w-52 h-auto" />
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center relative px-4 sm:px-8 md:px-16 lg:px-16">
          <button
            onClick={handleNavigateToAboutUs}
            className="font-bold text-black-800 py-2 px-6 transition-colors hover:border-b-2 hover:border-orange-500"
          >
            About Us
          </button>

          <div
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="font-bold text-black-800 py-2 px-6 transition-colors hover:border-b-2 hover:border-orange-500">
              Services
            </button>
            {isServicesOpen && (
              <div
                className="absolute top-full mt-2 bg-white border w-auto ml-[-40px] rounded-lg"
                onMouseEnter={handleMouseEnter} // Ensure the dropdown remains open when hovering over it
                onMouseLeave={handleMouseLeave}
              >
                <ul className="py-2 w-64">
                  {[
                    "Modular Kitchen",
                    "Storage & Wardrobe",
                    "Crockery Units",
                    "Space Saving Furniture",
                    "TV Units",
                    "Study Tables",
                    "False Ceiling",
                    "Light",
                    "Wallpaper",
                    "Wall Paint",
                    "Bathroom",
                  ].map((service, index) => (
                    <li
                      key={index}
                      className="px-3 py-3 hover:bg-gray-100 cursor-pointer border-b hover:border-b-2 hover:border-orange-500"
                      onClick={() => handleServiceClick(service)}
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <button
            onClick={handleGetQuoteClick}
            className="font-bold text-black-800 py-2 px-6 transition-colors hover:border-b-2 hover:border-orange-500"
          >
            Gallery
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-gray-800 focus:outline-none mr-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 w-full h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex items-center justify-center py-6 border-b">
            <img src={Logo} alt="logo" className="w-28 sm:w-40 md:w-52 h-auto" />
          </div>

          <div className="flex justify-end p-4">
            <button
              onClick={closeSidebar}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col items-center space-y-6 mt-12">
            <button
              onClick={handleNavigateToAboutUs}
              className="text-gray-800 py-2 px-6 rounded-full hover:bg-gray-100 transition-colors"
            >
              About Us
            </button>

            {/* Services Section in Sidebar */}
            <div className="relative">
              <button
                onClick={toggleMobileServicesDropdown}
                className="text-gray-800 py-2 px-6 rounded-full hover:bg-gray-100 transition-colors"
              >
                Services
              </button>
              {isMobileServicesOpen && (
                <div
                  className="absolute top-full mt-2 bg-white border w-auto ml-[-40px] rounded-lg"
                >
                  <ul className="py-2 w-52">
                    {[
                      "Modular Kitchen",
                      "Storage & Wardrobe",
                      "Crockery Units",
                      "Space Saving Furniture",
                      "TV Units",
                      "Study Tables",
                      "False Ceiling",
                      "Light",
                      "Wallpaper",
                      "Wall Paint",
                      "Bathroom",
                    ].map((service, index) => (
                      <li
                        key={index}
                        className="font-bold px-3 py-3 hover:bg-gray-100 cursor-pointer border-b hover:border-b-2 hover:border-orange-500"
                        onClick={() => handleServiceClick(service)}
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <button
              onClick={handleGetQuoteClick}
              className="text-gray-800 py-2 px-6 rounded-full hover:bg-gray-100 transition-colors"
            >
              Gallery
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
