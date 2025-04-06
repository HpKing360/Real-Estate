import React, { useState, useCallback } from "react";

// Reusable Dropdown Component
const Dropdown = ({ label, content, isOpen, toggle }) => (
  <div className="bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
    <button
      onClick={toggle}
      aria-expanded={isOpen ? "true" : "false"}
      className="text-xl text-blue-600 font-semibold w-full text-left"
    >
      {label}
    </button>
    {isOpen && (
      <div className="mt-4 text-gray-600">
        <ul>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

const RealEstate = () => {
  // State for managing dropdown visibility
  const [faqOpen, setFaqOpen] = useState(false);
  const [formsOpen, setFormsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  // Toggle functions for dropdowns with useCallback for performance
  const toggleFaq = useCallback(() => setFaqOpen((prev) => !prev), []);
  const toggleForms = useCallback(() => setFormsOpen((prev) => !prev), []);
  const toggleContact = useCallback(() => setContactOpen((prev) => !prev), []);

  return (
    <div className="container mx-auto p-8">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          Real Estate Transactions
        </h1>
        <p className="text-xl text-gray-700">
          Drafting, Reviewing, and Managing Contracts for Buying or Selling Properties
        </p>
      </header>

      {/* Introduction Section */}
      <section className="bg-white rounded-lg shadow-lg p-6 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">What are Real Estate Transactions?</h2>
        <p className="text-lg text-gray-600">
          Real estate transactions refer to the legal processes involved in buying, selling, or leasing properties.
          These transactions typically require thorough contract drafting, reviewing, and management to ensure all terms and conditions are clearly defined.
          Whether you're a buyer, seller, or agent, a proper real estate contract protects the parties involved and ensures the deal is completed smoothly.
        </p>
      </section>

      {/* Types of Real Estate Transactions */}
      <section className="grid md:grid-cols-2 gap-12 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Types of Real Estate Transactions</h3>
          <ul className="list-inside list-disc text-gray-600">
            <li><strong>Residential Property Sale:</strong> Transactions involving the buying or selling of homes, condos, or apartments.</li>
            <li><strong>Commercial Property Sale:</strong> Includes the sale of office buildings, retail spaces, warehouses, and more.</li>
            <li><strong>Lease Agreements:</strong> Contracts for leasing residential or commercial properties, often governed by long-term or short-term terms.</li>
            <li><strong>Investment Property Transactions:</strong> Buying and selling properties for investment purposes, typically involving income-generating properties.</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Elements of Real Estate Contracts</h3>
          <ul className="list-inside list-disc text-gray-600">
            <li><strong>Sale Price:</strong> The agreed-upon price for the property.</li>
            <li><strong>Payment Terms:</strong> Conditions on how payments will be made, including deposits, installments, or lump sum payments.</li>
            <li><strong>Closing Date:</strong> The date on which the transaction is finalized and ownership is transferred.</li>
            <li><strong>Property Condition:</strong> Details about the condition of the property and any inspections required.</li>
            <li><strong>Contingencies:</strong> Conditions that must be met for the sale to go through, such as financing or home inspection contingencies.</li>
          </ul>
        </div>
      </section>

      {/* Common Issues in Real Estate Transactions */}
      <section className="bg-white rounded-lg shadow-lg p-6 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Common Issues in Real Estate Transactions</h2>
        <ul className="list-inside list-disc text-gray-600">
          <li>Disputes over property condition or repairs.</li>
          <li>Misunderstanding of closing costs or fees.</li>
          <li>Delays in the transaction process due to financing or inspection issues.</li>
          <li>Title issues, such as liens or claims on the property.</li>
        </ul>
      </section>

      {/* Additional Resources Section */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Additional Resources</h2>
        <p className="text-lg text-gray-600 mb-4">
          For a smooth real estate transaction, it's essential to have all the proper documentation and guidance. Below are some helpful resources:
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <Dropdown
            label="Frequently Asked Questions (FAQ)"
            content={[
              "What is the process for closing a real estate transaction?",
              "How do I handle multiple offers when selling a property?",
              "What are contingencies, and how do they impact a transaction?",
              "How can I ensure that my contract protects my interests?"
            ]}
            isOpen={faqOpen}
            toggle={toggleFaq}
          />
          <Dropdown
            label="Download Real Estate Forms"
            content={[
              "Residential Purchase Agreement",
              "Commercial Property Sale Agreement",
              "Property Inspection Checklist",
              "Real Estate Lease Agreement"
            ]}
            isOpen={formsOpen}
            toggle={toggleForms}
          />
          <Dropdown
            label="Contact Us for Legal Advice"
            content={[
              <span>Email us at <a href="mailto:realestate@advisor.com" className="text-blue-600">realestate@advisor.com</a></span>,
              <span>Call us at <a href="tel:+15559876543" className="text-blue-600">(555) 987-6543</a></span>
            ]}
            isOpen={contactOpen}
            toggle={toggleContact}
          />
        </div>
      </section>
    </div>
  );
};

export default RealEstate;
