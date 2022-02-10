import React from "react";
import { StyleSheet, View } from "react-native";
import styles from "../styles";
import Toggle from "./Toggle";
import TodoInput from "./TodoInput";

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
  },
});

export default function TodoItemView({ todo, editTodo, removeTodo }) {
  return (
    <View style={[styles.vMarginX, styles.hMargin, style.container]}>
      <Toggle
        isSet={todo.done}
        setStatus={(status) => {
          editTodo(Object.assign({}, todo, { done: status }));
        }}
      />
      <TodoInput todo={todo} editTodo={editTodo} removeTodo={removeTodo} />
    </View>
  );
}
