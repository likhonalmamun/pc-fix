import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App max-w-[1050px] mx-auto">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
