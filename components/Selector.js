import React, { Component } from "react";
import { View, Text } from "react-native";

import styles from "../shared/styles";
import Button from "./Button";
import { spreadStyle } from "../shared/util";

export default class Selector extends Component {
  componentDidUpdate({ initialValue: pInitialValue }) {
    const { initialValue, value, required } = this.props;

    if (
      pInitialValue !== initialValue &&
      value !== initialValue &&
      (!required || !!initialValue)
    ) {
      this.updateValue(initialValue);
    }
  }

  updateValue(newSelected) {
    const { value, setValue, required } = this.props;

    if (!required && ((!value && !newSelected) || value === newSelected)) {
      setValue(null);
    } else {
      setValue(newSelected);
    }
  }

  render() {
    const { options, value, style } = this.props;

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
            onPress={() => this.updateValue(option)}
            key={`${option}-${index}`}
            highlighted={option === value}
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
