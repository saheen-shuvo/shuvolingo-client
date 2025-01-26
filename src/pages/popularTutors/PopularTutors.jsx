import { useEffect, useState } from "react";
import PopularTutorCard from "../popularTutorCard/PopularTutorCard";

const PopularTutors = () => {
    const [tutors, setTutors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tutors')
        .then(res => res.json())
        .then(data => setTutors(data))
    }, [])

    return (
        <div className="">
            <h1 className="text-4xl font-bold text-center my-8">Our Popular Tutors</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {
                    // eslint-disable-next-line react/jsx-key
                    tutors.map(tutor =><PopularTutorCard tutor={tutor}></PopularTutorCard>)
                }
            </div>
        </div>
    );
};

export default PopularTutors;