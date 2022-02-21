import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
import AccountScreen from "./screens/AccountScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "To-Do List") {
              iconName = "list";
            } else if (route.name === "Account") {
              iconName = "person";
            } else {
              iconName = "people";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="To-Do List"
          component={HomeScreen}
          options={{ headerShown: false, title: "To-Dos" }}
        ></Tab.Screen>
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{ title: "Account" }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
