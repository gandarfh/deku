import { Box } from "@chakra-ui/react";
import React from "react";

interface ScreenSizeProps {
  children: React.ReactNode;
  type: "desktop" | "mobile";
}

const ScreenSize = ({ children, type }: ScreenSizeProps) => {
  const types = {
    desktop: ["none", null, "block"],
    mobile: ["block", null, "none"],
  };

  return (
    <Box w="100%" d={types[type]}>
      {children}
    </Box>
  );
};

export default ScreenSize;
