import { useState } from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    projectName: "",
    projectType: "",
    acceptTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the message
    const message = `Hello, I am interested in your services. Here are my details:
    Name: ${formData.name}
    Email: ${formData.email}
    Phone Number: ${formData.number}
    Project Name: ${formData.projectName}
    Project Type: ${formData.projectType}`;

    // Encode the message and create the WhatsApp URL
    const whatsappURL = `https://wa.me/919019027647?text=${encodeURIComponent(message)}`;

    // Open WhatsApp with the pre-filled message
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-4 xl:px-3 xl:py-1">
      <h1 className="text-3xl xl:text-2xl lg:text-[0.867rem] lg:leading-[0.678rem] font-semibold text-center mb-4 xl:mb-6">
        Meet Our Designers
      </h1>

      <form onSubmit={handleSubmit} className="space-y-2 xl:space-y-4">
        {/* Name field */}
        <div className="flex flex-col">
          <label htmlFor="name" className="block text-lg xl:text-lg font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-2 xl:mt-1 px-4 py-2 xl:py-1 border-b bg-transparent border-black focus:outline-none focus:border-yellow-500"
            required
          />
        </div>

        {/* Email field */}
        <div className="flex flex-col">
          <label htmlFor="email" className="block text-lg xl:text-lg font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-2  xl:mt-1 px-4 py-2 xl:py-1  border-b bg-transparent border-black focus:outline-none focus:border-yellow-500"
            required
          />
        </div>

        {/* Phone Number field */}
        <div className="flex flex-col">
          <label htmlFor="number" className="block text-lg xl:text-lg font-medium">
            Phone Number
          </label>
          <input
            id="number"
            name="number"
            type="tel"
            value={formData.number}
            onChange={handleInputChange}
            className="mt-2  xl:mt-1 px-4 py-2 xl:py-1  border-b bg-transparent border-black focus:outline-none focus:border-yellow-500"
            required
          />
        </div>

        {/* Project Name field */}
        <div className="flex flex-col">
          <label htmlFor="projectName" className="block text-lg xl:text-lg font-medium">
            Project Name
          </label>
          <input
            id="projectName"
            name="projectName"
            type="text"
            value={formData.projectName}
            onChange={handleInputChange}
            className="mt-2  xl:mt-1 px-4 py-2 xl:py-1  border-b bg-transparent border-black focus:outline-none focus:border-yellow-500"
            required
          />
        </div>

        {/* Project Type Dropdown */}
        <div className="flex flex-col">
          <label htmlFor="projectType" className="block text-lg xl:text-lg font-medium">
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleInputChange}
            className="mt-2  xl:mt-1 px-4 py-2 xl:py-1  border-b bg-transparent border-black focus:outline-none focus:border-yellow-500"
            required
          >
            <option value="">Select Project Type</option>
            <option value="apartment-2bhk">Apartment 2BHK</option>
            <option value="apartment-3bhk">Apartment 3BHK</option>
            <option value="apartment-4bhk">Apartment 4BHK</option>
            <option value="villa">Villa</option>
            <option value="renovation">Renovation</option>
            <option value="independent-house">Independent House</option>
          </select>
        </div>

        {/* Terms and conditions checkbox */}
        <div className="flex items-center space-x-2">
          <input
            id="acceptTerms"
            name="acceptTerms"
            type="checkbox"
            checked={formData.acceptTerms}
            onChange={handleInputChange}
            className="h-4 w-4 text-yellow-500 bg-transparent border-black rounded "
            required
          />
           <label
            htmlFor="acceptTerms"
            className="text-lg xl:text-lg"
          >
            I accept the{" "}
            <Link to="/terms-and-conditions" className="text-blue-500 underline">
              terms and conditions
            </Link>
          </label>
        </div>

        {/* Submit button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full mt-4 bg-yellow-500 text-white font-bold py-3 px-8 xl:py-4 xl:px-10 rounded-full hover:bg-yellow-600 transition-colors lg:mt-2 lg:text-[0.867rem] lg:p-[7px]"
          >
            Get Free 3D Design
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
