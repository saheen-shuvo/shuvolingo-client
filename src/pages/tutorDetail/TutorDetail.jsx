/* eslint-disable no-unused-vars */

import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";

const TutorDetail = () => {
  const tutor = useLoaderData();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { _id, name, image, language, description, price, review, email } =
    tutor;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleBookTutor = async () => {
    setLoading(true);
    setError("");

    try {
      const bookingData = {
        tutorId: tutor._id,
        image: tutor.image,
        language: tutor.language,
        price: tutor.price,
        tutorEmail: tutor.email,
        email: user?.email,
      };

      const response = await axios.post(
        "https://shuvolingo-server.vercel.app/bookedtutors",
        bookingData
      );

      if (response.data.insertedId) {
        toast.success("Tutor booked successfully!");
        navigate("/mybookedtutors");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Booking failed. Please try again."
      );
      console.error("Booking error:", err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="mt-16 mb-6 flex flex-col sm:flex-row bg-base-100 shadow-xl rounded-2xl p-4 sm:p-0">
      <figure className="w-full sm:w-56 h-48 sm:h-full flex-shrink-0">
        <img
          className="w-full h-full object-cover object-top rounded-t-2xl lg:rounded-l-2xl sm:rounded-l-2xl sm:rounded-t-none"
          src={image}
          alt={`${name}'s profile`}
        />
      </figure>
      <div className="card-body flex-1">
        <h2 className="text-lg sm:text-xl font-bold">{name}</h2>
        <p className="text-xs sm:text-sm text-gray-600">{description}</p>
        <p className="text-xs sm:text-sm font-medium">Language: {language}</p>
        <p className="text-xs sm:text-sm font-medium">Email: {email}</p>
        <p className="text-xs sm:text-sm font-medium">Price: ${price}/hr</p>
        <p className="text-xs sm:text-sm font-medium">Rating: {review}⭐</p>
        <div className="card-actions justify-end mt-2">
          <button
            onClick={handleBookTutor}
            className="btn btn-primary btn-sm sm:btn-md"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorDetail;
