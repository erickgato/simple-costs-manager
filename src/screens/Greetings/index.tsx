import { View } from "react-native";
import { MonthList } from "../../components/molecules/Monthlist";
import { PrivateLayout } from "../../components/templates/PrivateLayout";

const Component: React.FC = () => {
  return (
    <PrivateLayout title="Mêses">
      <View style={{ marginTop: 20 }}>
        <MonthList />
      </View>
    </PrivateLayout>
  );
};

export default Component;
