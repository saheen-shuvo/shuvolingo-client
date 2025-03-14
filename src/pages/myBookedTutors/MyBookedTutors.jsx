/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const MyBookedTutors = () => {
  const [bookedTutors, setBookedTutors] = useState([""]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBookedTutors = async () => {
      try {
        const response = await axios.get(
          `https://shuvolingo-server.vercel.app/bookedtutors?email=${user.email}`
        );
        setBookedTutors(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching booked tutors:", error);
        setIsLoading(false);
      }
    };

    fetchBookedTutors();
  }, [user.email]);

  const handleReview = async (tutorId) => {
    try {
      const result = await axios.put(
        `https://shuvolingo-server.vercel.app/tutors/review/${tutorId}`
      );
      toast.success("Review Submitted Successfully");
      navigate("/findtutors");
      setBookedTutors((prev) =>
        prev.map((tutor) =>
          tutor.tutorId === tutorId
            ? { ...tutor, review: tutor.review + 1 }
            : tutor
        )
      );
    } catch (error) {
      console.error("Review submission failed:", error);
      alert("Failed to submit review. Please try again.");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center my-64">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="mt-20 md:mt-24 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">My Booked Tutors</h1>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 mx-4 md:mx-0">
        {bookedTutors.map((tutor) => (
          <div key={tutor._id} className="card bg-base-200 shadow-sm">
            <figure className="px-10 pt-10">
              <img
                src={tutor.image}
                alt={tutor.language}
                className="rounded-xl w-56 h-64 object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{tutor.language}</h2>
              <p className="font-semibold">Price: ${tutor.price}/hr</p>
              <p className="text-gray-600">Email: {tutor.email}</p>
              <div className="card-actions">
                <button
                  onClick={() => handleReview(tutor.tutorId)}
                  className="btn btn-primary"
                >
                  Add Review
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookedTutors;
