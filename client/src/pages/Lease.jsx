import React, { useState } from "react";

const Lease = () => {
  // State for managing dropdown visibility
  const [faqOpen, setFaqOpen] = useState(false);
  const [formsOpen, setFormsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  // Toggle functions for dropdowns
  const toggleFaq = () => setFaqOpen(!faqOpen);
  const toggleForms = () => setFormsOpen(!formsOpen);
  const toggleContact = () => setContactOpen(!contactOpen);

  return (
    <div className="container mx-auto p-8">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          Lease & Rental Agreements
        </h1>
        <p className="text-xl text-gray-700">
          Comprehensive Leasing Solutions for Residential and Commercial Properties
        </p>
      </header>

      {/* Introduction Section */}
      <section className="bg-white rounded-lg shadow-lg p-6 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">What are Lease & Rental Agreements?</h2>
        <p className="text-lg text-gray-600">
          Lease and rental agreements are legally binding contracts that define the terms and conditions for renting or leasing a property.
          These documents ensure clarity between landlords and tenants, covering essential details about rent, maintenance, responsibilities, and the overall relationship.
          Whether residential or commercial, understanding these agreements is crucial to maintaining a smooth rental experience.
        </p>
      </section>

      {/* Types of Agreements Section */}
      <section className="grid md:grid-cols-2 gap-12 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Types of Lease & Rental Agreements</h3>
          <ul className="list-inside list-disc text-gray-600">
            <li><strong>Residential Lease Agreements:</strong> Used for homes, apartments, and condos with details about rent and terms.</li>
            <li><strong>Commercial Lease Agreements:</strong> For business use in office spaces, retail locations, or industrial sites.</li>
            <li><strong>Month-to-Month Agreements:</strong> A flexible agreement without a fixed end date, renewed monthly.</li>
            <li><strong>Fixed-Term Lease Agreements:</strong> A contract with a set term, usually from 6 months to 1 year.</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Elements of Lease Agreements</h3>
          <ul className="list-inside list-disc text-gray-600">
            <li><strong>Rent Amount:</strong> Monthly or yearly rent, including payment due dates.</li>
            <li><strong>Lease Term:</strong> Start and end dates of the lease period.</li>
            <li><strong>Security Deposit:</strong> A refundable deposit for potential damages or unpaid rent.</li>
            <li><strong>Maintenance Responsibilities:</strong> Clarifies who is responsible for repairs and upkeep.</li>
            <li><strong>Terms of Use:</strong> Specifies any restrictions on the property (e.g., no pets, no subletting).</li>
            <li><strong>Termination Clauses:</strong> Conditions under which the lease may be ended early or renewed.</li>
          </ul>
        </div>
      </section>

      {/* Common Issues in Lease Agreements Section */}
      <section className="bg-white rounded-lg shadow-lg p-6 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Common Issues in Lease & Rental Agreements</h2>
        <ul className="list-inside list-disc text-gray-600">
          <li>Disputes over rent increases or late payment fees.</li>
          <li>Unclear maintenance or repair responsibilities.</li>
          <li>Ambiguities around subletting and guest policies.</li>
          <li>Disagreements over security deposit deductions.</li>
        </ul>
      </section>

      {/* Additional Resources Section */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Additional Resources</h2>
        <p className="text-lg text-gray-600 mb-4">
          For further understanding of your lease agreement, consult with a legal expert or property manager. Below are some helpful resources:
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {/* FAQ Dropdown */}
          <div className="bg-green-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <button
              onClick={toggleFaq}
              className="text-xl text-green-600 font-semibold w-full text-left"
            >
              Frequently Asked Questions (FAQ)
            </button>
            {faqOpen && (
              <div className="mt-4 text-gray-600">
                <ul>
                  <li>What is a lease agreement?</li>
                  <li>How can I break a lease early?</li>
                  <li>What is the typical duration of a lease?</li>
                  <li>What happens if I miss a payment?</li>
                </ul>
              </div>
            )}
          </div>

          {/* Download Lease Forms Dropdown */}
          <div className="bg-green-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <button
              onClick={toggleForms}
              className="text-xl text-green-600 font-semibold w-full text-left"
            >
              Download Lease Agreement Forms
            </button>
            {formsOpen && (
              <div className="mt-4 text-gray-600">
                <ul>
                  <li><button className="text-blue-600">Residential Lease Agreement</button></li>
                  <li><button className="text-blue-600">Commercial Lease Agreement</button></li>
                  <li><button className="text-blue-600">Month-to-Month Lease Agreement</button></li>
                  <li><button className="text-blue-600">Lease Termination Form</button></li>
                </ul>
              </div>
            )}
          </div>

          {/* Contact Us Dropdown */}
          <div className="bg-green-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <button
              onClick={toggleContact}
              className="text-xl text-green-600 font-semibold w-full text-left"
            >
              Contact Us for Legal Advice
            </button>
            {contactOpen && (
              <div className="mt-4 text-gray-600">
                <p>Email us at <span className="text-blue-600">contact@leaseadvisor.com</span></p>
                <p>Call us at <span className="text-blue-600">(555) 123-4567</span></p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lease;
