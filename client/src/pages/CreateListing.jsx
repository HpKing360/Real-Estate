import React, { useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateListing = () => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);

  const [location, setLocation] = useState("");

  const [formData, setFormData] = useState({
    imageUrls: [],
    name: "",
    description: "",
    address: "",
    phoneNumber: "",
    type: "rent",
    bedrooms: 1,
    bathrooms: 1,
    regularPrice: 50,
    discountPrice: 0,
    offer: false,
    parking: false,
    furnished: false,
    bachelor: false,
    katha: "",
    isVerified: false, 
  });
  const [imageUploadError, setImageUploadError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  console.log(formData);

  const handleImageSubmit = (e) => {
    if (files.length > 0 && files.length + formData.imageUrls.length < 7) {
      setUploading(true);
      setImageUploadError(false);
      const promises = [];

      for (let i = 0; i < files.length; i++) {
        promises.push(storeImage(files[i]));
      }

      Promise.all(promises)
        .then((urls) => {
          setFormData({
            ...formData,
            imageUrls: formData.imageUrls.concat(urls),
          });
          setImageUploadError(false);
          setUploading(false);
        })
        .catch((err) => {
          setImageUploadError("Image upload is failed (2mb max per image)");
          setUploading(false);
        });
    } else {
      setImageUploadError("You can only upload 6 images per listing!");
      setUploading(false);
    }
  };

  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done!`);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleRemoveImage = (index) => {
    setFormData({
      ...formData,
      imageUrls: formData.imageUrls.filter((_, i) => i !== index),
    });
  };

  const handleChange = (e) => {
    if (e.target.id === "sale" || e.target.id === "rent") {
      setFormData({
        ...formData,
        type: e.target.id,
      });
    }

    if (
      e.target.id === "parking" ||
      e.target.id === "furnished" ||
      e.target.id === "offer"
    ) {
      setFormData({
        ...formData,
        [e.target.id]: e.target.checked,
      });
    }

    if (
      e.target.type === "number" ||
      e.target.type === "text" ||
      e.target.type === "textarea"||
      e.target.tagName === "SELECT"
    ) {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }
  };


  const handleSavePhoneNumber = () => {
    setListing({ ...listing, phoneNumber: formData.phoneNumber });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     if (formData.imageUrls.length < 1)
  //       return setError("You must upload at least one image!");

  //     if (+formData.regularPrice < +formData.discountPrice)
  //       return setError("Discount price must be lower than regular price");

  //     setLoading(true);
  //     setError(false);

  //     const res = await fetch("/api/listing/create", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         ...formData,
  //         location,
  //         userRef: currentUser._id,
  //       }),
  //     });

  //     const data = await res.json();
  //     setLoading(false);
  //     if (data.success === false) {
  //       setError(data.message);
  //     }
  //     navigate(`/listing/${data._id}`);
  //   } catch (error) {
  //     setError(error.message);
  //     setLoading(false);
  //   }
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.imageUrls.length < 1)
        return setError("You must upload at least one image!");
  
      if (+formData.regularPrice < +formData.discountPrice)
        return setError("Discount price must be lower than regular price");
  
      if (!formData.phoneNumber.trim()) 
        return setError("Phone number is required!"); // ✅ Phone number validation
  
      setLoading(true);
      setError(false);
  
      const newListing = {
        ...formData,
        phoneNumber: formData.phoneNumber, // ✅ Ensure phoneNumber is included
        userRef: currentUser._id,
      };
  
      console.log("Submitting Data:", newListing); // Debugging
  
      const res = await fetch("/api/listing/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newListing),
      });
  
      const data = await res.json();
      setLoading(false);
  
      if (!res.ok) {
        return setError(data.message || "Something went wrong!");
      }
  
      navigate(`/listing/${data._id}`);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  
  

  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">
        Create a Listing
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            placeholder="Name"
            className="border p-3 rounded-lg"
            id="name"
            maxLength="62"
            minLength="10"
            required
            onChange={handleChange}
            value={formData.name}
          />
          <textarea
            type="text"
            placeholder="Description"
            className="border p-3 rounded-lg"
            id="description"
            required
            onChange={handleChange}
            value={formData.description}
          />
          <input
            type="text"
            placeholder="Address"
            className="border p-3 rounded-lg"
            id="address"
            required
            onChange={handleChange}
            value={formData.address}
          />

          {/* <input
            type="tel"
            placeholder="Enter phone number"
            className="border p-3 rounded-lg"
            value={formData.phoneNumber}
            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            required
          /> */}

<input
  type="tel"
  placeholder="Enter phone number"
  className="border p-3 rounded-lg"
  value={formData.phoneNumber}
  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} 
  required
/>
<button 
  className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
  onClick={handleSavePhoneNumber} // Save the phone number
>
  Save Contact
</button>


      <div className="flex flex-col gap-4">
        {/* Input for location */}
        <input
          type="text"
          placeholder="Enter property location"
          className="border p-3 rounded-lg"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        {/* Display Map Only When Location is Entered */}
        {location && (
          <iframe
            title="map"
            className="w-full h-64 border rounded-lg"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              location
            )}&output=embed`}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        )}
      </div>

        <select
          id="katha"
          required
          onChange={handleChange}
          value={formData.katha}
          className="border p-3 rounded-lg"
        >
          <option value="">Select Katha Type</option>
          <option value="A Katha">A Katha</option>
          <option value="B Katha">B Katha</option>
          <option value="Others">Others</option>
        </select>

          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="sale"
                className="w-5"
                onChange={handleChange}
                checked={formData.type === "sale"}
              />
              <span>Sale</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="rent"
                className="w-5"
                onChange={handleChange}
                checked={formData.type === "rent"}
              />
              <span>Rent</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="parking"
                className="w-5"
                onChange={handleChange}
                checked={formData.parking}
              />
              <span>Parking spot</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="furnished"
                className="w-5"
                onChange={handleChange}
                checked={formData.furnished}
              />
              <span>Furnished</span>
            </div>
            

            <div className="flex gap-2">
              <input
                type="checkbox"
                id="offer"
                className="w-5"
                onChange={handleChange}
                checked={formData.offer}
              />
              <span>Offer</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="bedrooms"
                min={"1"}
                max={"50"}
                required
                className="p-3 border border-gray-300 rounded-lg"
                onChange={handleChange}
                value={formData.bedrooms}
              />
              <p>Beds</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="bathrooms"
                min={"1"}
                max={"50"}
                required
                className="p-3 border border-gray-300 rounded-lg"
                onChange={handleChange}
                value={formData.bathrooms}
              />
              <p>Baths</p>
            </div>


            <div className="flex items-center gap-2">
              <input
                type="number"
                id="regularPrice"
                min={"50"}
                max={"100000000"}
                required
                className="p-3 border border-gray-300 rounded-lg"
                onChange={handleChange}
                value={formData.regularPrice}
              />
              <div className="flex flex-col items-center">
                <p>Regular Price</p>
                <span className="text-xs">(₹ / Month)</span>
              </div>
            </div>

            {formData.offer && (
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  id="discountPrice"
                  min={"0"}
                  max={"100000000"}
                  required
                  className="p-3 border border-gray-300 rounded-lg"
                  onChange={handleChange}
                  value={formData.discountPrice}
                />
                <div className="flex flex-col items-center">
                  <p>Discounted Price</p>
                  <span className="text-xs">(₹ / Month)</span>
                </div>
              </div>
            )}
          </div>
        </div>
          


        <div className="flex flex-col flex-1 gap-4">
          <p className="font-semibold">
            Images:
            <span className="font-normal text-gray-600 ml-2">
              The first image will be the cover (max 6)
            </span>
          </p>
          <div className="flex gap-4">
            <input
              onChange={(e) => setFiles(e.target.files)}
              className="p-3 border border-gray-300 rounded w-full"
              type="file"
              id="images"
              accept="image/*"
              multiple
            />
            <button
              onClick={handleImageSubmit}
              disabled={uploading}
              type="button"
              className="p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80"
            >
              {uploading ? "Uploading..." : "Upload"}
            </button>
          </div>
          <p className="text-red-700 text-sm">
            {imageUploadError && imageUploadError}
          </p>
          {formData.imageUrls.length > 0 &&
            formData.imageUrls.map((url, index) => (
              <div
                key={url}
                className="flex justify-between p-3 border items-center"
              >
                <img
                  src={url}
                  alt="listing image"
                  className="w-20 h-20 object-contain rounded-lg"
                />
                <button
                  onClick={() => handleRemoveImage(index)}
                  className=" bg-red-700 p-3 text-white rounded-lg uppercase hover:opacity-75"
                >
                  Delete
                </button>
              </div>
            ))}
          <button
            disabled={loading || uploading}
            className="p-3 bg-blue-700 text-white rounded-lg uppercase hover:opacity-90 disabled:opacity-80"
          >
            {loading ? "Creating...." : "Create Listing"}
          </button>
          {error && <p className="text-red-700 text-sm">{error}</p>}


      {/* Verify Option */}
<div className="mt-4">
  <label className="block text-lg font-semibold">Verification:</label>
  <div className="flex gap-6 mt-2">
    <div className="flex gap-2">
      <input
        type="radio"
        id="withoutVerify"
        name="verify"
        checked={!formData.isVerified}
        onChange={() => setFormData({ ...formData, isVerified: false })}
      />
      <label htmlFor="withoutVerify">Without Verify</label>
    </div>
    <div className="flex gap-2">
      <input
        type="radio"
        id="withVerify"
        name="verify"
        checked={formData.isVerified}
        onChange={async () => {
          setFormData({ ...formData, isVerified: true });

          try {
            const res = await fetch("/api/email/send-verification-email", { // ✅ Fixed endpoint
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                listingDetails: formData, // Include listing data
              }),
            });

            const data = await res.json();
            if (!res.ok) {
              throw new Error(data.message || "Failed to send email.");
            }

            alert("Verification request sent to admin!");
          } catch (error) {
            console.error("Error sending verification email:", error);
            alert("Error sending email. Please try again.");
          }
        }}
      />
      <label htmlFor="withVerify">With Verify</label>
    </div>
  </div>
</div>




        </div>
      </form>
    </main>
  );
};

export default CreateListing;


