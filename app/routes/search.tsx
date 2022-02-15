import { Heading } from "@chakra-ui/react";
import { Outlet } from "remix";
import Layout from "~/shared/layout";

export default function Index() {
  return (
    <Layout>
      {/* <Container maxW="container.xl" mt="10"> */}
      <Heading>Search</Heading>
      <Outlet />
      {/* </Container> */}
    </Layout>
  );
}
