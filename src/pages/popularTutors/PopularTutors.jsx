
import { useContext, useEffect, useState } from "react";
import PopularTutorCard from "../popularTutorCard/PopularTutorCard";
import AuthContext from "../../context/AuthContext/AuthContext";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const PopularTutors = () => {
  const { loading } = useContext(AuthContext);
  const [tutors, setTutors] = useState([]);
  const [filteredTutors, setFilteredTutors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");

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

  const handleSort = (order) => {
    setSortOrder(order);
    const sortedTutors = [...filteredTutors].sort((a, b) =>
      order === "asc" ? a.price - b.price : b.price - a.price
    );
    setFilteredTutors(sortedTutors);
  };

  if (loading || isLoading) {
    return (
      <div className="flex justify-center my-64">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="mt-20 md:mt-24 px-4 md:px-0 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-3xl font-bold text-center my-8">
        Our Popular Tutors
      </h1>
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-8 mx-4">
        <input
          type="text"
          placeholder="Search by language..."
          value={searchQuery}
          onChange={handleSearch}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex justify-center gap-2">
          <button
            className={`btn ${sortOrder === "asc" ? "btn-primary" : "btn-outline"}`}
            onClick={() => handleSort("asc")}
          >
            Sort by Price<FaArrowUp />
          </button>
          <button
            className={`btn ${sortOrder === "desc" ? "btn-primary" : "btn-outline"}`}
            onClick={() => handleSort("desc")}
          >
            Sort by Price<FaArrowDown />
          </button>
        </div>
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
