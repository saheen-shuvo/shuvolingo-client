/* eslint-disable no-unused-vars */
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
import Categorised from "../pages/categorised/Categorised";
import MyBookedTutors from "../pages/myBookedTutors/MyBookedTutors";
import axios from "axios";

const router = createBrowserRouter([
  {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
          {
              index: true,
              element: <Home />
          },
          {
              path: 'register',
              element: <Register />
          },
          {
              path: 'signin',
              element: <SignIn />
          },
          {
              path: 'findtutors',
              element: <PopularTutors />
          },
          {
              path: 'addtutorials',
              element: <PrivateRoute><AddTutorials /></PrivateRoute>
          },
          {
              path: 'myaddedtutorials',
              element: <PrivateRoute><MyAddedTutorials /></PrivateRoute>
          },
          {
              path: 'mybookedtutors',
              element: <PrivateRoute><MyBookedTutors /></PrivateRoute>
          },
          {
              path: 'edittutorials/:id',
              element: <PrivateRoute><EditTutorials /></PrivateRoute>,
              loader: async ({ params }) => {
                  try {
                      const res = await fetch(`http://localhost:5000/tutors/${params.id}`);
                      if (!res.ok) throw new Error('Failed to fetch tutorial');
                      return res.json();
                  } catch (error) {
                      throw new Error('Error loading tutorial');
                  }
              }
          },
          {
              path: 'tutors/:id',
              element: <PrivateRoute><TutorDetail /></PrivateRoute>,
              loader: async ({ params }) => {
                  try {
                      const response = await axios.get(`http://localhost:5000/tutors/${params.id}`);
                      return response.data;
                  } catch (error) {
                      throw new Error('Tutor not found');
                  }
              }
          },
          {
              path: 'tutors/language/:language',
              element: <PrivateRoute><Categorised /></PrivateRoute>,
              loader: async ({ params }) => {
                  try {
                      const res = await fetch(
                          `http://localhost:5000/tutors?language=${params.language}`
                      );
                      if (!res.ok) throw new Error('Failed to fetch tutors');
                      return res.json();
                  } catch (error) {
                      throw new Error('Error loading tutors');
                  }
              }
          },
      ]
  }
]);

export default router;