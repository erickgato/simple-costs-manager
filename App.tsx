import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes";
import {
  ActivityIndicator,
  Provider as PaperProvider,
} from "react-native-paper";
import darkTheme from "./src/themes/dark.theme";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { ThemeProvider } from "styled-components/native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) return <ActivityIndicator size={"large"} />;

  return (
    <NavigationContainer>
      <PaperProvider theme={darkTheme}>
        <ThemeProvider theme={darkTheme}>
          <Routes />
        </ThemeProvider>
      </PaperProvider>
    </NavigationContainer>
  );
}
