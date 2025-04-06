import React from "react";
import {
  FaGavel,
  FaFileContract,
  FaHome,
  FaCity,
  FaRecycle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const LegalServices = () => {
  const navigate = useNavigate();
  const handleCall = () => {
    window.location.href = "tel:9972967506"; // Replace with your desired phone number
  };

  return (
    <div className="bg-gray-50 py-16 px-6">
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 leading-tight mb-4">
          Our Legal Services
        </h1>
        <p className="text-lg text-gray-600">
          Comprehensive and tailored legal solutions for all your real estate
          needs. Trust us to handle your transactions with precision and care.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Real Estate Transactions */}
        <div className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
        onClick={() => navigate("/real")}
        >
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full mb-6">
            <FaFileContract size={32} />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-blue-600">
            Real Estate Transactions
          </h2>
          <p className="text-gray-600">
            Drafting, reviewing, and managing contracts for buying or selling
            properties.
          </p>
        </div>

        {/* Lease and Rental Agreements */}
        <div className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
        onClick={() => navigate("/lease")}
        >
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full mb-6">
            <FaHome size={32} />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-green-600">
            Lease & Rental Agreements
          </h2>
          <p className="text-gray-600">
            Expertly crafted leasing solutions for residential and commercial
            properties.
          </p>
        </div>

        {/* Title Searches */}
        <div className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
        onClick={() => navigate("/title")}
        >
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full mb-6">
            <FaGavel size={32} />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-purple-600">
            Title Searches
          </h2>
          <p className="text-gray-600">
            Ensuring your property's title is clear and legally compliant.
          </p>
        </div>

        {/* Contract Review */}
        <div className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full mb-6">
            <FaFileContract size={32} />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-pink-600">
            Contract Review
          </h2>
          <p className="text-gray-600">
            Accurate and detailed review of legal documents for peace of mind.
          </p>
        </div>

        <div
          className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
          onClick={() => navigate("/zoning-land-use")}
        >
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-full mb-6">
            <FaCity size={32} />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-yellow-600">
            Zoning & Land Use
          </h2>
          <p className="text-gray-600">
            Advising on zoning regulations and land use compliance.
          </p>
        </div>

        {/* Environmental Compliance */}
        <div className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full mb-6">
            <FaRecycle size={32} />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-teal-600">
            Environmental Compliance
          </h2>
          <p className="text-gray-600">
            Ensuring compliance with environmental regulations and laws.
          </p>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Need Expert Legal Advice?
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          Contact us today to discuss your real estate needs. We're here to
          guide you every step of the way.
        </p>
        <button
          onClick={handleCall}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default LegalServices;
