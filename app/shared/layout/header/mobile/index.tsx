import { Container, Flex, Input, Divider, IconButton } from "@chakra-ui/react";
import { UserIcon } from "~/assets/icons/navbar/user.icon";
import Logo from "~/assets/logo";
import Menu from "./menu";

const Search = () => {
  return <Input placeholder="Search" />;
};

const ButtonProfile = () => {
  return (
    <IconButton
      variant="outline"
      px="8px"
      borderWidth={2}
      aria-label="user icon"
      borderRadius="full"
    >
      <UserIcon />
    </IconButton>
  );
};

const HeaderMobile = () => {
  return (
    <>
      <Container>
        <Flex align="center" justify="space-between" mb="40px" mt="32px">
          <Flex align="center" gap="20px">
            <Menu />
            <Logo />
          </Flex>
          <ButtonProfile />
        </Flex>
        <Search />
      </Container>
      <Divider mt="20px" />
    </>
  );
};

export default HeaderMobile;
