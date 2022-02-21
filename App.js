import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "./screens/HomeScreen";
import AccountScreen from "./screens/AccountScreen";

const Tab = createBottomTabNavigator();

export default class App extends Component {
  state = { requireBody: false };

  setRequireBody(requireBody) {
    this.setState({ requireBody });
  }

  render() {
    const { requireBody } = this.state;

    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size, focused }) => {
              let iconName;
              if (route.name === "To-Do List") {
                iconName = "list";
              } else if (route.name === "Account") {
                iconName = focused ? "person" : "person-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen
            name="To-Do List"
            options={{ headerShown: false, title: "To-Dos" }}
          >
            {(props) => <HomeScreen {...props} requireBody={requireBody} />}
          </Tab.Screen>
          <Tab.Screen name="Account" options={{ title: "Account" }}>
            {(props) => (
              <AccountScreen
                {...props}
                requireBody={requireBody}
                setRequireBody={this.setRequireBody.bind(this)}
              />
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
