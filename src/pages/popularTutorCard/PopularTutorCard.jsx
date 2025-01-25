// eslint-disable-next-line react/prop-types
const PopularTutorCard = ({ tutor }) => {
    // eslint-disable-next-line react/prop-types
    const { name, image, language, description, price, review } = tutor;
  
    return (
      <div className="flex flex-col sm:flex-row bg-base-100 shadow-xl rounded-2xl p-4 sm:p-0">
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
          <p className="text-xs sm:text-sm font-medium">Rating: {review}⭐</p>
          <div className="card-actions justify-end mt-2">
            <button className="btn btn-primary btn-sm sm:btn-md">Book Now</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default PopularTutorCard;
  