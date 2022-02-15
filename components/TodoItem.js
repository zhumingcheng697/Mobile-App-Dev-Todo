import React from "react";
import { StyleSheet, View } from "react-native";
import styles from "../shared/styles";
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

export default function TodoItem({ todo, editTodo, removeTodo }) {
  return (
    <View style={[styles.vMargin, styles.hMargin, style.container]}>
      <Toggle
        style={{ marginEnd: 5 }}
        isSet={todo.done}
        setStatus={(status) => {
          editTodo(Object.assign({}, todo, { done: status }));
        }}
      />
      <TodoInput todo={todo} editTodo={editTodo} removeTodo={removeTodo} />
    </View>
  );
}
