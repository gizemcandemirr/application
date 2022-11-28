import { View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View className="flex items-center justify-center">
      <Button
        onPress={() => navigation.navigate('Login', { screen: 'Login' })}
        title="Go to notifications"
      />
    </View>
  );
};

export default HomeScreen;
