/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AuthContext from "../../context/AuthContext/AuthContext";

const EditTutorials = () => {
  const tutor = useLoaderData();
  const { _id, name, image, language, description, price, review, email } =
    tutor;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdateTutorial = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedTutorial = Object.fromEntries(formData.entries());
    console.log(updatedTutorial);

    fetch(`http://localhost:5000/tutors/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTutorial),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Tutorial Updated Successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/myaddedtutorials");
        }
      });
  };

  return (
    <div className="my-8 lg:flex lg:flex-col lg:justify-center lg:items-center">
      <h2 className="text-xl font-bold lg:text-3xl text-center">
        Update Your Tutorial
      </h2>
      <form onSubmit={handleUpdateTutorial} className="card-body">
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
          <button className="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
  );
};

export default EditTutorials;
