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
  highlightedRegular: {
    backgroundColor: "#07f",
  },
  highlightedDestructive: {
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
  highlighted: {
    color: "#fff",
  },
});

export default function Button({
  title,
  children,
  onPress,
  destructive,
  disabled,
  highlighted,
  style,
}) {
  return (
    <TouchableOpacity style={style} onPress={onPress} disabled={disabled}>
      <View
        style={[
          styles.flexRow,
          destructive
            ? highlighted
              ? buttonView.highlightedDestructive
              : buttonView.destructive
            : highlighted
            ? buttonView.highlightedRegular
            : buttonView.regular,
          disabled ? buttonView.disabled : null,
          {
            justifyContent: "center",
            borderRadius: 8,
            paddingVertical: 8,
            paddingHorizontal: 20,
          },
        ]}
      >
        {typeof children === "function" ? (
          children({
            style: [
              styles.line,
              highlighted
                ? buttonText.highlighted
                : destructive
                ? buttonText.destructive
                : buttonText.regular,
            ],
          })
        ) : typeof children === "object" ? (
          children
        ) : (
          <Text
            style={[
              styles.line,
              highlighted
                ? buttonText.highlighted
                : destructive
                ? buttonText.destructive
                : buttonText.regular,
              { textAlign: "center" },
            ]}
          >
            {typeof children === "string" ? children : title || "Button"}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}
