import { useMachine } from "@xstate/react";
import { createMachine } from "xstate";
import ScreenSize from "~/shared/screen-size";
import HeaderDesktop from "./desktop";
import MenuProvider from "./menu-machine";
import HeaderMobile from "./mobile";

const Header = () => {
  return (
    <>
      <MenuProvider>
        <ScreenSize type="mobile">
          <HeaderMobile />
        </ScreenSize>
        <ScreenSize type="desktop">
          <HeaderDesktop />
        </ScreenSize>
      </MenuProvider>
    </>
  );
};

export default Header;
