/* eslint-disable react/jsx-key */
import { useContext, useEffect, useState } from "react";
import PopularTutorCard from "../popularTutorCard/PopularTutorCard";
import AuthContext from "../../context/AuthContext/AuthContext";

const PopularTutors = () => {
  const { loading } = useContext(AuthContext);
  const [tutors, setTutors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/tutors")
      .then((res) => res.json())
      .then((data) => {
        setTutors(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching tutors:", error);
        setIsLoading(false);
      });
  }, []);

  if (loading || isLoading) {
    return (
        <div className="flex justify-center my-64">
            <span className="loading loading-dots loading-xl"></span>
        </div>
    )
  }

  return (
    <div className="">
      <h1 className="text-4xl font-bold text-center my-8">
        Our Popular Tutors
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {
          tutors.map((tutor) => (
            <PopularTutorCard tutor={tutor}></PopularTutorCard>
          ))
        }
      </div>
    </div>
  );
};

export default PopularTutors;
