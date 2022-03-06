import {
  extendTheme,
  withDefaultColorScheme,
  theme as baseTheme,
} from "@chakra-ui/react";
import { styles } from "./styles";
import * as foundations from "./foundations";
import * as components from "./components";

const config = {
  cssVarPrefix: "deku",
};

const theme = {
  ...baseTheme,
  ...foundations,
  config,
  styles,
  components,
};

export default extendTheme(theme);
