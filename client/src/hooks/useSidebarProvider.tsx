import { useContext } from "react";
import { SideBarContext } from "../context/SideBarProvider";

export const useSideBarProvider = () => useContext(SideBarContext);
