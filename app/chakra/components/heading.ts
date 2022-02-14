import {
  ComponentSingleStyleConfig,
  SystemStyleObjectRecord,
  SystemProps,
} from "@chakra-ui/react";

const baseStyle: SystemProps = {
  fontFamily: "heading",
  fontWeight: "bold",
  lineHeight: 1,
};

const sizes: SystemStyleObjectRecord = {
  xs: {
    fontSize: ["h-xs.m", null, "h-xs.d"],
    lineHeight: "base",
  },
  sm: {
    fontSize: ["h-sm.m", null, "h-sm.d"],
    lineHeight: "base",
  },
  md: {
    fontSize: ["h-md.m", null, "h-md.d"],
    lineHeight: "base",
  },
  lg: {
    fontSize: ["h-lg.m", null, "h-lg.d"],
    lineHeight: "base",
  },
  xl: {
    fontSize: ["h-xl.m", null, "h-xl.d"],
    lineHeight: "base",
  },
};

export const Heading: ComponentSingleStyleConfig = {
  baseStyle,
  sizes,
};
