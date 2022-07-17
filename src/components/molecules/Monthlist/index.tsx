import React from "react";
import { FlatList, View } from "react-native";
import { Text } from "react-native-paper";
import { ListItem } from "../../atoms/Listitem";

export const MonthList: React.FC = () => {
  return (
    <FlatList
      data={[{ id: 1, name: "Janeiro" }]}
      renderItem={(item) => <ListItem label={item.item.name} />}
      keyExtractor={(item) => String(item.id)}
    />
  );
};
