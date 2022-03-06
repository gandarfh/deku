import {
  ComponentSingleStyleConfig,
  SystemStyleObjectRecord,
  SystemProps,
} from "@chakra-ui/react";

const baseStyle: SystemProps = {
  fontFamily: "heading",
  fontWeight: "semiBold",
  color: "text.normal",
};

const sizes: SystemStyleObjectRecord = {
  "heading-1": {
    fontSize: "heading-1",
    lineHeight: "base",
  },
  "heading-2": {
    fontSize: "heading-2",
    lineHeight: "base",
  },
  "heading-3": {
    fontSize: "heading-3",
    lineHeight: "base",
  },
  "heading-4": {
    fontSize: "heading-4",
    lineHeight: "base",
  },
  "heading-5": {
    fontSize: "heading-5",
    lineHeight: "base",
  },
  "heading-6": {
    fontSize: "heading-6",
    lineHeight: "base",
  },
};

export const Heading: ComponentSingleStyleConfig = {
  baseStyle,
  sizes,
};
