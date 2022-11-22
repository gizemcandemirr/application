import { Text, View, Button } from "react-native";

const ViewScreen = ({ navigation }) => {
  return (
    <View className="flex items-center justify-center text-red-500">
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
};

export default ViewScreen;
