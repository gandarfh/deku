import { Show } from "@chakra-ui/react";
import React from "react";

interface ScreenSizeProps {
  children: React.ReactNode;
  type: "desktop" | "mobile";
}

const ScreenSize = ({ children, type }: ScreenSizeProps) => {
  const types = {
    desktop: "(min-width: 768px)",
    mobile: "(max-width: 768px)",
  };

  return <Show breakpoint={types[type]}>{children}</Show>;
};

export default ScreenSize;
