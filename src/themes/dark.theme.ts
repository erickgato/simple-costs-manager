import { DefaultTheme } from "react-native-paper";

export const darkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#f010",
  },
  roundness: 2,
  version: 3,
  dark: true,
};

export default darkTheme;
