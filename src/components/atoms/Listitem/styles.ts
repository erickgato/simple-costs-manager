import { Text } from "react-native-paper";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background: ${(props: any) => props.theme.colors.secondary};
  border-radius: 10px;
  width: 100%;
  padding: 10px;
`;

export const Label = styled(Text)`
  color: ${(props: any) => props.theme.colors.text};
`;
