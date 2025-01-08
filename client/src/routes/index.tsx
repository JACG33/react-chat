import { createBrowserRouter } from "react-router-dom";
// import Login from "../pages/auth/Login";
// import Message from "../pages/message/Message";
import { lazy, Suspense } from "react";

const Login = lazy(() => import("../pages/auth/Login"))
const Message = lazy(() => import("../pages/message/Message"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback="Loading...">
      <Login />
    </Suspense>,
  },
  {
    path: "/chat",
    element: <Suspense fallback="Loading...">
      <Message />
    </Suspense>,
  },
]);

export default router;
