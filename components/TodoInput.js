import React, { Component } from "react";
import { TextInput } from "react-native";
import styles from "../styles";

export default class TodoInput extends Component {
  state = {
    msg: this.props.todo.msg,
  };

  commit() {
    const { todo, editTodo, removeTodo } = this.props;
    const { msg } = this.state;

    if (msg == todo.msg) return;

    if (msg) {
      editTodo(Object.assign({}, todo, { msg }));
    } else {
      removeTodo();
    }
  }

  componentWillUnmount() {
    const { todo } = this.props;
    const { msg } = this.state;

    if (msg != todo.msg) {
      this.commit();
    }
  }

  render() {
    const { msg } = this.state;
    const { todo } = this.props;
    return (
      <TextInput
        scrollEnabled={false}
        multiline={true}
        blurOnSubmit={true}
        returnKeyType="done"
        onChangeText={(str) => {
          this.setState({ msg: str });
        }}
        onEndEditing={() => {
          this.commit();
        }}
        value={msg}
        style={[
          {
            flexShrink: 1,
            paddingTop: 0,
            paddingBottom: 0,
          },
          styles.line,
          todo.done
            ? {
                color: "#888",
                textDecorationColor: "#888",
                textDecorationLine: "line-through",
              }
            : null,
        ]}
      />
    );
  }
}
