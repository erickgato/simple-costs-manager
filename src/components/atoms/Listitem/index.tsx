import { Text } from "react-native-paper";
import { Container, Label } from "./styles";
import { IListItemProps } from "./types";

export function ListItem({ label }: IListItemProps) {
  return (
    <Container>
      <Label>{label}</Label>
    </Container>
  );
}
