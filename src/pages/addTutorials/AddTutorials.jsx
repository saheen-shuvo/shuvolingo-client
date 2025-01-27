
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";

const AddTutorials = () => {
  const { loading, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddTutorial = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newTutorial = Object.fromEntries(formData.entries());
    console.log(newTutorial);

    fetch("http://localhost:5000/tutors", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTutorial),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Tutorial has been added",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/myaddedtutors");
        }
      });
  };

  if (loading) {
    return (
      <div className="flex justify-center mx-auto my-64">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="my-8 lg:flex lg:flex-col lg:justify-center lg:items-center">
      <h2 className="text-xl font-bold lg:text-3xl text-center">
        Add A New Tutorial
      </h2>
      <form onSubmit={handleAddTutorial} className="card-body">
        {/* NAME */}
        <div className="form-control flex flex-col gap-1 lg:w-96">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            value={user?.displayName || ""}
            name="name"
            className="input input-bordered"
            readOnly
          />
        </div>

        {/* EMAIL */}
        <div className="form-control flex flex-col gap-1">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            value={user?.email || ""}
            name="email"
            className="input input-bordered"
            readOnly
          />
        </div>

        {/* IMG URL */}
        <div className="form-control flex flex-col gap-1">
          <label className="label">
            <span className="label-text">Tutorial Image</span>
          </label>
          <input
            type="url"
            name="image"
            placeholder="image url"
            className="input input-bordered"
            required
          />
        </div>

        {/*  LANGUAGE */}
        <div className="form-control flex flex-col gap-1">
          <label className="label">
            <span className="label-text">Language</span>
          </label>
          <input
            type="text"
            placeholder="language"
            name="language"
            className="input input-bordered"
            required
          />
        </div>

        {/*  PRICE */}
        <div className="form-control flex flex-col gap-1">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            placeholder="price"
            name="price"
            className="input input-bordered"
            required
          />
        </div>

        {/*  Review */}
        <div className="form-control flex flex-col gap-1">
          <label className="label">
            <span className="label-text">Review</span>
          </label>
          <input
            type="number"
            placeholder="review"
            defaultValue={0}
            name="review"
            className="input input-bordered"
            readOnly
          />
        </div>

        {/*  DESCRIPTION */}
        <div className="form-control flex flex-col gap-1">
          <label className="label">
            <span className="label-text"> Description</span>
          </label>
          <input
            type="text"
            placeholder="Job Description"
            name="description"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddTutorials;
