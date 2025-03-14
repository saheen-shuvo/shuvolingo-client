import { FaRegStarHalfStroke } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PopularTutorCard = ({ tutor }) => {
  // eslint-disable-next-line react/prop-types
  const { _id, name, image, language, description, price, review } = tutor;

  return (
    <div className="flex flex-col sm:flex-row bg-base-100 shadow-xl rounded-2xl p-4 sm:p-0 ">
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
        <p className="text-xs sm:text-sm font-medium">Price: ${price}/hr</p>
        <p className="text-xs sm:text-sm font-medium flex items-center gap-1">Rating: {review}<FaRegStarHalfStroke /></p>
        <div className="card-actions justify-end mt-2">
          <Link to={`/tutors/${_id}`}>
            <button className="btn btn-primary btn-sm sm:btn-md">
              Details <MdArrowOutward />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularTutorCard;
