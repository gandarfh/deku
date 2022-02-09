import { theme as chakraTheme, extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { Button } from "./components/button";
import { styles } from "./styles";

const theme = extendTheme({
  styles,
  colors,
  components: { Button },
});

export default theme;
