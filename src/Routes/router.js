import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddService from "../Pages/AddService/AddService";
import AllServices from "../Pages/AllServices/AllServices";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import EditReview from "../Pages/MyReviews/EditReview";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

// main router defination
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      { path: "/services", element: <AllServices></AllServices> },
      {
        path: "/services/:id",
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-two.vercel.app/services/${params.id}`
          ),
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/edit/:id",
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-two.vercel.app/edit/${params.id}`
          ),
        element: <EditReview></EditReview>,
      },
      {
        path: "/myReviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
