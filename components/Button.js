import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import styles from "../shared/styles";

const buttonStyle = StyleSheet.create({
  regular: {
    color: "#07f",
  },
  destructive: {
    color: "#f33",
  },
  disabled: {
    opacity: 0.5,
  },
});

export default function Button({
  title,
  onPress,
  destructive,
  disabled,
  style,
}) {
  return (
    <TouchableOpacity style={style} onPress={onPress} disabled={disabled}>
      <Text
        style={[
          styles.line,
          destructive ? buttonStyle.destructive : buttonStyle.regular,
          disabled ? buttonStyle.disabled : null,
          {
            textAlign: "center",
            paddingVertical: 5,
            paddingHorizontal: 10,
          },
        ]}
      >
        {title || "Button"}
      </Text>
    </TouchableOpacity>
  );
}
