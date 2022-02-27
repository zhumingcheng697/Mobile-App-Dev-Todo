import * as React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch } from "react-redux";

import { editTodo } from "../redux/actions";
import TodoScreen from "./TodoScreen";
import DetailScreen from "./DetailScreen";
import Toggle from "../components/Toggle";

const Stack = createStackNavigator();

export default function HomeScreen() {
  const dispatch = useDispatch();

  return (
    <Stack.Navigator>
      <Stack.Screen name="To-Dos" component={TodoScreen}></Stack.Screen>
      <Stack.Screen
        name="To-Do Detail"
        component={DetailScreen}
        options={({ navigation, route }) => ({
          title: route?.params?.todo?.title ?? "To-Do Detail",
          headerRight: () => {
            const todo = route?.params?.todo;

            if (!todo) {
              return null;
            }

            return (
              <View style={{ marginRight: 15 }}>
                <Toggle
                  isSet={!!todo.finishedAt}
                  setStatus={(status) => {
                    const newTodo = {
                      ...todo,
                      finishedAt: status ? Date.now() : null,
                    };
                    editTodo(dispatch)(todo.id, newTodo);
                    navigation.setParams({ todo: newTodo });
                  }}
                />
              </View>
            );
          },
        })}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
