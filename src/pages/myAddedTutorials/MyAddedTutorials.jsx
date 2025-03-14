import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { MdAdd } from "react-icons/md";

const MyAddedTutorials = () => {
  const [myTutors, setMyTutors] = useState([]);
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://shuvolingo-server.vercel.app/tutors?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyTutors(data || []);
        setIsLoading(false);
      });
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
        fetch(`https://shuvolingo-server.vercel.app/tutors/${_id}`, {
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

  if (isLoading) {
    return (
      <div className="flex justify-center my-64">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="mt-20 md:mt-24 mx-4">
      <h2 className="text-center mt-8 mb-8 text-2xl font-bold">
        My Added Tutorials
      </h2>
      {!myTutors || myTutors.length === 0 ? (
        <div className="text-center text-xl font-semibold my-28">
          You have not added any tutorial yet! <br />
          <br />
          <Link to="/addtutorials">
            <button className="btn btn-primary">
              Add Tutorial <MdAdd />
            </button>
          </Link>
        </div>
      ) : (
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
                <tr key={tutor._id}>
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
                  <td className="flex items-center gap-1">
                    {tutor?.review}
                    <FaRegStarHalfStroke />
                  </td>
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
      )}
    </div>
  );
};

export default MyAddedTutorials;
