import { Box, Center, Heading, List, ListItem, Text } from "@chakra-ui/react";
import { Link, useLocation } from "remix";

interface NavCategoryProps {
  title: React.ReactNode;
}

interface NavItemProps {
  name: string;
  path: string;
}

const NavHeader = () => {
  return (
    <Box mt={2}>
      <Heading size="md" color="primary.400">
        Logo Doida
      </Heading>
    </Box>
  );
};

const NavItem = ({ name, path }: NavItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <Link to={path}>
      <ListItem
        h={"40px"}
        bg={isActive ? "black.300" : "primary.500"}
        _hover={{ bg: "black.100" }}
        transition="all 0.2s"
        cursor="pointer"
        p={2}
        borderRadius={"lg"}
      >
        <Center justifyContent={"flex-start"} h="full">
          <Text color="black.500">{name}</Text>
        </Center>
      </ListItem>
    </Link>
  );
};

const NavList = () => {
  const list: NavItemProps[] = [
    { name: "Teste 1", path: "/search/teste/1" },
    { name: "Teste 2", path: "/search/teste/2" },
    { name: "Teste 3", path: "/search/teste/3" },
    { name: "Teste 4", path: "/search/teste/4" },
    { name: "Teste 5", path: "/search/teste/5" },
  ];

  return (
    <List mt={3} display={"flex"} flexDirection={"column"} gap={2}>
      {list.map((item) => (
        <NavItem key={item.path} name={item.name} path={item.path} />
      ))}
    </List>
  );
};

const NavCategory = ({ title }: NavCategoryProps) => {
  return (
    <Box mt={4}>
      <Text>{title}</Text>

      <NavList />
    </Box>
  );
};

const Navbar = () => {
  return (
    <Box maxW={400} borderRadius={"lg"} py={8} px={3}>
      <NavHeader />
      <NavCategory title="caminhos de search" />
    </Box>
  );
};

export default Navbar;

/* 

navbar

nav header ->
render logo

nav category ->
items of category

divider

nav footer ->
logout button


*/
