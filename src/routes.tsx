import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Route } from "./constants/route.enum";
import GreetingsScreen from "./screens/Greetings";

const MainStack = createNativeStackNavigator();

export const Routes: React.FC = () => {
  return (
    <MainStack.Navigator
      initialRouteName={Route.GREETINGS}
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name={Route.GREETINGS} component={GreetingsScreen} />
    </MainStack.Navigator>
  );
};
