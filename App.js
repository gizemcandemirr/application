import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./src/screens/Login";
import HomeScreen from "./src/screens/HomeScreen";
import Projects from "./src/screens/Projects";
import Detail from "./src/screens/Detail";

import { Provider } from "react-redux";
import { store } from "./src/store/store";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function Root() {
  return (
    <Drawer.Navigator initialRouteName="Login">
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Anasayfa" component={HomeScreen} />
      <Drawer.Screen name="Projeler" component={Projects} />
      <Drawer.Screen name="Detail" component={Detail} />
    </Drawer.Navigator>
  );
}
export default function App() {

  return (
    <Provider store={store}>
      <TailwindProvider>
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
        </NavigationContainer>
      </TailwindProvider>
    </Provider>
  );
}
