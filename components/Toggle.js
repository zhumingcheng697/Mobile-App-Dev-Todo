import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

const toggleStyle = StyleSheet.create({
  base: {
    width: 24,
    height: 24,
    borderRadius: 24,
    borderWidth: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  set: {
    borderColor: "#f90",
  },
  unset: {
    borderColor: "#ccc",
  },
  inner: {
    width: 16,
    height: 16,
    backgroundColor: "#f90",
    borderRadius: 16,
  },
});

export default function Toggle({ isSet, setStatus, style }) {
  return (
    <View style={style}>
      <TouchableOpacity onPress={() => setStatus(!isSet)}>
        <View
          style={[
            toggleStyle.base,
            isSet ? toggleStyle.set : toggleStyle.unset,
          ]}
        >
          {isSet && <View style={toggleStyle.inner}></View>}
        </View>
      </TouchableOpacity>
    </View>
  );
}
