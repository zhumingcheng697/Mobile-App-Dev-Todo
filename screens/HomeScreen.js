import React, { Component } from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { randomNumber } from "../shared/util";
import TodoScreen from "./TodoScreen";
import DetailScreen from "./DetailScreen";
import Toggle from "../components/Toggle";

const Stack = createStackNavigator();

export default class HomeScreen extends Component {
  state = {
    todos: [],
  };

  addTodo(title, body, priority) {
    const { requireBody } = this.props;

    if (!title || (!body && requireBody)) return false;

    this.setState(({ todos }) => {
      return {
        todos: [
          {
            title,
            body,
            priority,
            id: randomNumber(8, 16),
            createdAt: Date.now(),
            finishedAt: null,
          },
          ...todos,
        ],
      };
    });

    return true;
  }

  indexOfTodo(id) {
    const { todos } = this.state;

    return todos.findIndex((todo) => todo.id == id);
  }

  editTodo(id, newTodo) {
    const index = this.indexOfTodo(id);

    if (index < 0) return;

    this.setState(({ todos }) => {
      const newTodos = todos.slice();
      newTodos[index] = newTodo;
      return { todos: newTodos };
    });
  }

  removeTodo(id) {
    const index = this.indexOfTodo(id);

    if (index < 0) return;

    this.setState(({ todos }) => {
      const newTodos = todos.slice();
      newTodos.splice(index, 1);
      return { todos: newTodos };
    });
  }

  clearTodos() {
    this.setState({ todos: [] });
  }

  render() {
    const { todos } = this.state;
    const { defaultPriority, rememberPriority, requireBody } = this.props;

    return (
      <Stack.Navigator>
        <Stack.Screen name="To-Dos">
          {(props) => (
            <TodoScreen
              {...props}
              todos={todos}
              defaultPriority={defaultPriority}
              rememberPriority={rememberPriority}
              requireBody={requireBody}
              addTodo={this.addTodo.bind(this)}
              editTodo={this.editTodo.bind(this)}
              clearTodos={this.clearTodos.bind(this)}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="To-Do Detail"
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
                      this.editTodo(todo.id, newTodo);
                      navigation.setParams({ todo: newTodo });
                    }}
                  />
                </View>
              );
            },
          })}
        >
          {(props) => (
            <DetailScreen
              {...props}
              editTodo={this.editTodo.bind(this)}
              removeTodo={this.removeTodo.bind(this)}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    );
  }
}
