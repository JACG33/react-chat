import { createContext, ReactNode, useState } from "react";

interface SideBarContext {
  openSeccion: boolean;
  setOpenSecction: (opcion: boolean) => void;
}

export const SideBarContext = createContext<SideBarContext>({
  openSeccion: false,
  setOpenSecction: () => {},
});

interface SideBarProvider {
  children: ReactNode;
}

export const SideBarProvider: React.FC<SideBarProvider> = ({ children }) => {
  const [openSeccion, setOpenSecction] = useState(true);
  return (
    <SideBarContext.Provider value={{ openSeccion, setOpenSecction }}>
      {children}
    </SideBarContext.Provider>
  );
};
