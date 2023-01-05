import { createContext, ReactNode, useContext, useState } from "react";

//components
import { Navbar } from "../components/Navbar";

type NavContextProps = {
  children: ReactNode;
};

type NavContextFunctions = {
  openNav: () => void;
  closeNav: () => void;
  NavState:() => Boolean;
};

const NavbarContext = createContext({} as NavContextFunctions);

//hook
export function useNavContext() {
  return useContext(NavbarContext);
}

export function NavProvider({ children }: NavContextProps) {
  const [navOpen, setNavOpen] = useState<Boolean>(false);

  const openNav = () => setNavOpen(true);
  const closeNav = () => setNavOpen(false);
  const NavState = () => {
    return navOpen;
  }

  return (
    <NavbarContext.Provider value={{ openNav, closeNav, NavState }}>
      {children}
      <Navbar isOpen={navOpen} />
    </NavbarContext.Provider>
  );
}
