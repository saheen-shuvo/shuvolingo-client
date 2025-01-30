import { useContext, useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext/AuthContext";

const MyBookedTutors = () => {
  const [bookedTutors, setBookedTutors] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchBookedTutors = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/bookedtutors?email=${user.email}`
        );
        setBookedTutors(response.data);
      } catch (error) {
        console.error("Error fetching booked tutors:", error);
      }
    };

    fetchBookedTutors();
  }, [user.email]);

  const handleReview = async (tutorId) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/tutors/review/${tutorId}`
      );
      
      if (response.data.message) {
        alert("Review submitted successfully!");
        setBookedTutors(prev => prev.map(tutor => 
          tutor.tutorId === tutorId ? {...tutor, review: tutor.review + 1} : tutor
        ));
      }
    } catch (error) {
      console.error("Review submission failed:", error);
      alert("Failed to submit review. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">My Booked Tutors</h1>
      <div className="grid gap-4">
        {bookedTutors.map((tutor) => (
          <div key={tutor._id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <img 
                src={tutor.image} 
                alt={tutor.language}
                className="w-32 h-32 object-cover rounded-lg"
              />
              <h2 className="card-title">{tutor.language}</h2>
              <p>Price: ${tutor.price}/hr</p>
              <div className="card-actions justify-between items-center">
                <button 
                  onClick={() => handleReview(tutor.tutorId)}
                  className="btn btn-success"
                >
                  Add Review
                </button>
                <span className="badge badge-primary">
                  Reviews: {tutor.review}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookedTutors;