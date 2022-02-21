import { StyleSheet } from "react-native";

const baseStyle = {
  input: {
    backgroundColor: "#f2f2f7",
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    fontSize: 17,
  },
};

export default StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    ...baseStyle.input,
  },
  textarea: {
    height: 100,
    ...baseStyle.input,
  },
  line: {
    fontSize: 17,
  },
  finishedStyle: {
    color: "#888",
    textDecorationColor: "#888",
    textDecorationLine: "line-through",
  },
  topMargin: {
    marginTop: 5,
  },
  bottomMargin: {
    marginBottom: 5,
  },
  vMargin: {
    marginVertical: 5,
  },
  vMarginX: {
    marginVertical: 10,
  },
  topMarginX: {
    marginTop: 10,
    marginBottom: 5,
  },
  bottomMarginX: {
    marginTop: 5,
    marginBottom: 10,
  },
  hMargin: {
    marginHorizontal: 20,
  },
});
