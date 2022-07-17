import { DefaultTheme } from "react-native-paper";
import fonts from "./fonts";

export const darkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#000000",
    text: "#fffe",
    secondary: "#1c1c1e",
  },
  roundness: 2,
  version: 2,
  dark: true,
  fonts,
};

export default darkTheme;
