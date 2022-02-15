import {
  Container,
  Flex,
  Input,
  Button,
  useDisclosure,
  Drawer,
  DrawerContent,
  DrawerBody,
  Heading,
  DrawerOverlay,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  DrawerHeader,
  DrawerCloseButton,
  List,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import MenuIcon from "~/assets/icons/navbar/menu.icon";
import { UserIcon } from "~/assets/icons/navbar/user.icon";
import Logo from "~/assets/logo";

const Step = () => {
  const [isBrowsing, setIsBrowsing] = React.useState(false);
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleSliderChange = (event: any) => {
    setTabIndex(parseInt(event.target.value, 10));
  };

  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  return (
    <Tabs isManual defaultIndex={-1} orientation="vertical">
      {!isBrowsing ? (
        <List>
          <Tab onClick={() => setIsBrowsing(true)}>One</Tab>
          <Tab onClick={() => setIsBrowsing(true)}>Two</Tab>
        </List>
      ) : (
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      )}
    </Tabs>
  );
};

const Menu = () => {
  const { isOpen, onClose, getButtonProps } = useDisclosure({ isOpen: true });

  return (
    <>
      <IconButton
        {...getButtonProps()}
        aria-label="menu hamburger"
        fontWeight="medium"
        size="sm"
        fontSize="heading-5"
        variant="ghost"
      >
        <MenuIcon />
      </IconButton>
      <Drawer placement="bottom" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent borderTopRadius="xl" height="calc(100% - 120px)">
          <DrawerCloseButton top="32px" />
          <DrawerHeader pt="40px">
            <Heading size="heading-3" as="h3">
              Categories
            </Heading>
          </DrawerHeader>
          <Divider />
          <DrawerBody>
            <Step />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Menu;
