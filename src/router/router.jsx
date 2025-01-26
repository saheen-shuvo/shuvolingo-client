import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import SignIn from "../pages/signin/SignIn";
import PopularTutors from "../pages/popularTutors/PopularTutors";
import TutorDetail from "../pages/tutorDetail/TutorDetail";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <h2>Route Not Found. HEHEHEHHEE</h2>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/signin',
            element: <SignIn></SignIn>
        },
        {
            path: '/findtutors',
            element: <PopularTutors></PopularTutors>
        },
        {
            path: '/tutors/:id',
            element: <TutorDetail></TutorDetail>,
            loader: ({params}) => fetch(`http://localhost:5000/tutors/${params.id}`)
        }
      ]
    },
  ]);

  export default router;