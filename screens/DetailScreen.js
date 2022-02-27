import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView } from "react-native";
import { useDispatch } from "react-redux";

import { dateToString } from "../shared/util";
import { editTodo, removeTodo } from "../redux/actions";
import Selector from "../components/Selector";
import Button from "../components/Button";
import styles from "../shared/styles";

export default function DetailScreen({ navigation, route }) {
  if (!route) {
    return null;
  }

  const todo = route?.params?.todo;

  if (!todo) {
    return null;
  }

  const dispatch = useDispatch();

  function updatePriority(newPriority) {
    editThisTodo({
      ...todo,
      priority: newPriority,
    });
  }

  function editThisTodo(newTodo) {
    navigation.setParams({ todo: newTodo });
    editTodo(dispatch, newTodo.id, newTodo);
  }

  function removeThisTodo() {
    navigation.navigate("To-Dos");
    removeTodo(dispatch, todo.id);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={[styles.hMargin, styles.topMargin]}>
        <View style={[styles.flexRow, styles.vMarginX]}>
          {!!todo.priority && (
            <Text style={[styles.header, { paddingEnd: 10, color: "#f90" }]}>
              {todo.priority}
            </Text>
          )}
          <Text
            style={[
              styles.header,
              { flexShrink: 1, flexGrow: 1 },
              todo.finishedAt ? styles.finishedStyle : null,
            ]}
          >
            {todo.title}
          </Text>
        </View>
        {!!todo.body && (
          <Text
            style={[
              styles.line,
              styles.vMarginX,
              todo.finishedAt ? styles.finishedStyle : null,
            ]}
          >
            {todo.body}
          </Text>
        )}
        <Text style={[styles.line, styles.vMarginX]}>
          Added at {dateToString(new Date(todo.createdAt))}
        </Text>
        <Text style={[styles.line, styles.vMarginX]}>
          {todo.finishedAt
            ? `Finished at ${dateToString(new Date(todo.finishedAt))}`
            : "Pending"}
        </Text>
        <Selector
          style={styles.vMarginX}
          options={["!!!", "!!", "!"]}
          value={todo.priority}
          setValue={updatePriority}
        />
        <Button
          style={styles.topMarginX}
          title="Delete"
          destructive
          onPress={removeThisTodo}
        />
      </View>
    </SafeAreaView>
  );
}
