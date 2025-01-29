/* eslint-disable react/jsx-key */
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyAddedTutorials = () => {
  const [myTutors, setMyTutors] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/tutors?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyTutors(data));
  }, [user.email]);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/tutors/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Tutorial has been deleted.",
                icon: "success",
              });
              const remaining = myTutors.filter((tut) => tut._id !== _id);
              setMyTutors(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <h2 className="text-center mt-8 mb-8 text-2xl font-bold">
        My Added Tutorials
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Image</th>
              <th>Language</th>
              <th>Price</th>
              <th>Review</th>
              <th>Description</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {myTutors?.map((tutor, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{tutor.name}</td>
                <td>
                  <img
                    className="w-8 h-10 rounded-lg border"
                    src={tutor.image}
                    alt=""
                  />
                </td>
                <td>{tutor?.language}</td>
                <td>{tutor?.price}$/hr</td>
                <td>{tutor?.review}⭐</td>
                <td>{tutor?.description}</td>
                <td>
                  <button
                    onClick={() => handleDelete(tutor._id)}
                    className="btn border-2 border-red-700"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <Link to={`/edittutorials/${tutor._id}`}>
                    <button className="btn border-2 border-green-700">
                      Edit
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAddedTutorials;
