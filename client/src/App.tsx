import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { SideBarProvider } from "./context/SideBarProvider";

function App() {
  return (
    <>
      <SideBarProvider>
        <RouterProvider router={router} />
      </SideBarProvider>
    </>
  );
}

export default App;
