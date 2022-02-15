import React from "react";
import { View } from "react-native";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, editTodo, removeTodo }) {
  return (
    <View style={{ marginBottom: 10 }}>
      {todos.map((todo) => (
        <TodoItem
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
