import * as React from "react";
import { View, ScrollView } from "react-native";
import { useSelector } from "react-redux";

import TodoItem from "../components/TodoItem";
import styles from "../shared/styles";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);

  return (
    <ScrollView>
      <View style={styles.bottomMarginX}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </View>
    </ScrollView>
  );
}
