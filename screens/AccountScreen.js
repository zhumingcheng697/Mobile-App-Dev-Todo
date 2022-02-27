import * as React from "react";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, TextInput, View, SafeAreaView, Switch } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import {
  setDefaultPriority,
  setRememberPriority,
  setRequireBody,
} from "../redux/actions";
import styles from "../shared/styles";
import Selector from "../components/Selector";

export default function AccountScreen() {
  const dispatch = useDispatch();

  const [username, updateUsername] = useState("");
  const [email, updateEmail] = useState("");
  const [number, updateNumber] = useState("");

  const defaultPriority = useSelector((state) => state.defaultPriority);
  const rememberPriority = useSelector((state) => state.rememberPriority);
  const requireBody = useSelector((state) => state.requireBody);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={[styles.hMargin, styles.topMargin]}>
        <Text style={[styles.topMargin, styles.line]}>Username:</Text>
        <TextInput
          style={[styles.input, styles.vMargin]}
          value={username}
          keyboardType={"ascii-capable"}
          onChangeText={updateUsername}
        />
        <Text style={[styles.topMargin, styles.line]}>Email:</Text>
        <TextInput
          style={[styles.input, styles.vMargin]}
          value={email}
          keyboardType={"email-address"}
          onChangeText={updateEmail}
        />
        <Text style={[styles.topMargin, styles.line]}>Number:</Text>
        <TextInput
          style={[styles.input, styles.vMargin]}
          value={number}
          keyboardType={"phone-pad"}
          onChangeText={updateNumber}
        />
        <Text style={[styles.topMargin, styles.line]}>
          Default To-Do Priority:
        </Text>
        <Selector
          style={styles.vMargin}
          options={["!!!", "!!", "!"]}
          value={defaultPriority}
          setValue={(value) => setDefaultPriority(dispatch, value)}
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
            onValueChange={(value) => setRememberPriority(dispatch, value)}
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
          <Switch
            value={requireBody}
            onValueChange={(value) => setRequireBody(dispatch, value)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
