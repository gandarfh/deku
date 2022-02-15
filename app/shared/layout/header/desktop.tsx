import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import { Link } from "remix";
import { CartIcon } from "~/assets/icons/navbar/cart.icon";
import { FavIcon } from "~/assets/icons/navbar/fav.icon";
import { UserIcon } from "~/assets/icons/navbar/user.icon";
import Logo from "~/assets/logo";

const Search = () => {
  return <Input maxW={400} placeholder="Search" />;
};

const ButtonProfile = () => {
  return (
    <Flex align="center" gap="12px">
      <IconButton
        variant="outline"
        px="8px"
        borderWidth={2}
        aria-label="user icon"
      >
        <UserIcon />
      </IconButton>
      <Box>
        <Heading size="heading-5">My Account</Heading>
        <Heading size="heading-5" color="text.low" fontWeight="regular">
          View Profile
        </Heading>
      </Box>
    </Flex>
  );
};

const Categories = () => {
  return (
    <Box>
      <Heading size="heading-5" fontWeight="medium">
        Categories
      </Heading>
    </Box>
  );
};

const InternalLinks = () => {
  return (
    <Flex align="center" gap="40px" mb="24px">
      <Link to="">
        <Heading as="span" size="heading-5" fontWeight="medium">
          link 1
        </Heading>
      </Link>
      <Link to="">
        <Heading as="span" size="heading-5" fontWeight="medium">
          link 2
        </Heading>
      </Link>
      <Link to="">
        <Heading as="span" size="heading-5" fontWeight="medium">
          link 3
        </Heading>
      </Link>
    </Flex>
  );
};

const HotAccess = () => {
  return (
    <Flex align="center" gap="40px" mb="24px">
      <Button
        iconSpacing="10px"
        rightIcon={<FavIcon />}
        fontWeight="medium"
        size="sm"
        fontSize="heading-5"
        variant="ghost"
      >
        Wishlist
      </Button>
      <Button
        iconSpacing="10px"
        rightIcon={<CartIcon />}
        fontWeight="medium"
        fontSize="heading-5"
        size="sm"
        variant="ghost"
      >
        Cart
      </Button>
    </Flex>
  );
};

const HeaderDesktop = () => {
  return (
    <Box>
      <Container pt="40px">
        <Flex flexDir="column" gap="40px">
          <Flex justify="space-between" align="center">
            <Link to="/">
              <Logo />
            </Link>
            <Search />
            <ButtonProfile />
          </Flex>
          <Flex justify="space-between" align="center">
            <Flex gap="64px">
              <Categories />
              <InternalLinks />
            </Flex>
            <HotAccess />
          </Flex>
        </Flex>
      </Container>
      <Divider borderColor="gray.200" />
    </Box>
  );
};

export default HeaderDesktop;
