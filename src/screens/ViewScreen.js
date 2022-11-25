import { Text, View, Button } from "react-native";
import { useGetAllProductsQuery } from "../hooks/apiSlice";

const ViewScreen = ({ navigation }) => {
  const { data } = useGetAllProductsQuery();
  return (
    <View className="flex items-center justify-center text-red-500">
      <Text> {data ? data.title : "Yok"}</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
};

export default ViewScreen;
