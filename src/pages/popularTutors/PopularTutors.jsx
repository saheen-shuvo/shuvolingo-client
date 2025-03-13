
import { useContext, useEffect, useState } from "react";
import PopularTutorCard from "../popularTutorCard/PopularTutorCard";
import AuthContext from "../../context/AuthContext/AuthContext";

const PopularTutors = () => {
  const { loading } = useContext(AuthContext);
  const [tutors, setTutors] = useState([]);
  const [filteredTutors, setFilteredTutors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://shuvolingo-server.vercel.app/tutors")
      .then((res) => res.json())
      .then((data) => {
        setTutors(data);
        setFilteredTutors(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching tutors:", error);
        setIsLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = tutors.filter((tutor) =>
      tutor.language.toLowerCase().includes(query)
    );
    setFilteredTutors(filtered);
  };

  if (loading || isLoading) {
    return (
      <div className="flex justify-center my-64">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="">
      <h1 className="text-4xl font-bold text-center my-8">
        Our Popular Tutors
      </h1>
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search by language..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredTutors.length === 0 ? (
          <div className="col-span-2 text-center text-gray-600 py-8">
            No tutors found for {searchQuery}
          </div>
        ) : (
          filteredTutors.map((tutor) => (
            <PopularTutorCard key={tutor._id} tutor={tutor} />
          ))
        )}
      </div>
    </div>
  );
};

export default PopularTutors;
