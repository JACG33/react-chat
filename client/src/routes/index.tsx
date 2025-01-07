import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import Message from "../pages/message/Message";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/chat",
    element: <Message />,
  },
]);

export default router;
