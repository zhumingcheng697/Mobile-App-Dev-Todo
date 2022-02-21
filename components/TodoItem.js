import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../shared/styles";
import Toggle from "./Toggle";

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
  },
});

export default function TodoItem({ todo, editTodo, navigation }) {
  return (
    <View
      style={[
        styles.vMargin,
        styles.hMargin,
        style.container,
        { justifyContent: "flex-start" },
      ]}
    >
      <Toggle
        style={{ marginEnd: 5 }}
        isSet={!!todo.finishedAt}
        setStatus={(status) => {
          editTodo({ ...todo, finishedAt: status ? Date.now() : null });
        }}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("To-Do Detail", { todo })}
        style={[
          styles.vMargin,
          style.container,
          {
            flexShrink: 1,
            paddingStart: 5,
            justifyContent: "space-between",
          },
        ]}
      >
        <View style={{ flexShrink: 1, flexGrow: 1 }}>
          <Text
            style={[
              styles.line,
              { paddingEnd: 5 },
              todo.finishedAt ? styles.finishedStyle : null,
            ]}
          >
            {todo.title}
          </Text>
        </View>
        <Ionicons name="chevron-forward" color="darkgray" size={17} />
      </TouchableOpacity>
    </View>
  );
}
