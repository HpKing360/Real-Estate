import React, { useState } from "react";
import { FaHome, FaHandshake, FaUserCheck, FaPhoneAlt } from "react-icons/fa"; // Adding phone icon

const About = () => {
  const [showPhone, setShowPhone] = useState(false); // State to show phone number

  const phoneNumber = "+91-9972967506"; // Replace with your actual phone number

  const handleContactClick = () => {
    setShowPhone(true);
  };

  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      {/* Section Title */}
      <h1 className="text-4xl font-semibold mb-6 text-gray-800 text-center">
        About Real Estate
      </h1>

      {/* Introduction */}
      <div className="mb-10">
        <p className="text-lg text-gray-700 mb-4">
          Welcome to Real Estate! We are a dedicated team of professionals with a passion for helping clients buy, sell, and rent properties in the most desirable neighborhoods.
        </p>
        <p className="text-lg text-gray-700">
          Our goal is to make the property journey simple, transparent, and rewarding, whether you're a first-time buyer, an experienced investor, or just looking for your next dream home.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Feature 1: Home Buying */}
        <div className="bg-white p-6 rounded-lg shadow-lg transition-all hover:shadow-xl">
          <FaHome className="text-3xl text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Home Buying</h3>
          <p className="text-gray-600">
            Finding your dream home shouldn't be hard. Let us help you navigate through the process with expert advice and market knowledge.
          </p>
        </div>

        {/* Feature 2: Expert Advice */}
        <div className="bg-white p-6 rounded-lg shadow-lg transition-all hover:shadow-xl">
          <FaHandshake className="text-3xl text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Advice</h3>
          <p className="text-gray-600">
            Our agents have years of experience to offer the best advice tailored to your needs. We work with you every step of the way.
          </p>
        </div>

        {/* Feature 3: Personalized Service */}
        <div className="bg-white p-6 rounded-lg shadow-lg transition-all hover:shadow-xl">
          <FaUserCheck className="text-3xl text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Personalized Service</h3>
          <p className="text-gray-600">
            We believe that each client deserves a tailored experience. We offer personalized service to ensure that your real estate goals are achieved.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Ready to start your journey?
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Whether you’re buying, selling, or renting, Real Estate is here to assist you every step of the way.
        </p>

        {/* Button to show phone number */}
        <button
          className="bg-blue-600 text-white text-lg py-2 px-8 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300"
          onClick={handleContactClick}
        >
          Contact Us Now
        </button>

        {/* Display Phone Number or Dialer */}
        {showPhone && (
          <div className="mt-6">
            <p className="text-lg text-gray-800">
              Call us now at:{" "}
              <a
                href={`tel:${phoneNumber}`} // This will open the dialer
                className="text-blue-600 hover:text-blue-800"
              >
                {phoneNumber} <FaPhoneAlt className="inline text-lg ml-2" />
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
