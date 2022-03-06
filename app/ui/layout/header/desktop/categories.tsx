import {
  Box,
  Button,
  Heading,
  SlideFade,
  useOutsideClick,
} from "@chakra-ui/react";
import React from "react";
import { useMenuContext } from "../menu-machine";

const Categories = () => {
  const { valid, handleOpen, handleClosed } = useMenuContext();
  const ref = React.useRef(null);

  useOutsideClick({
    ref,
    handler: (e) => {
      handleClosed();
    },
  });

  return (
    <Box pos="relative" ref={ref}>
      <Button variant="ghost" size="sm" onClick={handleOpen}>
        <Heading size="heading-5" fontWeight="medium">
          Categories
        </Heading>
      </Button>
      {valid.opened && (
        <SlideFade
          style={{ position: "absolute", top: 30, zIndex: 10 }}
          in={valid.opened}
          offsetY="-10px"
        >
          <Box
            p="40px"
            color="white"
            mt="4"
            bg="teal.500"
            rounded="md"
            shadow="md"
          >
            <h1>asds</h1>
            <p>asdj askldjaskl djas kldjaskldjs klasjd klsadjakls</p>
            <br />
            <h2>asdd aasds</h2>
            <p>asdj askldjaskl djas kldjaskldjs klasjd klsadjakls</p>
          </Box>
        </SlideFade>
      )}
    </Box>
  );
};

/* 

 ┌─────────────────────────┐
 │                         │
 │                         │
 │    teste                │
 │                         │
 │                         │
 │                         │
 └─────────────────────────┘

*/

export default Categories;
