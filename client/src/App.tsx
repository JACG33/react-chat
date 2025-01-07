import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { SideBarProvider } from "./context/SideBarProvider";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <SideBarProvider>
        <RouterProvider router={router} />
      </SideBarProvider>
    </AuthProvider>
  );
}

export default App;
