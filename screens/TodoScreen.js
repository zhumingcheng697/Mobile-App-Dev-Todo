import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, TextInput, View, SafeAreaView, ScrollView } from "react-native";

import Selector from "../components/Selector";
import TodoItem from "../components/TodoItem";
import Button from "../components/Button";
import styles from "../shared/styles";

export default class TodoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTitle: "",
      newBody: "",
      newPriority: props.defaultPriority,
    };
  }

  updateTitle(newTitle) {
    this.setState({ newTitle });
  }

  updateBody(newBody) {
    this.setState({ newBody });
  }

  updatePriority(newPriority) {
    this.setState({ newPriority });
  }

  render() {
    const { newTitle, newBody, newPriority } = this.state;
    const { navigation, requireBody, todos, addTodo, editTodo, clearTodos } =
      this.props;

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
        <View style={[styles.hMargin, styles.topMargin]}>
          <Text style={[styles.topMarginX, styles.line]}>Title:</Text>
          <TextInput
            style={[styles.input, styles.vMargin]}
            value={newTitle}
            onChangeText={this.updateTitle.bind(this)}
          />
          <Text style={[styles.topMarginX, styles.line]}>Body:</Text>
          <TextInput
            style={[styles.textarea, styles.bottomMarginX]}
            value={newBody}
            blurOnSubmit={true}
            onChangeText={this.updateBody.bind(this)}
            multiline={true}
            placeholder={requireBody ? undefined : "Optional"}
          />
          <Text style={[styles.topMarginX, styles.line]}>Priority:</Text>
          <Selector
            style={styles.bottomMarginX}
            options={["!!!", "!!", "!"]}
            selected={newPriority}
            setSelected={this.updatePriority.bind(this)}
          />
          <Button
            style={[styles.topMarginX, { flexGrow: 0, flexShrink: 1 }]}
            title="Add"
            disabled={!newTitle || (!newBody && requireBody)}
            onPress={() => {
              if (addTodo(newTitle, newBody, newPriority)) {
                this.updateTitle("");
                this.updateBody("");
              }
            }}
          />
          <Button
            style={[styles.bottomMarginX, { flexGrow: 0, flexShrink: 1 }]}
            title="Clear"
            destructive
            disabled={!todos.length}
            onPress={clearTodos}
          />
          {!!todos.length && (
            <View
              style={[
                styles.topMargin,
                {
                  borderBottomColor: "darkgray",
                  borderBottomWidth: 1,
                },
              ]}
            ></View>
          )}
        </View>
        <ScrollView>
          <View style={styles.bottomMarginX}>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                editTodo={(newTodo) => {
                  editTodo(todo.id, newTodo);
                }}
                navigation={navigation}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
