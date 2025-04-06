import React from "react";
import { useNavigate } from "react-router-dom";
import { FaMapMarkedAlt, FaBalanceScale, FaBuilding, FaLandmark, FaGavel, FaClipboardList } from "react-icons/fa";

const ZoningLandUse = () => {
  const navigate = useNavigate();

  // Zoning Services & Legal Regulations
  const zoningServices = [
    {
      icon: <FaMapMarkedAlt size={32} />,
      title: "Zoning Compliance",
      description: "Ensure your property follows zoning laws for legal construction and usage."
    },
    {
      icon: <FaBalanceScale size={32} />,
      title: "Land Use Disputes",
      description: "Expert legal representation for land use conflicts and resolution."
    },
    {
      icon: <FaBuilding size={32} />,
      title: "Development Approvals",
      description: "Get permits and compliance approvals for commercial and residential projects."
    },
    {
      icon: <FaLandmark size={32} />,
      title: "Historic Property Regulations",
      description: "Guidance on preserving and developing properties in historical districts."
    }
  ];

  const zoningRegulations = [
    {
      icon: <FaGavel size={32} />,
      title: "Building Code Compliance",
      description: "Adhere to local and national building codes to avoid legal issues."
    },
    {
      icon: <FaClipboardList size={32} />,
      title: "Environmental Regulations",
      description: "Ensure environmental protection laws are met for sustainable land use."
    },
    {
      icon: <FaBalanceScale size={32} />,
      title: "Eminent Domain Laws",
      description: "Understand government land acquisition rights and compensation policies."
    },
    {
      icon: <FaClipboardList size={32} />,
      title: "Setback & Height Restrictions",
      description: "Follow local setback and height restrictions for property development."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-16 px-6">
      {/* Header */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Zoning & Land Use</h1>
      <p className="text-lg text-gray-600 text-center max-w-3xl mb-8">
        We provide expert guidance on zoning regulations, land use policies, and compliance with local, state, and national laws.
      </p>

      {/* Services Grid */}
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Legal Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
        {zoningServices.map((service, index) => (
          <div key={index} className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full mb-4 mx-auto">
              {service.icon}
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center group-hover:text-blue-600">
              {service.title}
            </h2>
            <p className="text-gray-600 text-center">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Regulations Section */}
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Key Legal Regulations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {zoningRegulations.map((regulation, index) => (
          <div key={index} className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full mb-4 mx-auto">
              {regulation.icon}
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center group-hover:text-green-600">
              {regulation.title}
            </h2>
            <p className="text-gray-600 text-center">{regulation.description}</p>
          </div>
        ))}
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="mt-10 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Back to Services
      </button>
    </div>
  );
};

export default ZoningLandUse;
