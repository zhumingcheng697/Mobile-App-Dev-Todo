import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import reducer from "./redux/reducers";
import HomeScreen from "./screens/HomeScreen";
import AccountScreen from "./screens/AccountScreen";

const store = createStore(reducer);
const Tab = createBottomTabNavigator();

export default class App extends Component {
  pState = store.getState();

  unsubsriceRedux = () => {};

  reduxListener() {
    const state = store.getState();

    for (let key in state) {
      if (state[key] !== this.pState[key]) {
        AsyncStorage.setItem(key, JSON.stringify(state[key]));
      }
    }

    this.pState = state;
  }

  componentDidMount() {
    this.unsubsriceRedux = store.subscribe(this.reduxListener.bind(this));
  }

  componentWillUnmount() {
    this.unsubsriceRedux();
  }

  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}
