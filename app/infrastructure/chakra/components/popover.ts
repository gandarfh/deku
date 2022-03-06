import { ComponentMultiStyleConfig, SystemProps } from "@chakra-ui/react";

const baseStyle: Record<string, SystemProps> = {
  content: {},
};

export const Popover: ComponentMultiStyleConfig = {
  parts: [
    "content",
    "header",
    "body",
    "footer",
    "popper",
    "arrow",
    "closeButton",
  ],
  baseStyle,
};
