import {
  ComponentMultiStyleConfig,
  SystemProps,
  SystemStyleObjectRecord,
  ComponentDefaultProps,
} from "@chakra-ui/react";

import { modalAnatomy } from "@chakra-ui/anatomy";

const baseStyle: Record<string, SystemProps> = {
  overlay: {
    backdropFilter: "blur(5px)",
  },
};

const defaultProps: ComponentDefaultProps = {};

const sizes: Record<string, SystemStyleObjectRecord> = {};

export const Modal: ComponentMultiStyleConfig = {
  parts: ["overlay", "dialogContainer", "closeButton"],
  baseStyle,
  defaultProps,
};
