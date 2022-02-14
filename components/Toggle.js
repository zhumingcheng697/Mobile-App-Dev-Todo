import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

const style = StyleSheet.create({
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
        <View style={[style.base, isSet ? style.set : style.unset]}>
          {isSet && <View style={style.inner}></View>}
        </View>
      </TouchableOpacity>
    </View>
  );
}
