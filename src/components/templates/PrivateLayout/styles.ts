import { Text } from "react-native-paper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const TitleContainer = styled.View`
  margin-top: 15%;
`;

export const Title = styled(Text)`
  color: ${(props) => props.theme.colors.text};
  font-size: ${RFValue(30)};
`;
