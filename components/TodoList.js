import React from "react";
import { View } from "react-native";
import TodoItemView from "./TodoItemView";
import styles from "../styles";

export default function TodoList({ todos, editTodo, removeTodo }) {
  return (
    <View style={styles.vMargin}>
      {todos.map((todo) => (
        <TodoItemView
          key={todo.id}
          todo={todo}
          editTodo={(newTodo) => {
            editTodo(todo.id, newTodo);
          }}
          removeTodo={() => {
            removeTodo(todo.id);
          }}
        />
      ))}
    </View>
  );
}
