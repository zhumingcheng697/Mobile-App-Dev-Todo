import React, { Component } from "react";
import { View, Text } from "react-native";

import styles from "../shared/styles";
import Button from "./Button";
import { spreadStyle } from "../shared/util";

export default class Selector extends Component {
  updateSelected(newSelected) {
    const { selected, setSelected, required } = this.props;

    if (
      !required &&
      ((!selected && !newSelected) || selected === newSelected)
    ) {
      setSelected(null);
    } else {
      setSelected(newSelected);
    }
  }

  render() {
    const { options, selected, style } = this.props;

    return (
      <View
        style={[
          ...spreadStyle(style),
          styles.flexRow,
          { justifyContent: "space-between" },
        ]}
      >
        {options.map((option, index) => (
          <Button
            onPress={() => this.updateSelected(option)}
            key={`${option}-${index}`}
            highlighted={option === selected}
            style={[
              { flexGrow: 1, flexBasis: 1 },
              index === 0
                ? { marginEnd: 4 }
                : index === options.length - 1
                ? { marginStart: 4 }
                : { marginHorizontal: 4 },
            ]}
          >
            {option}
          </Button>
        ))}
      </View>
    );
  }
}
