import {
  Drawer,
  DrawerContent,
  DrawerBody,
  Heading,
  DrawerOverlay,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  DrawerHeader,
  DrawerCloseButton,
  List,
  Divider,
  IconButton,
  Box,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  useTab,
  Button,
  Flex,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import React from "react";
import { Link } from "remix";
import MenuIcon from "~/assets/icons/navbar/menu.icon";
import { categories } from "../categories";
import { useMenu, useMenuContext } from "../menu-machine";

const CustomTab = React.forwardRef<any, any>((props, ref) => {
  const tabProps = useTab({ ...props, ref });

  return <Button {...tabProps}>{tabProps.children}</Button>;
});

const DrawerStep = () => {
  const [active, setActive] = React.useState<string | null>(null);

  return (
    <>
      <DrawerHeader pt="40px" px="20px">
        {!active ? (
          <Heading size="heading-3" as="h3">
            Categories
          </Heading>
        ) : (
          <Flex align="center">
            <IconButton aria-label="back arrow" onClick={() => setActive(null)}>
              <ChevronLeftIcon w="28px" h="28px" />
            </IconButton>
            <Breadcrumb>
              <BreadcrumbItem onClick={() => setActive(null)}>
                <Text size="heading-5">Categories</Text>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Text size="heading-5" color="text.normal">
                  {active}
                </Text>
              </BreadcrumbItem>
            </Breadcrumb>
          </Flex>
        )}
      </DrawerHeader>
      <Divider />
      <DrawerBody p="0">
        <Tabs isManual defaultIndex={-1} orientation="vertical">
          {!active ? (
            <List mt={4} w="full">
              {categories.map(({ category }) => (
                <CustomTab
                  px="20px"
                  minH={70}
                  bg="white"
                  w="full"
                  justifyContent="space-between"
                  key={category}
                  borderBottomWidth="1px"
                  borderBottomColor="gray.200"
                  m="0"
                  onClick={() => setActive(category)}
                >
                  <Text size="heading-5" color="text.normal">
                    {category}
                  </Text>
                  <ChevronRightIcon color="gray.400" w="32px" h="32px" />
                </CustomTab>
              ))}
            </List>
          ) : (
            <TabPanels mt="40px">
              {categories.map((category) => (
                <TabPanel>
                  <List flexDir="column">
                    {category.items.map((item) => (
                      <Box key={item.title} mb="40px">
                        <Heading as="h5" size="heading-3" mb="24px">
                          {item.title}
                        </Heading>

                        <List d="flex" flexDir="column">
                          {item.links.map((link) => (
                            <Link key={link.link} to={link.path}>
                              <Text as="span">{link.link}</Text>
                            </Link>
                          ))}
                        </List>
                      </Box>
                    ))}
                  </List>
                </TabPanel>
              ))}
            </TabPanels>
          )}
        </Tabs>
      </DrawerBody>
    </>
  );
};

const Menu = () => {
  const { valid, handleClosed, handleOpen } = useMenuContext();

  return (
    <>
      <IconButton
        onClick={handleOpen}
        aria-label="menu hamburger"
        fontWeight="medium"
        size="sm"
        fontSize="heading-5"
        variant="ghost"
      >
        <MenuIcon />
      </IconButton>
      <Drawer placement="bottom" isOpen={valid.opened} onClose={handleClosed}>
        <DrawerOverlay />
        <DrawerContent borderTopRadius="xl" height="calc(100% - 160px)">
          <DrawerCloseButton top="32px" />
          <DrawerStep />
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Menu;
