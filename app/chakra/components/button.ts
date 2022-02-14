import {
  ComponentDefaultProps,
  ComponentSingleStyleConfig,
  SystemProps,
  SystemStyleObjectRecord,
} from "@chakra-ui/react";

const baseStyle: SystemProps = {
  fontWeight: "bold",
  borderRadius: "md",
  _focus: {
    boxShadow: "0 0 1px 3px #FC8AA8f5, 0 1px 1px rgba(0, 0, 0, .15)",
  },
};

const defaultProps: ComponentDefaultProps = {
  size: "md",
};

const sizes: SystemStyleObjectRecord = {
  xs: (props) => {
    return {
      borderRadius: "lg",
      height: "24px",
      fontWeight: "semiBold",
    };
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
