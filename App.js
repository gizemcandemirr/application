import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "./src/screens/HomeScreen";
import ViewScreen from "./src/screens/ViewScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Views" component={ViewScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
