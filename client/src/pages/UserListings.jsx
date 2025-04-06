import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const UserListings = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [userListings, setUserListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await fetch(`/api/user/listings/${currentUser._id}`);
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message || "Failed to fetch listings");
        }
        setUserListings(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, [currentUser]);

  const handleDelete = async (listingId) => {
    if (!window.confirm("Are you sure you want to delete this listing?")) return;

    try {
      const res = await fetch(`/api/listings/${listingId}`, { method: "DELETE" });
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Error deleting listing");

      setUserListings((prevListings) => prevListings.filter((listing) => listing._id !== listingId));
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center my-8 text-gray-800">Your Listings</h1>

      {loading ? (
        <p className="text-center text-gray-600 animate-pulse">Loading listings...</p>
      ) : error ? (
        <div className="text-center">
          <p className="text-red-600 font-semibold">Failed to load listings. Please try again.</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Retry
          </button>
        </div>
      ) : userListings.length > 0 ? (
        <div className="space-y-6">
          {userListings.map((listing) => (
            <div key={listing._id} className="bg-white shadow-md p-5 rounded-lg flex items-center gap-5">
              <Link to={`/listing/${listing._id}`} className="flex-shrink-0">
                <img
                  src={listing.imageUrls[0]}
                  alt={listing.name}
                  className="h-24 w-24 object-cover rounded-md transition-transform duration-300 hover:scale-105"
                />
              </Link>
              <div className="flex-1">
                <Link
                  to={`/listing/${listing._id}`}
                  className="text-xl font-semibold text-blue-600 hover:underline transition"
                >
                  {listing.name}
                </Link>
              </div>
              <div className="flex gap-3">
                <Link
                  to={`/update-listing/${listing._id}`}
                  className="p-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                >
                  <FiEdit size={20} />
                </Link>
                <button
                  onClick={() => handleDelete(listing._id)}
                  className="p-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                >
                  <FiTrash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No listings found.</p>
      )}
    </div>
  );
};

export default UserListings;
