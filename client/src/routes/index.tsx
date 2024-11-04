import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Message from "../pages/message/Message";
import ChatGroup from "../pages/chatgroup/ChatGroup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Message />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/chatgroup",
    element: <ChatGroup />,
  },
]);

export default router;
