import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useRoute, useNavigation } from "@react-navigation/native";

import { dateToString } from "../shared/util";
import { editTodo, removeTodo } from "../redux/actions";
import Selector from "../components/Selector";
import Button from "../components/Button";
import styles from "../shared/styles";

export default function DetailScreen() {
  let shouldDelete = false;
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    return () => {
      if (shouldDelete) {
        if (!route) {
          return null;
        }

        const id = route?.params?.id;

        removeTodo(dispatch)(id);
      }
    };
  });

  if (!route) {
    return null;
  }

  const id = route?.params?.id;
  const todo = todos.find((e) => e.id === id);

  if (!todo) {
    return null;
  }

  function updatePriority(newPriority) {
    editTodo(dispatch)(id, {
      ...todo,
      priority: newPriority,
    });
  }

  function removeThisTodo() {
    navigation.navigate("To-Dos");
    shouldDelete = true;
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
