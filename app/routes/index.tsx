import { Box, Container } from "@chakra-ui/react";
import { useMachine } from "@xstate/react";
import { Outlet } from "remix";
import { createMachine } from "xstate";
import Layout from "~/shared/layout";

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
