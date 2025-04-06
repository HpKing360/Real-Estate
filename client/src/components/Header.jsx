// import { FaSearch } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";

// const Header = () => {
//   const { currentUser } = useSelector((state) => state.user);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const urlParams = new URLSearchParams(window.location.search);
//     urlParams.set("searchTerm", searchTerm);

//     const searchQuery = urlParams.toString();

//     navigate(`/search?${searchQuery}`);
//   };

//   useEffect(() => {
//     const urlParams = new URLSearchParams(location.search);
//     const searchTermFromUrl = urlParams.get("searchTerm");
//     if (searchTermFromUrl) {
//       setSearchTerm(searchTermFromUrl);
//     }
//   }, [location.search]);

//   return (
//     <header className="bg-blue-100 shadow-md">
//       <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
//         <Link to={"/"}>
//           <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
//             <span className="text-blue-500">Real-</span>
//             <span className="text-blue-700">Estate</span>
//           </h1>
//         </Link>
//         <form
//           onSubmit={handleSubmit}
//           className="bg-blue-50 p-3 rounded-lg flex items-center"
//         >
//           <input
//             type="text"
//             placeholder="Search..."
//             className="bg-transparent focus:outline-none w-24 sm:w-64"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <button>
//             <FaSearch className="text-blue-500" />
//           </button>
//         </form>
//         <ul className="flex gap-4">
//           <Link to={"/"}>
//             <li className="hidden sm:inline text-blue-700 hover:underline">
//               Home
//             </li>
//           </Link>
//           <Link to={"/about"}>
//             <li className="hidden sm:inline text-blue-700 hover:underline">
//               About
//             </li>
//           </Link>

//           <Link to={"/profile"}>
//             {currentUser ? (
//               <img
//                 className="rounded-full h-7 w-7 object-cover"
//                 src={currentUser.avatar}
//                 alt="profile"
//               />
//             ) : (
//               <li className=" text-blue-700 hover:underline">Sign In</li>
//             )}
//           </Link>
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Header;

import { FaSearch, FaBell, FaCaretDown } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-5">
        {/* Logo Section */}
        <Link to={"/"} className="flex items-center space-x-2">
          <h1 className="font-semibold text-xl sm:text-3xl text-gray-200">
            <span className="text-gray-400">Real-</span>
            <span className="text-white">Estate</span>
          </h1>
        </Link>

        {/* Search Bar Section */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 border border-gray-600 p-2 rounded-full flex items-center max-w-lg w-full"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none flex-1 px-4 py-2 rounded-l-full text-sm text-gray-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-gray-700 text-gray-200 px-4 py-2 rounded-r-full hover:bg-gray-600 transition-all duration-300">
            <FaSearch />
          </button>
        </form>

        {/* Navigation and Profile Section */}
        <ul className="flex gap-6 items-center">
          {/* Home and About Links */}
          <Link to={"/"} className="text-gray-300 hover:text-white hidden sm:inline font-medium">
            <li>Home</li>
          </Link>
          <Link to={"/about"} className="text-gray-300 hover:text-white hidden sm:inline font-medium">
            <li>About</li>
          </Link>
          <Link to={"/legal-services"} className="text-gray-300 hover:text-white hidden sm:inline font-medium">
            <li>Services</li>
          </Link>
          <Link to={"/user-listings"} className="text-gray-300 hover:text-white hidden sm:inline font-medium">
            <li>User Listings</li>
          </Link>

          {/* Notifications and Profile Section */}
          {currentUser ? (
            <div className="relative flex items-center space-x-6">
              {/* Notification Icon */}
              <FaBell className="text-gray-300 cursor-pointer hover:text-white transition-all duration-300" />

              {/* Profile Icon with Dropdown */}
              <div className="relative">
                <img
                  className="rounded-full h-10 w-10 object-cover cursor-pointer hover:ring-2 hover:ring-gray-500 transition-all duration-300"
                  src={currentUser.avatar}
                  alt="profile"
                  onClick={toggleDropdown}
                />
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 bg-gray-800 shadow-lg rounded-lg w-48 text-sm text-gray-200">
                    <Link to={"/profile"}>
                      <div className="px-4 py-2 hover:bg-gray-700">Profile</div>
                    </Link>
                    <Link to={"/sign-in"}>
                      <div className="px-4 py-2 hover:bg-gray-700">Logout</div>
                    </Link>
                  </div>
                )}
                {/* Only show the caret icon when dropdown is open */}
                {isDropdownOpen && (
                  <FaCaretDown
                    className="text-gray-300 cursor-pointer hover:text-white ml-2"
                    onClick={toggleDropdown}
                  />
                )}
              </div>
            </div>
          ) : (
            <Link to={"/sign-in"}>
              <li className="text-gray-300 hover:text-white font-medium">Sign In</li>
            </Link>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
