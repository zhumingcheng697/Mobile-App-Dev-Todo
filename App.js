import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import TodoList from "./components/TodoList";
import Button from "./components/Button";
import styles from "./styles";

export default class App extends Component {
  state = {
    newTodo: "",
    todos: [],
  };

  randomNumber(n, base = 10) {
    return [...Array(n)]
      .map(() => Math.floor(Math.random() * base).toString(base))
      .join("");
  }

  addTodo(todo) {
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

  updateNewTodo(newTodo) {
    this.setState({ newTodo });
  }

  render() {
    const { newTodo, todos } = this.state;

    return (
      <View style={styles.container}>
        <SafeAreaView>
          <Text style={[styles.header, styles.vMargin]}>To-Do List</Text>
          <TextInput
            returnKeyType="done"
            style={[styles.input, styles.vMargin, styles.hMargin]}
            value={newTodo}
            onChangeText={(txt) => this.updateNewTodo(txt)}
            onSubmitEditing={() => {
              this.addTodo(newTodo);
              this.updateNewTodo("");
            }}
          />
          <View
            style={[
              styles.vMarginXX,
              styles.hMargin,
              {
                direction: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              },
            ]}
          >
            <Button
              style={{ flex: 1 }}
              title="Add"
              disabled={!newTodo}
              onPress={() => {
                this.addTodo(newTodo);
                this.updateNewTodo("");
              }}
            />
            <Button
              style={{ flex: 1 }}
              title="Clear"
              destructive
              disabled={!todos.length}
              onPress={() => {
                this.setState({ todos: [] });
              }}
            />
          </View>
        </SafeAreaView>
        <ScrollView>
          <TodoList
            todos={todos}
            editTodo={(id, newTodo) => this.editTodo(id, newTodo)}
            removeTodo={(id) => this.removeTodo(id)}
          />
        </ScrollView>
      </View>
    );
  }
}
