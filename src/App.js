import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/router";

function App() {
  return (
    <div className="App max-w-[1050px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
