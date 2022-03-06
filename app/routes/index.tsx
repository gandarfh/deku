import { Box, Container } from "@chakra-ui/react";
import { Outlet } from "remix";
import Layout from "~/ui/layout";

export default function Index() {
  return (
    <Layout>
      <Container maxW="container.xl" mt="10">
        <Box h="50vh">Jao</Box>
        <Outlet />
      </Container>
    </Layout>
  );
}
