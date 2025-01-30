
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { useParams } from "react-router-dom";

const Categorised = () => {
  const [categorised, setCategorised] = useState([]);
  const { user, loading } = useContext(AuthContext);
  const { language } = useParams();
  console.log(language);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/tutors?language=${language}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            const tutorLanguage = data[0].language;
            return fetch(
              `http://localhost:5000/tutors?language=${tutorLanguage}`
            );
          } else {
            throw new Error("Tutor not found");
          }
        })
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) {
            setCategorised(data);
          } else {
            setCategorised([]);
          }
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [user?.email, language]);

  if (loading) {
    return (
      <div className="flex justify-center my-64">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="mx-8">
      <h1 className="text-xl font-semibold mb-4">Tutors for {language}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categorised.map((tutor) => (
          <div key={tutor._id} className="border p-4 rounded-lg shadow-lg">
            <img
              src={tutor.image}
              alt={tutor.name}
              className="w-full h-64 object-cover object-top rounded-t-lg"
            />
            <h2 className="text-xl font-semibold mt-2">{tutor.name}</h2>
            <p className="text-gray-600">{tutor.description}</p>
            <p className="text-blue-600 font-bold">${tutor.price}/hr</p>
            <p className="text-yellow-700">Rating: {tutor.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categorised;
