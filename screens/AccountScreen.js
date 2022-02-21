import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, TextInput, View, SafeAreaView, ScrollView } from "react-native";

import styles from "../shared/styles";

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

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
        <View style={[styles.hMargin, styles.topMargin]}>
          <Text style={[styles.topMarginX, styles.line]}>Username:</Text>
          <TextInput
            style={[styles.input, styles.vMargin]}
            value={username}
            keyboardType={"ascii-capable"}
            onChangeText={this.updateUsername.bind(this)}
          />
          <Text style={[styles.topMarginX, styles.line]}>Email:</Text>
          <TextInput
            style={[styles.input, styles.vMargin]}
            value={email}
            keyboardType={"email-address"}
            onChangeText={this.updateEmail.bind(this)}
          />
          <Text style={[styles.topMarginX, styles.line]}>Number:</Text>
          <TextInput
            style={[styles.input, styles.vMargin]}
            value={number}
            keyboardType={"phone-pad"}
            onChangeText={this.updateNumber.bind(this)}
          />
        </View>
      </SafeAreaView>
    );
  }
}
