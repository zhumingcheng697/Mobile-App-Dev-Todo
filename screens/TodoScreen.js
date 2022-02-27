import * as React from "react";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, TextInput, View, SafeAreaView, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { randomNumber } from "../shared/util";
import { addTodo, clearTodos } from "../redux/actions";
import Selector from "../components/Selector";
import TodoItem from "../components/TodoItem";
import Button from "../components/Button";
import styles from "../shared/styles";

export default function TodoScreen({ navigation }) {
  const todos = useSelector((state) => state.todos);

  const defaultPriority = useSelector((state) => state.defaultPriority);
  const rememberPriority = useSelector((state) => state.rememberPriority);
  const requireBody = useSelector((state) => state.requireBody);

  const dispatch = useDispatch();

  const [newTitle, updateTitle] = useState("");
  const [newBody, updateBody] = useState("");
  const [newPriority, updatePriority] = useState(defaultPriority);

  function createNewTodo(title, body, priority) {
    if (!title || (!body && requireBody)) return false;

    const todo = {
      title,
      body,
      priority,
      id: randomNumber(8, 16),
      createdAt: Date.now(),
      finishedAt: null,
    };

    addTodo(dispatch)(todo);

    return true;
  }

  function resetFields() {
    updateTitle("");
    updateBody("");

    if (!rememberPriority) {
      updatePriority(defaultPriority);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={[styles.hMargin, styles.topMargin]}>
        <Text style={[styles.topMargin, styles.line]}>Title:</Text>
        <TextInput
          style={[styles.input, styles.vMargin]}
          value={newTitle}
          onChangeText={updateTitle}
        />
        <Text style={[styles.topMargin, styles.line]}>Body:</Text>
        <TextInput
          style={[styles.textarea, styles.vMargin]}
          value={newBody}
          blurOnSubmit={true}
          onChangeText={updateBody}
          multiline={true}
          key={(requireBody ? "Required" : "Optional") + " newBody"}
          placeholder={requireBody ? null : "Optional"}
        />
        <Text style={[styles.topMargin, styles.line]}>Priority:</Text>
        <Selector
          style={styles.bottomMarginX}
          options={["!!!", "!!", "!"]}
          initialValue={defaultPriority}
          value={newPriority}
          setValue={updatePriority}
        />
        <Button
          style={[styles.topMarginX, { flexGrow: 0, flexShrink: 1 }]}
          title="Add"
          disabled={!newTitle || (!newBody && requireBody)}
          onPress={() => {
            if (createNewTodo(newTitle, newBody, newPriority)) {
              resetFields();
            }
          }}
        />
        <Button
          style={[styles.bottomMarginX, { flexGrow: 0, flexShrink: 1 }]}
          title="Clear"
          destructive
          disabled={!todos.length}
          onPress={clearTodos(dispatch)}
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
            <TodoItem key={todo.id} todo={todo} navigation={navigation} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
