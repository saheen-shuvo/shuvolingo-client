import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import SignIn from "../pages/signin/SignIn";
import PopularTutors from "../pages/popularTutors/PopularTutors";
import TutorDetail from "../pages/tutorDetail/TutorDetail";
import PrivateRoute from "./PrivateRoute";
import AddTutorials from "../pages/addTutorials/AddTutorials";
import MyAddedTutorials from "../pages/myAddedTutorials/MyAddedTutorials";
import EditTutorials from "../pages/editTutorials/EditTutorials";
import ErrorPage from "../pages/errorPage/ErrorPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
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
            path: '/addtutorials',
            element: <PrivateRoute><AddTutorials></AddTutorials></PrivateRoute>
        },
        {
            path: '/myaddedtutorials',
            element: <PrivateRoute><MyAddedTutorials></MyAddedTutorials></PrivateRoute>
        },
        {
            path: '/edittutorials/:id',
            element: <PrivateRoute><EditTutorials></EditTutorials></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/tutors/${params.id}`)
        },
        {
            path: '/tutors/:id',
            element: <PrivateRoute><TutorDetail></TutorDetail></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/tutors/${params.id}`)
        }
      ]
    },
  ]);

  export default router;