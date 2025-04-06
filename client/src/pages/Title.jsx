import React, { useState, useCallback } from "react";
import { FaSearch, FaInfoCircle, FaExclamationTriangle, FaDollarSign } from "react-icons/fa";

// Reusable Dropdown Component with Icons
const Dropdown = ({ label, content, isOpen, toggle, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
    <button
      onClick={toggle}
      aria-expanded={isOpen ? "true" : "false"}
      className="flex items-center text-xl text-blue-600 font-semibold w-full text-left space-x-2"
    >
      {icon}
      <span>{label}</span>
    </button>
    {isOpen && (
      <div className="mt-4 text-gray-600">
        <ul>
          {content.map((item, index) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

const Title = () => {
  // State for managing dropdown visibility
  const [faqOpen, setFaqOpen] = useState(false);
  const [processOpen, setProcessOpen] = useState(false);
  const [costOpen, setCostOpen] = useState(false);
  const [commonIssuesOpen, setCommonIssuesOpen] = useState(false);
  
  // Toggle functions for dropdowns with useCallback for performance
  const toggleFaq = useCallback(() => setFaqOpen((prev) => !prev), []);
  const toggleProcess = useCallback(() => setProcessOpen((prev) => !prev), []);
  const toggleCost = useCallback(() => setCostOpen((prev) => !prev), []);
  const toggleCommonIssues = useCallback(() => setCommonIssuesOpen((prev) => !prev), []);

  return (
    <div className="container mx-auto p-8">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          Title Search Services
        </h1>
        <p className="text-xl text-gray-700">
          Ensuring Clear Property Titles for Safe Real Estate Transactions
        </p>
      </header>

      {/* Introduction Section */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">What is a Title Search?</h2>
        <p className="text-lg text-gray-600">
          A title search is a process that examines public records to confirm the legal ownership of a property and uncover any issues such as liens, claims, or encumbrances. It is crucial to ensure that the property title is clear before a real estate transaction occurs. This step is essential for both buyers and lenders.
        </p>
      </section>

      {/* Title Search Process */}
      <section className="bg-white rounded-lg shadow-lg p-6 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">The Title Search Process</h2>
        <p className="text-lg text-gray-600">
          The title search process typically includes several key steps to ensure that a property’s title is clear and free from legal issues:
        </p>
        <ul className="list-inside list-disc text-gray-600 mt-4">
          <li>Examine the public records of the property.</li>
          <li>Check for any existing liens, judgments, or claims on the property.</li>
          <li>Ensure there are no ownership disputes or other legal issues related to the property.</li>
          <li>Prepare a report summarizing the findings for the buyer, seller, or lender.</li>
          <li>Verify that the seller has the right to sell the property and that the title is valid for transfer.</li>
        </ul>
      </section>

      {/* Title Search Costs */}
      <section className="bg-white rounded-lg shadow-lg p-6 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">How Much Does a Title Search Cost?</h2>
        <p className="text-lg text-gray-600">
          The cost of a title search can vary depending on factors such as location, property type, and the complexity of the search. On average, title searches cost between $150 and $400. Additional fees may apply if the search uncovers any issues that need further investigation. Other fees may include:
        </p>
        <ul className="list-inside list-disc text-gray-600 mt-4">
          <li>Title insurance (if required by the buyer or lender).</li>
          <li>Additional research if there are unclear ownership or lien issues.</li>
          <li>Notary fees or document filing fees (if necessary).</li>
        </ul>
      </section>

      {/* Common Issues in Title Searches */}
      <section className="bg-white rounded-lg shadow-lg p-6 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Common Issues in Title Searches</h2>
        <p className="text-lg text-gray-600">
          During the title search process, several common issues can arise, potentially delaying or complicating a real estate transaction:
        </p>
        <ul className="list-inside list-disc text-gray-600 mt-4">
          <li>Outstanding liens, including unpaid mortgages or tax liens.</li>
          <li>Ownership disputes between family members or co-owners.</li>
          <li>Incorrect legal descriptions of the property.</li>
          <li>Title defects, such as claims against the property that must be resolved before closing.</li>
          <li>Unpaid property taxes or judgments against the property.</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Frequently Asked Questions (FAQ)</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Dropdown
            label="What is the purpose of a title search?"
            content={[
              "To confirm the legal ownership of a property.",
              "To identify any issues or claims, such as liens or encumbrances, on the property.",
              "To ensure that the property title is clear before a real estate transaction."
            ]}
            isOpen={faqOpen}
            toggle={toggleFaq}
            icon={<FaSearch />}
          />
          <Dropdown
            label="What are the steps involved in a title search?"
            content={[
              "Examine public records for ownership details.",
              "Check for any outstanding debts or legal claims on the property.",
              "Prepare a comprehensive report outlining the findings."
            ]}
            isOpen={processOpen}
            toggle={toggleProcess}
            icon={<FaInfoCircle />}
          />
          <Dropdown
            label="What factors affect the cost of a title search?"
            content={[
              "Property location.",
              "Property type (residential, commercial, etc.).",
              "The complexity of the title search and any potential issues found."
            ]}
            isOpen={costOpen}
            toggle={toggleCost}
            icon={<FaDollarSign />}
          />
          <Dropdown
            label="What are the most common issues found in title searches?"
            content={[
              "Outstanding liens, including mortgages and tax liens.",
              "Ownership disputes or unclear legal descriptions.",
              "Claims against the property that must be resolved before transfer."
            ]}
            isOpen={commonIssuesOpen}
            toggle={toggleCommonIssues}
            icon={<FaExclamationTriangle />}
          />
        </div>
      </section>

      {/* Additional Resources Section */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Additional Resources</h2>
        <p className="text-lg text-gray-600 mb-4">
          To make sure your title search is thorough and accurate, we recommend the following resources:
        </p>
        <ul className="list-inside list-disc text-gray-600">
          <li>Consult with a real estate attorney to handle any legal disputes.</li>
          <li>Consider purchasing title insurance for additional protection.</li>
          <li>Work with a certified title agent to ensure all searches are complete and up-to-date.</li>
        </ul>
      </section>
    </div>
  );
};

export default Title;
