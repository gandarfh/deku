import {
  ComponentSingleStyleConfig,
  SystemStyleObjectRecord,
  SystemProps,
} from "@chakra-ui/react";

const baseStyle: SystemProps = {
  fontFamily: "heading",
  fontWeight: "medium",
  lineHeight: 1,
};

const sizes: SystemStyleObjectRecord = {
  xs: {
    fontSize: ["t-xs.m", null, "t-xs.d"],
    lineHeight: "base",
  },
  sm: {
    fontSize: ["t-sm.m", null, "t-sm.d"],
    lineHeight: "base",
  },
  md: {
    fontSize: ["t-md.m", null, "t-md.d"],
    lineHeight: "base",
  },
  lg: {
    fontSize: ["t-lg.m", null, "t-lg.d"],
    lineHeight: "base",
  },
  xl: {
    fontSize: ["t-xl.m", null, "t-xl.d"],
    lineHeight: "base",
  },
};

export const Text: ComponentSingleStyleConfig = {
  baseStyle,
  sizes,
};
