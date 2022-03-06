import { Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "./footer";
import Header from "./header";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [state, setState] = React.useState(false);

  React.useEffect(() => {
    setState(true);
  }, []);

  if (!state) return null;

  return (
    <Flex flexDir="column">
      <Header />
      {children}
      <Footer />
    </Flex>
  );
};

export default Layout;
