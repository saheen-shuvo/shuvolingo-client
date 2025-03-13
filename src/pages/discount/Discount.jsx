import { NavLink } from "react-router-dom";
import DiscountImg from "../../assets/images/Discount.jpg"

const Discount = () => {
  return (
    <div className="my-8 md:my-16 max-w-7xl mx-auto px-4 md:px-0">
      <h1 className="text-center text-orange-400 font-extrabold text-2xl md:text-5xl">
        30% FLAT DISCOUNT
      </h1>
      <h3 className="text-center text-orange-400 font-extrabold text-lg md:text-xl">
        ON ALL PAID COURSES
      </h3>
      <p className="text-center font-semibold mb-3">(All Languages)</p>
      <div className="flex justify-center">
      <img className="border-4 border-blue-800 border-dotted" src={DiscountImg} alt="" />
      </div>
      <div className="flex justify-center mt-3">
        <NavLink to="/findtutors">
          <button className="btn btn-primary mt-[-62px] px-12">Get Now</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Discount;
