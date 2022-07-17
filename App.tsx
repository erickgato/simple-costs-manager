import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes";
import { Provider as PaperProvider } from "react-native-paper";
import darkTheme from "./src/themes/dark.theme";

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider theme={darkTheme}>
        <Routes />
      </PaperProvider>
    </NavigationContainer>
  );
}
