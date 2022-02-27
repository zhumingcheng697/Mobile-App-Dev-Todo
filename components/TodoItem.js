import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";

import { editTodo } from "../redux/actions";
import styles from "../shared/styles";
import Toggle from "./Toggle";

export default function TodoItem({ todo, navigation }) {
  const dispatch = useDispatch();

  return (
    <View
      style={[
        styles.vMargin,
        styles.hMargin,
        styles.flexRow,
        { justifyContent: "flex-start" },
      ]}
    >
      <Toggle
        style={{ marginEnd: 5 }}
        isSet={!!todo.finishedAt}
        setStatus={(status) => {
          editTodo(dispatch)(todo.id, {
            ...todo,
            finishedAt: status ? Date.now() : null,
          });
        }}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("To-Do Detail", { todo })}
        style={[
          styles.vMargin,
          styles.flexRow,
          {
            flexShrink: 1,
            paddingStart: 5,
            justifyContent: "space-between",
          },
        ]}
      >
        <View style={{ flexShrink: 1, flexGrow: 1 }}>
          <View style={[styles.flexRow]}>
            {!!todo.priority && (
              <Text style={[styles.line, { paddingEnd: 5, color: "#f90" }]}>
                {todo.priority}
              </Text>
            )}
            <Text
              style={[
                styles.line,
                { flexShrink: 1, flexGrow: 1, paddingEnd: 5 },
                todo.finishedAt ? styles.finishedStyle : null,
              ]}
            >
              {todo.title}
            </Text>
          </View>
        </View>
        <Ionicons name="chevron-forward" color="darkgray" size={17} />
      </TouchableOpacity>
    </View>
  );
}
