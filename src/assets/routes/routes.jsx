import { createBrowserRouter } from "react-router-dom";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import App from "../../App";
import Messenger from "../Pages/Messenger";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/messenger",
    element: <Messenger />,
  },
]);

export default routes;
