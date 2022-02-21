import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, TextInput, View, SafeAreaView, Switch } from "react-native";

import styles from "../shared/styles";
import Selector from "../components/Selector";

export default class AccountScreen extends Component {
  state = {
    username: "",
    email: "",
    number: "",
  };

  updateUsername(username) {
    this.setState({ username });
  }

  updateEmail(email) {
    this.setState({ email });
  }

  updateNumber(number) {
    this.setState({ number });
  }

  render() {
    const { username, email, number } = this.state;
    const {
      defaultPriority,
      rememberPriority,
      requireBody,
      setDefaultPriority,
      setRememberPriority,
      setRequireBody,
    } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
        <View style={[styles.hMargin, styles.topMargin]}>
          <Text style={[styles.topMargin, styles.line]}>Username:</Text>
          <TextInput
            style={[styles.input, styles.vMargin]}
            value={username}
            keyboardType={"ascii-capable"}
            onChangeText={this.updateUsername.bind(this)}
          />
          <Text style={[styles.topMargin, styles.line]}>Email:</Text>
          <TextInput
            style={[styles.input, styles.vMargin]}
            value={email}
            keyboardType={"email-address"}
            onChangeText={this.updateEmail.bind(this)}
          />
          <Text style={[styles.topMargin, styles.line]}>Number:</Text>
          <TextInput
            style={[styles.input, styles.vMargin]}
            value={number}
            keyboardType={"phone-pad"}
            onChangeText={this.updateNumber.bind(this)}
          />
          <Text style={[styles.topMargin, styles.line]}>
            Default To-Do Priority:
          </Text>
          <Selector
            style={styles.vMargin}
            options={["!!!", "!!", "!"]}
            value={defaultPriority}
            setValue={setDefaultPriority}
          />
          <View
            style={[
              styles.flexRow,
              styles.vMarginX,
              { justifyContent: "space-between" },
            ]}
          >
            <Text style={styles.line}>Remember Last To-Do Priority</Text>
            <Switch
              value={rememberPriority}
              onValueChange={setRememberPriority}
            />
          </View>
          <View
            style={[
              styles.flexRow,
              styles.vMarginX,
              { justifyContent: "space-between" },
            ]}
          >
            <Text style={styles.line}>Require To-Do Body</Text>
            <Switch value={requireBody} onValueChange={setRequireBody} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
