import {
  ComponentDefaultProps,
  ComponentSingleStyleConfig,
  SystemProps,
  SystemStyleObjectRecord,
  extendTheme,
  theme,
  ThemeComponents,
} from "@chakra-ui/react";

type ContainerType = ThemeComponents["Container"];

const baseStyle: ContainerType["baseStyle"] = {
  ...theme.components.Container.baseStyle,
  maxW: ["calc(100% - 24px)", "container.lg", null, "container.xl"],
};

export const Container: ComponentSingleStyleConfig = {
  ...theme.components.Container,
  baseStyle,
};
