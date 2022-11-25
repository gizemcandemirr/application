import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { QueryClient, QueryClientProvider } from "react-query";

import LoginPage from "./src/screens/LoginPage";
import HomeScreen from "./src/screens/HomeScreen";
import ViewScreen from "./src/screens/ViewScreen";

import { Provider } from "react-redux";
import { store } from "./src/store/store";

const Drawer = createDrawerNavigator();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});
export default function App() {
  return (
    <Provider store={store}>
      <TailwindProvider>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Login">
            <Drawer.Screen name="Login" component={LoginPage} />
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Views" component={ViewScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </TailwindProvider>
    </Provider>
  );
}
