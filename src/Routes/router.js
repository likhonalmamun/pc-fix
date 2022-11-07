import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      {
        path: "/myReviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
