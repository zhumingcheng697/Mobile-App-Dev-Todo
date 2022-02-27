import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, TextInput, View, SafeAreaView, Switch } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import {
  updateUsername,
  updateEmail,
  updateNumber,
  setDefaultPriority,
  setRememberPriority,
  setRequireBody,
} from "../redux/actions";
import styles from "../shared/styles";
import Selector from "../components/Selector";

export default function AccountScreen() {
  const dispatch = useDispatch();

  const username = useSelector((state) => state.username);
  const email = useSelector((state) => state.email);
  const number = useSelector((state) => state.number);

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
          onChangeText={updateUsername(dispatch)}
        />
        <Text style={[styles.topMargin, styles.line]}>Email:</Text>
        <TextInput
          style={[styles.input, styles.vMargin]}
          value={email}
          keyboardType={"email-address"}
          onChangeText={updateEmail(dispatch)}
        />
        <Text style={[styles.topMargin, styles.line]}>Number:</Text>
        <TextInput
          style={[styles.input, styles.vMargin]}
          value={number}
          keyboardType={"phone-pad"}
          onChangeText={updateNumber(dispatch)}
        />
        <Text style={[styles.topMargin, styles.line]}>
          Default To-Do Priority:
        </Text>
        <Selector
          style={styles.vMargin}
          options={["!!!", "!!", "!"]}
          value={defaultPriority}
          setValue={setDefaultPriority(dispatch)}
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
            onValueChange={setRememberPriority(dispatch)}
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
            onValueChange={setRequireBody(dispatch)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
