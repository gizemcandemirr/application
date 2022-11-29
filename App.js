import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Login from "./src/screens/Login";
import HomeScreen from "./src/screens/HomeScreen";
import Projects from "./src/screens/Projects";
import Detail from "./src/screens/Detail";

import { Provider } from "react-redux";
import { store } from "./src/store/store";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <TailwindProvider>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Login">
            <Drawer.Screen name="Login" component={Login} options={{ title: 'LoginPage' }} />
            <Drawer.Screen name="Anasayfa" component={HomeScreen} />
            <Drawer.Screen name="Projeler" component={Projects} />
            <Drawer.Screen name="Detail" component={Detail} />
          </Drawer.Navigator>
        </NavigationContainer>
      </TailwindProvider>
    </Provider>
  );
}
