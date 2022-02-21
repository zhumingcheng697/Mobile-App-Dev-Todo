import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView } from "react-native";

import { dateToString } from "../shared/util";
import Selector from "../components/Selector";
import Button from "../components/Button";
import styles from "../shared/styles";

export default class DetailScreen extends Component {
  toggleStatus() {
    const { route } = this.props;
    const todo = route?.params?.todo;

    if (!todo) {
      return null;
    }

    this.editTodo({
      ...todo,
      finishedAt: todo.finishedAt ? null : Date.now(),
    });
  }

  updatePriority(newPriority) {
    const { route } = this.props;
    const todo = route?.params?.todo;

    if (!todo) {
      return null;
    }

    this.editTodo({
      ...todo,
      priority: newPriority,
    });
  }

  editTodo(newTodo) {
    const { navigation, editTodo } = this.props;

    navigation.setParams({ todo: newTodo });
    editTodo(newTodo.id, newTodo);
  }

  removeTodo() {
    const { navigation, removeTodo } = this.props;
    const { route } = this.props;
    const todo = route?.params?.todo;

    if (!todo) {
      return null;
    }

    navigation.navigate("To-Dos");
    removeTodo(todo.id);
  }

  render() {
    const { route } = this.props;

    if (!route) {
      return null;
    }

    const todo = route?.params?.todo;

    if (!todo) {
      return null;
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
            selected={todo.priority}
            setSelected={this.updatePriority.bind(this)}
          />
          <Button
            style={styles.topMarginX}
            title="Delete"
            destructive
            onPress={this.removeTodo.bind(this)}
          />
        </View>
      </SafeAreaView>
    );
  }
}
