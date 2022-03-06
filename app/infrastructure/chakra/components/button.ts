import {
  ComponentSingleStyleConfig,
  SystemStyleObjectRecord,
  theme,
  ThemeComponents,
} from "@chakra-ui/react";

type ButtonType = ThemeComponents["Button"];

const baseStyle: ButtonType["baseStyle"] = {
  fontWeight: "bold",
  borderRadius: "md",
  px: 2,
};

const defaultProps: ButtonType["defaultProps"] = {
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
  baseStyle,
  defaultProps,
  sizes,
};
