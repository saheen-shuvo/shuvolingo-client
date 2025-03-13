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
    <div className="hero bg-base-200 mt-20 md:mt-28 max-w-7xl mx-auto rounded-2xl">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={image}
          className="max-w-sm rounded-lg shadow-2xl"
          alt={`${name}'s profile`}
        />
        <div>
          <h1 className="text-3xl sm:text-5xl font-bold">{name}</h1>
          <p className="py-4 text-gray-600">{description}</p>
          <p className="text-lg font-medium">Language: {language}</p>
          <p className="text-lg font-medium">Email: {email}</p>
          <p className="text-lg font-medium">Price: ${price}/hr</p>
          <p className="text-lg font-medium">Rating: {review}⭐</p>
          <button onClick={handleBookTutor} className="btn btn-primary mt-4">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorDetail;
