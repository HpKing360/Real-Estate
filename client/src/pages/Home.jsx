// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore from "swiper";
// import { Navigation } from "swiper/modules";
// import "swiper/css/bundle";
// import ListingItem from "../components/ListingItem";

// const Home = () => {
//   const [offerListings, setOfferListings] = useState([]);
//   const [saleListings, setSaleListings] = useState([]);
//   const [rentListings, setRentListings] = useState([]);
//   SwiperCore.use([Navigation]);

//   useEffect(() => {
//     const fetchOfferListings = async () => {
//       try {
//         const res = await fetch("/api/listing/get?offer=true&limit=4");
//         const data = await res.json();
//         setOfferListings(data);
//         fetchRentListings();
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     const fetchRentListings = async () => {
//       try {
//         const res = await fetch("/api/listing/get?type=rent&limit=4");
//         const data = await res.json();
//         setRentListings(data);
//         fetchSaleListings();
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     const fetchSaleListings = async () => {
//       try {
//         const res = await fetch("/api/listing/get?type=sale&limit=4");
//         const data = await res.json();
//         setSaleListings(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchOfferListings();
//   }, []);

//   return (
//     <div>
//       {/* Top */}
//       <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
//         <h1 className="text-blue-700 font-bold text-3xl lg:text-6xl">
//           Find your next <span className="text-blue-500">perfect</span>
//           <br /> place with ease
//         </h1>
//         <div className="text-gray-400 text-xs sm:text-sm">
//           Real Estate is the best place to find your next perfect place to
//           live.
//           <br />
//           We have a wide range of property to choose from.
//         </div>

//         <Link
//           to={"/search"}
//           className="bg-blue-700 text-white p-4 rounded-lg mt-3 hover:opacity-90 w-[160px]"
//         >
//           Let's get started..
//         </Link>
//       </div>

//       {/* Swiper */}

//       <Swiper navigation>
//         {offerListings &&
//           offerListings.length > 0 &&
//           offerListings.map((listing) => (
//             <SwiperSlide key={listing._id}>
//               <div
//                 style={{
//                   background: `url(${listing.imageUrls[0]}) center no-repeat`,
//                   backgroundSize: "cover",
//                 }}
//                 className="h-[500px]"
//               ></div>
//             </SwiperSlide>
//           ))}
//       </Swiper>

//       {/* Listing  results for offer, sale and rent*/}

//       <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
//         {offerListings && offerListings.length > 0 && (
//           <div className="">
//             <div className="my-3">
//               <h2 className="text-2xl font-semibold text-blue-700">
//                 Recent Offers
//               </h2>
//               <Link
//                 className="text-sm text-blue-800 hover:underline"
//                 to={"/search?offer=true"}
//               >
//                 Show more offers
//               </Link>
//             </div>
//             <div className="flex flex-wrap gap-4">
//               {offerListings.map((listing) => (
//                 <ListingItem listing={listing} key={listing._id} />
//               ))}
//             </div>
//           </div>
//         )}

//         {rentListings && rentListings.length > 0 && (
//           <div className="">
//             <div className="my-3">
//               <h2 className="text-2xl font-semibold text-blue-700">
//                 Recent Places For Rent
//               </h2>
//               <Link
//                 className="text-sm text-blue-800 hover:underline"
//                 to={"/search?type=rent"}
//               >
//                 Show more places for rent
//               </Link>
//             </div>
//             <div className="flex flex-wrap gap-4">
//               {rentListings.map((listing) => (
//                 <ListingItem listing={listing} key={listing._id} />
//               ))}
//             </div>
//           </div>
//         )}

//         {saleListings && saleListings.length > 0 && (
//           <div className="">
//             <div className="my-3">
//               <h2 className="text-2xl font-semibold text-blue-700">
//                 Recent Places For Sale
//               </h2>
//               <Link
//                 className="text-sm text-blue-800 hover:underline"
//                 to={"/search?type=sale"}
//               >
//                 Show more places for sale
//               </Link>
//             </div>
//             <div className="flex flex-wrap gap-4">
//               {saleListings.map((listing) => (
//                 <ListingItem listing={listing} key={listing._id} />
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;


import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";
import LegalServices from "../pages/LegalServices";

const Home = () => {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=4");
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOfferListings();
  }, []);

  return (
    <div>
      {/* Top Section */}
      <div className="relative bg-white h-screen">
  {/* Subtle Gradient Overlay for depth */}
  <div className="absolute inset-0 bg-gradient-to-t from-white via-gray-100 to-transparent opacity-50"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-black h-full flex flex-col justify-center items-center">
    {/* Bigger Main Heading with enhanced typography and spacing */}
    <h1 className="text-5xl lg:text-6xl font-extrabold text-black leading-tight tracking-wide mb-6" style={{ fontFamily: 'Playfair Display', fontWeight: '700' }}>
  Find Your Next <span className="text-blue-600">Perfect</span> <br /> Home with Ease and Comfort
</h1>


    {/* Two-Line Subheading with better spacing */}
    <p className="text-xl lg:text-2xl text-black mb-8 max-w-3xl mx-auto font-light">
      Real estate is the best place to find your next perfect home. <br />
      We offer a wide range of properties, from cozy apartments to luxury estates, ensuring the perfect fit for you.
    </p>

    {/* Call to Action Button with border and animation */}
    <Link
      to={"/search"}
      className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg py-4 px-10 rounded-full border-2 border-transparent hover:border-blue-600 shadow-xl transform transition-all duration-300 hover:scale-105 hover:bg-blue-600 focus:outline-none"
    >
      Let's Get Started
    </Link>

    {/* Optional: Social Proof or Stats with icons and improved spacing */}
    <div className="mt-12 flex space-x-8 text-gray-800 justify-center">
      <div className="flex flex-col items-center">
        <div className="text-4xl font-semibold text-blue-600">
          <i className="fas fa-home"></i> {/* FontAwesome icon for home */}
        </div>
        <h3 className="text-4xl font-semibold text-black">1,200+</h3>
        <p className="text-lg text-gray-600">Properties Available</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-4xl font-semibold text-blue-600">
          <i className="fas fa-smile"></i> {/* FontAwesome icon for happy clients */}
        </div>
        <h3 className="text-4xl font-semibold text-black">350+</h3>
        <p className="text-lg text-gray-600">Happy Clients</p>
      </div>
    </div>
  </div>
</div>


    
      {/* Listing Results Section */}
      <div className="max-w-7xl mx-auto p-6 my-12 space-y-16">
      
        {/* Offer Listings */}
        {offerListings && offerListings.length > 0 && (
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-semibold text-gray-800">Recent Offers</h2>
              <Link
                className="text-sm text-blue-700 hover:underline"
                to={"/search?offer=true"}
              >
                Show more offers
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

        {/* Rent Listings */}
        {rentListings && rentListings.length > 0 && (
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-semibold text-gray-800">Recent Rentals</h2>
              <Link
                className="text-sm text-blue-700 hover:underline"
                to={"/search?type=rent"}
              >
                Show more places for rent
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

        {/* Sale Listings */}
        {saleListings && saleListings.length > 0 && (
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-semibold text-gray-800">Recent Sales</h2>
              <Link
                className="text-sm text-blue-700 hover:underline"
                to={"/search?type=sale"}
              >
                Show more places for sale
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
