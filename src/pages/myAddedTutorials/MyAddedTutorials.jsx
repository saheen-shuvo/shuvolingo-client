/* eslint-disable react/jsx-key */
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";


const MyAddedTutorials = () => {

    const [myTutors, setMyTutors] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/tutors?email=${user.email}`)
        .then(res => res.json())
        .then(data => setMyTutors(data))
    }, [user.email])

    return (
        <div>
        <h2 className="text-center mt-8 mb-8 text-2xl font-bold">My Added Tutorials: {myTutors.length}</h2>
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
                  <td><img className="w-8 h-10 rounded-lg border" src={tutor.image} alt="" /></td>
                  <td>{tutor?.language}</td>
                  <td>{tutor?.price}$/hr</td>
                  <td>{tutor?.review}⭐</td>
                  <td>{tutor?.description}</td>
                  <td><button className="btn border-2 border-red-700">Delete</button></td>
                  <td><button className="btn border-2 border-green-700">Edit</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyAddedTutorials;