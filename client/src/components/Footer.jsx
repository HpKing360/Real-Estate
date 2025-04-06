import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Information */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Real Estate Co.</h2>
          <p className="text-gray-400 text-sm">
            Your trusted partner for luxury homes. We provide personalized services to help you find the perfect home.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-gray-200 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/legal-services" className="hover:text-blue-400">
                Legal Services
              </Link>
            </li>
            <li>
            <a href="tel:+91-9972967506" className="hover:text-blue-400">Contact
</a>

            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-gray-200 mb-4">Follow Us</h3>
          <div className="flex space-x-6">
            <a href="https://facebook.com" className="text-gray-400 hover:text-blue-500">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-pink-500">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-700">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold text-gray-200 mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center">
              <FaPhoneAlt className="mr-2 text-blue-400" />
              (123) 456-7890
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2 text-blue-400" />
              contact@realestate.com
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-blue-400" />
              123 Marathahalli, AECS Layout, Bengaluru, India
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
        <p>© 2024 Real Estate Co. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
