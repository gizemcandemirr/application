import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, getDrawerStatusFromState } from "@react-navigation/drawer";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { View, Button, Text, TouchableOpacity } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";

import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import Projects from "./src/screens/Projects";
import Detail from "./src/screens/Detail";

import { Provider } from "react-redux";
import { store } from "./src/store/store";

import useAuth from "./src/hooks/useAuth.js";
import { useState } from "react";

import DrawerIcon from "./src/components/Icons/DrawerIcon.js";
import Person from "./src/components/Icons/Person.js";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


function Root() {
  const navigation = useNavigation();
  const [status, setStatus] = useState(false);

  function toggleOpen() {
    navigation.dispatch(DrawerActions.toggleDrawer())
    setStatus(!status)
  }

  return (
    <>
      <Drawer.Navigator initialRouteName="Anasayfa" >
        <Drawer.Screen name="Anasayfa" component={Home} options={{ headerShown: false }} />
        <Drawer.Screen name="Projeler" component={Projects} options={{ headerShown: false }} />
        <Drawer.Screen name="Detail" component={Detail} options={{ headerShown: false }} />
      </Drawer.Navigator>

      {!status && (
        <View className="absolute left-0 top-12 flex flex-row">
          <View className=" bg-blue-500 py-2 px-5 rounded-tr-full rounded-br-full">
            <Text className="text-white"><Person className="w-6 h-6" /></Text>
          </View>
          <View className="pl-3 top-1">
            <Text className="text-gray-500 text-xs">Merhaba,</Text>
            <Text className="text-gray-800 text-xs">Ahmet Usta</Text>
          </View>
        </View>

      )}

      <TouchableOpacity onPress={() => toggleOpen()} className="absolute right-3 top-12 z-40 p-2">
        <Text className="text-white"><DrawerIcon className="w-8 h-8" /></Text>
      </TouchableOpacity>

    </>

  );
}
export default function App() {
  const user = { username: 'mhndsbgyn', password: '12345' }
  const isAuth = useAuth(user)
  return (
    <Provider store={store}>
      <TailwindProvider>
        <NavigationContainer>
          <Stack.Navigator>

            {isAuth ? (
              <Stack.Screen
                name="Root"
                component={Root}
                options={{ headerShown: false }}
              />
            ) :
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />
            }

          </Stack.Navigator>
        </NavigationContainer>
      </TailwindProvider>
    </Provider>
  );
}
