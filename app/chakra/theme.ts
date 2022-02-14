import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { styles } from "./styles";
import { typography, colors, semanticTokens } from "./foundations";
import * as components from "./components";

const config = {
  cssVarPrefix: "housi",
};

const theme = extendTheme(
  {
    config,
    styles,
    colors,
    semanticTokens,
    fonts: typography.fonts,
    fontSizes: typography.fontSizes,
    fontWeights: typography.fontWeights,
    components,
  },
  withDefaultColorScheme({
    colorScheme: "primary",
  })
);

export default theme;
