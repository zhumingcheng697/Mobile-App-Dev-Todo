import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, TextInput, View, SafeAreaView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import TodoList from "../components/TodoList";
import Button from "../components/Button";
import styles from "../shared/styles";

export default class Home extends Component {
  state = {
    newTodo: "",
  };

  updateNewTodo(newTodo) {
    this.setState({ newTodo });
  }

  render() {
    const { newTodo } = this.state;
    const { todos, addTodo, editTodo, removeTodo, updateNewTodo, clearTodos } =
      this.props;

    return (
      <View style={styles.container}>
        <StatusBar style="dark" />
        <SafeAreaView>
          <Text style={[styles.header, styles.vMargin]}>To-Do List</Text>
          <TextInput
            returnKeyType="done"
            style={[styles.input, styles.vMargin, styles.hMargin]}
            value={newTodo}
            blurOnSubmit={newTodo == ""}
            onChangeText={(txt) => this.updateNewTodo(txt)}
            onSubmitEditing={() => {
              addTodo(newTodo);
              this.updateNewTodo("");
            }}
          />
          <View
            style={[
              styles.vMargin,
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
              style={{ flexGrow: 0, flexShrink: 1 }}
              title="Add"
              disabled={!newTodo}
              onPress={() => {
                addTodo(newTodo);
                updateNewTodo("");
              }}
            />
            <Button
              style={{ flexGrow: 0, flexShrink: 1 }}
              title="Clear"
              destructive
              disabled={!todos.length}
              onPress={() => {
                clearTodos();
              }}
            />
          </View>
        </SafeAreaView>
        <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
          <TodoList todos={todos} editTodo={editTodo} removeTodo={removeTodo} />
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
