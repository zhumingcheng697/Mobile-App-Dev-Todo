import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, TextInput, View, SafeAreaView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import TodoList from "./components/TodoList";
import Button from "./components/Button";
import styles from "./shared/styles";

export default class App extends Component {
  state = {
    todos: [],
  };

  randomNumber(n, base = 10) {
    return [...Array(n)]
      .map(() => Math.floor(Math.random() * base).toString(base))
      .join("");
  }

  addTodo(todo) {
    if (!todo) return;

    this.setState(({ todos }) => {
      return {
        todos: [
          { msg: todo, done: false, id: this.randomNumber(8, 16) },
          ...todos,
        ],
      };
    });
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
    const { newTodo, todos } = this.state;

    return (
      <Home
        todos={todos}
        addTodo={this.addTodo.bind(this)}
        editTodo={this.editTodo.bind(this)}
        removeTodo={this.removeTodo.bind(this)}
        clearTodos={this.clearTodos.bind(this)}
      />
    );
  }
}
