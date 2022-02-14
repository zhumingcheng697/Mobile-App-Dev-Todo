import React, { Component } from "react";
import { randomNumber } from "./shared/util";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";

export default class App extends Component {
  state = {
    todos: [],
  };

  addTodo(todo) {
    if (!todo) return;

    this.setState(({ todos }) => {
      return {
        todos: [{ msg: todo, done: false, id: randomNumber(8, 16) }, ...todos],
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
    const { todos } = this.state;

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
