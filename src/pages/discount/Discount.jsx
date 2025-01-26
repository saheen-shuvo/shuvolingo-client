import { NavLink } from "react-router-dom";
import winterSale from "../../assets/images/winterSale.jpeg"

const Discount = () => {
  return (
    <div className="my-8">
      <h1 className="text-center text-red-700 font-extrabold text-5xl">
        30% FLAT DISCOUNT
      </h1>
      <h3 className="text-center text-red-700 font-extrabold text-xl">
        ON ALL PAID COURSES
      </h3>
      <p className="text-center font-semibold mb-3">(All Languages)</p>
      <div className="flex justify-center">
      <img className="border-4 border-blue-800 border-dotted" src={winterSale} alt="" />
      </div>
      <div className="flex justify-center mt-3">
        <NavLink to="/">
          <button className="btn btn-primary">Get Now</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Discount;
