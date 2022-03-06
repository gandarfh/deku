import { Box, Container, Flex, Heading, Divider, List } from "@chakra-ui/react";
import { Link } from "remix";
import Logo from "~/assets/logo";

interface ItemProps {
  path: string;
  name: string;
}

interface InternalLinksProps {
  title: string;
  list: ItemProps[];
  isLink?: boolean;
}

const InternalLinks = ({ title, list, isLink }: InternalLinksProps) => {
  return (
    <Box maxW={217}>
      <Heading size="heading-4">{title}</Heading>

      <List d="flex" flexDirection="column" mt="24px" gap="16px">
        {list.map((item) =>
          isLink ? (
            <Link key={item.path} to={""}>
              <Heading
                as="span"
                size="heading-5"
                fontWeight="regular"
                color="text.low"
              >
                {item.name}
              </Heading>
            </Link>
          ) : (
            <Heading
              key={item.name}
              as="span"
              size="heading-5"
              fontWeight="regular"
              color="text.low"
            >
              {item.name}
            </Heading>
          )
        )}
      </List>
    </Box>
  );
};

const profileList: ItemProps[] = [
  { name: "Checkout", path: "/checkout" },
  { name: "Order Tracking", path: "/order-tracking" },
  { name: "My Account", path: "/me/account" },
];

const informationList: ItemProps[] = [
  { name: "Checkout", path: "/checkout" },
  { name: "Order Tracking", path: "/order-tracking" },
  { name: "My Account", path: "/me/account" },
];
const contactList: ItemProps[] = [
  { name: "Street Name, City, England", path: "" },
  { name: "mail@example.com", path: "" },
  { name: "(123) 216-3250", path: "" },
];

const Footer = () => {
  return (
    <Box>
      <Container pt="40px">
        <Divider borderColor="gray.200" />
        <Flex
          flexDir={["column", "row"]}
          gap={["40px", "100px"]}
          mt="64px"
          mb="80px"
          wrap="wrap"
        >
          <Box maxW={217}>
            <Link to="/">
              <Logo />
            </Link>
            <Heading
              fontWeight="regular"
              mt="40px"
              as="p"
              size="heading-5"
              color="text.low"
            >
              Accessories Here you can find the best computer accessory for your
              laptop
            </Heading>
          </Box>
          <InternalLinks isLink title="Profile" list={profileList} />
          <InternalLinks
            isLink
            title="Help and Information"
            list={informationList}
          />
          <InternalLinks title="Contact Info" list={contactList} />
        </Flex>
        <Divider borderColor="gray.200" />
        <Heading
          my="24px"
          size="heading-5"
          color="text.low"
          fontWeight="regular"
        >
          © Copyright 2022 The Dot.
        </Heading>
      </Container>
    </Box>
  );
};

export default Footer;
