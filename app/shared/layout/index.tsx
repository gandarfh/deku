import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex flexDir="column">
      <Header />
      {children}
      <Footer />
    </Flex>
  );
};

export default Layout;

/* 
render pages with default layout (navbar + header + footer + page)


header  header  header

navbar  page page page
navbar  page page page

footer  footer  footer


*/
