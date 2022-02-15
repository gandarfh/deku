import {
  ComponentDefaultProps,
  ComponentSingleStyleConfig,
  SystemProps,
  SystemStyleObjectRecord,
  theme,
  ThemeComponents,
} from "@chakra-ui/react";

type ButtonType = ThemeComponents["Button"];

const baseStyle: ButtonType["baseStyle"] = {
  ...theme.components.Button.baseStyle,
  fontWeight: "bold",
  borderRadius: "md",

  px: 2,
  _focus: {
    boxShadow: "0 0 1px 3px #FC8AA8f5, 0 1px 1px rgba(0, 0, 0, .15)",
  },
};

const defaultProps: ButtonType["defaultProps"] = {
  ...theme.components.Button.defaultProps,
  size: "md",
};

const sizes: SystemStyleObjectRecord = {
  xs: {
    borderRadius: "lg",
    height: "24px",
    fontWeight: "semiBold",
  },
  sm: {
    borderRadius: "lg",
    height: "28px",
    fontWeight: "semiBold",
  },
  md: {
    borderRadius: "lg",
    height: "42px",
  },
  lg: {
    borderRadius: "3xl",
    height: "52px",
  },
};

export const Button: ComponentSingleStyleConfig = {
  ...theme.components.Button,
  baseStyle,
  defaultProps,
  sizes,
};
