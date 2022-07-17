import { configureFonts } from "react-native-paper";
import { Fonts } from "react-native-paper/lib/typescript/types";
interface IDefaultFontSet {
  default: Fonts;
}

const fontConfig: IDefaultFontSet = {
  default: {
    regular: {
      fontFamily: "Inter_400Regular",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "Inter_400Regular",
      fontWeight: "bold",
    },
    light: {
      fontFamily: "Inter_400Regular",
      fontWeight: "bold",
    },
    thin: {
      fontFamily: "Inter_400Regular",
      fontWeight: "bold",
    },
  },
};

export default configureFonts(fontConfig);
