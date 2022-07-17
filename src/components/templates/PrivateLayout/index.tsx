import React from "react";
import { SafeAreaView, View } from "react-native";
import { useTheme } from "react-native-paper";
import { Title, TitleContainer } from "./styles";
import { IProps } from "./types";

export const PrivateLayout: React.FC<IProps> = ({ children, title }) => {
  const theme = useTheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: theme.colors.background,
          flex: 1,
          padding: 20,
        }}
      >
        <>
          {title && (
            <TitleContainer>
              <Title>{title}</Title>
            </TitleContainer>
          )}
          {children}
        </>
      </View>
    </SafeAreaView>
  );
};
