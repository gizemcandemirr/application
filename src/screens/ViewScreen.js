import { Text, View, Button } from "react-native";
import { useGetAllProductsQuery } from "../api/apiSlice";

const ViewScreen = ({ navigation }) => {
  const { data } = useGetAllProductsQuery();
  return (
    <View className="flex items-center justify-center text-red-500">
      <Text>Data: {data ? "Var" : "Yok"}</Text>

      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
};

export default ViewScreen;
