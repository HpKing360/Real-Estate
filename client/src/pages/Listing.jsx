import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import {
  FaShare,
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaParking,
  FaChair,
  FaUmbrellaBeach,
  FaStar,
  FaRegStar,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { useSelector } from "react-redux";

const Listing = () => {
  SwiperCore.use([Navigation]);
  const params = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(5);
  const [reviews, setReviews] = useState([]);
  const { currentUser } = useSelector((state) => state.user);
  const shareMenuRef = useRef(null);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
  
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
  
        console.log("Fetched Listing Data:", data); // ✅ Debugging
  
        setListing(data);
        setReviews(data.reviews || []);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.listingId]);
  

  const handleOutsideClick = (e) => {
    if (shareMenuRef.current && !shareMenuRef.current.contains(e.target)) {
      setShowShareMenu(false);
    }
  };

  useEffect(() => {
    if (showShareMenu) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showShareMenu]);

  const handleReviewSubmit = async () => {
    if (!reviewText.trim()) return;
    const newReview = { user: currentUser, review: reviewText, rating };
    try {
      const res = await fetch(`/api/listing/review/${listing._id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReview),
      });
      const data = await res.json();
      if (data.success) {
        setReviews((prevReviews) => [...prevReviews, newReview]);
        setReviewText("");
        setRating(5);
      }
    } catch (error) {
      console.error("Failed to submit review:", error);
    }
  };

  const renderStars = (selectedRating, onClick = null) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} onClick={() => onClick && onClick(index + 1)} className="cursor-pointer">
        {index < selectedRating ? <FaStar className="text-yellow-500" /> : <FaRegStar className="text-gray-400" />}
      </span>
    ));
  };

  const shareUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent(`Check out this listing: ${listing?.name}`);

  const socialLinks = [
    { id: "facebook", icon: <FaFacebook className="text-blue-600" />, url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}` },
    { id: "twitter", icon: <FaTwitter className="text-blue-400" />, url: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}` },
    { id: "whatsapp", icon: <FaWhatsapp className="text-green-500" />, url: `https://api.whatsapp.com/send?text=${shareText} ${shareUrl}` },
  ];

  return (
    <main className="bg-gray-50">
      {loading && <p className="text-center my-7 text-2xl text-gray-700">Loading...</p>}
      {error && <p className="text-center my-7 text-2xl text-red-600">Something went wrong!</p>}

      {listing && !loading && !error && (
        <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
          <Swiper navigation>
            {listing.imageUrls.map((url, index) => (
              <SwiperSlide key={index}>
                <div className="h-[550px] bg-cover bg-center" style={{ backgroundImage: `url(${url})` }}></div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Floating Share Button */}
          <div className="fixed top-[13%] right-[3%] z-10">
            <div
              className="border rounded-full w-12 h-12 flex justify-center items-center bg-gradient-to-r from-blue-500 to-teal-400 shadow-lg cursor-pointer"
              onClick={() => setShowShareMenu(!showShareMenu)}
            >
              <FaShare className="text-white" />
            </div>

            {/* Floating Social Share Menu */}
            {showShareMenu && (
              <div ref={shareMenuRef} className="absolute top-[3.5rem] right-0 bg-white shadow-lg rounded-lg p-2 w-40 flex flex-col gap-2">
                {socialLinks.map((social) => (
                  <a key={social.id} href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded-md transition duration-300">
                    {social.icon} <span className="text-gray-700 capitalize">{social.id}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          
          {/* <h2 className="text-3xl font-bold text-gray-800">{listing.name}</h2>
          <p className="flex items-center text-gray-600 text-sm mt-2">
            <FaMapMarkerAlt className="text-green-700" /> {listing.address}
          </p> */}

          {/* Property Details */}
          <div className="mt-6 p-6 bg-white shadow-md rounded-lg border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900">{listing.name}</h2>
            
            <p className="flex items-center text-gray-700 text-base mt-3 font-medium">
              <FaMapMarkerAlt className="text-red-500 mr-2" /> {listing.address}
            </p>
          </div>


          {/* Symbols Section */}
          {/* <ul className="flex flex-wrap gap-6 mt-6 text-gray-700 text-sm">
            <li className="flex items-center gap-1"><FaBed /> {listing.bedrooms} beds</li>
            <li className="flex items-center gap-1"><FaBath /> {listing.bathrooms} baths</li>
            <li className="flex items-center gap-1"><FaParking /> {listing.parking ? "Parking spot" : "No Parking"}</li>
            <li className="flex items-center gap-1"><FaChair /> {listing.furnished ? "Furnished" : "Unfurnished"}</li>
          </ul> */}

          {/* Property Features */}
          <div className="mt-6 p-5 bg-gray-50 shadow-md rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">🏡 Property Features</h3>
            
            <ul className="flex flex-wrap gap-4 text-gray-700 text-sm">
              <li className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm border">
                <FaBed className="text-blue-600" /> {listing.bedrooms} Beds
              </li>
              <li className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm border">
                <FaBath className="text-green-600" /> {listing.bathrooms} Baths
              </li>
              <li className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm border">
                <FaParking className={listing.parking ? "text-yellow-600" : "text-gray-400"} />
                {listing.parking ? "Parking Spot" : "No Parking"}
              </li>
              <li className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm border">
                <FaChair className={listing.furnished ? "text-purple-600" : "text-gray-400"} />
                {listing.furnished ? "Furnished" : "Unfurnished"}
              </li>
            </ul>
          </div>


          {/* Description */}
          {/* <h3 className="mt-5 text-lg font-semibold">Description</h3>
          <p className="text-gray-700">{listing.description}</p>  */}

          {/* Description Section */}
          <div className="mt-6 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 border-b pb-2 border-gray-300">
              📖 Property Description
            </h3>
            
            <p className="text-gray-700 leading-relaxed">
              {listing.description}
            </p>
          </div>

          {listing.address && (
            <div className="mt-6 p-4 bg-white shadow-lg rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
                <FaMapMarkerAlt className="text-green-700 mr-2" /> Property Location
              </h3>
              <div className="relative overflow-hidden rounded-lg">
                <iframe
                  title="map"
                  className="w-full h-64 border rounded-lg"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    listing.address
                  )}&output=embed`}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <a
                href={`https://www.google.com/maps?q=${encodeURIComponent(
                  listing.address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-blue-600 font-medium hover:underline"
              >
                View on Google Maps
              </a>
            </div>
          )}


          <div className="my-7">

              <h3 className="text-xl font-semibold mb-3">Reviews</h3>
              <div>
                {reviews.length > 0 ? (
                  reviews.map((review, idx) => (
                    <div key={idx} className="border-b border-gray-300 p-3">
                      <p className="text-sm">{review.user?.name}</p>
                      <div className="flex">{renderStars(review.rating)}</div>
                      <p>{review.review}</p>
                    </div>
                  ))
                ) : (
                  <p>No reviews yet. Be the first to review!</p>
                )}
              </div>


              {currentUser && (
                <div className="mt-5">
                  <h4 className="text-lg font-semibold mb-2">Leave a Review</h4>
                  <div className="flex">{renderStars(rating, setRating)}</div>
                  <textarea
                    className="w-full p-2 border rounded-md mt-2"
                    rows="3"
                    placeholder="Write your review..."
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                  ></textarea>
                  <button
                    onClick={() => {
                      if (!reviewText.trim()) return; // Prevent empty reviews

                      const newReview = { user: { name: currentUser.name }, rating, review: reviewText };
                      setReviews([...reviews, newReview]); // Update reviews list
                      alert("Review Submitted!");
                      setReviewText(""); // Clear input
                      setRating(0); // Reset rating
                    }}
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    Submit Review
                  </button>
                </div>
              )}

              </div>

          {/* <div className="my-7">
            <h3 className="text-xl font-semibold mb-3">Contact Owner</h3>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-600"
              onClick={() => window.location.href = `tel:${listing.phoneNumber}`}>
              <FaPhone /> Call {listing.phoneNumber}
            </button>
          </div> */}

<div className="my-7">
  <h3 className="text-xl font-semibold mb-3">Contact Owner</h3>
  {listing?.phoneNumber ? (
    <button
      className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-600"
      onClick={() => window.location.href = `tel:${listing.phoneNumber}`}
    >
      <FaPhone /> Call {listing.phoneNumber}
    </button>
  ) : (
    <p className="text-gray-500">Owner contact details not available.</p>
  )}
</div>





        </div>
      )}
    </main>
  );
};

export default Listing;


