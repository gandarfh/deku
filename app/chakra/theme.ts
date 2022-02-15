import {
  extendTheme,
  withDefaultColorScheme,
  theme as baseTheme,
} from "@chakra-ui/react";
import { styles } from "./styles";
import { typography, colors, semanticTokens } from "./foundations";
import * as components from "./components";

const config = {
  cssVarPrefix: "housi",
};

const theme = {
  ...baseTheme,
  config,
  styles,
  colors,
  fonts: typography.fonts,
  fontSizes: typography.fontSizes,
  fontWeights: typography.fontWeights,
  components: {
    ...baseTheme.components,
    ...components,
  },
};

export default extendTheme(theme);
