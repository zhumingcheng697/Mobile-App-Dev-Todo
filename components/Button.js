import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import styles from "../shared/styles";

const buttonView = StyleSheet.create({
  regular: {
    backgroundColor: "#07f1",
  },
  destructive: {
    backgroundColor: "#f331",
  },
  disabled: {
    opacity: 0.5,
  },
});

const buttonText = StyleSheet.create({
  regular: {
    color: "#07f",
  },
  destructive: {
    color: "#f33",
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
      <View
        style={[
          destructive ? buttonView.destructive : buttonView.regular,
          disabled ? buttonView.disabled : null,
          {
            borderRadius: 8,
            paddingVertical: 8,
            paddingHorizontal: 20,
          },
        ]}
      >
        <Text
          style={[
            styles.line,
            destructive ? buttonText.destructive : buttonText.regular,
            { textAlign: "center" },
          ]}
        >
          {title || "Button"}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
