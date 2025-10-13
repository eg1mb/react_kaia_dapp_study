import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import React, { useState } from "react";

import * as MyNfcModule from "my-nfc-module";

export default function App() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const callSayMyName = () => {
    const result = MyNfcModule.sayHello(name);
    setMessage(result);
  };

  const callNativeFunction = () => {
    const result = MyNfcModule.hello();
    setMessage(result);
  };

  return (
    <View style={style.container}>
      <Text style={style.header}>My Custom Module</Text>

      <TextInput
        style={style.input}
        placeholder="Enter your name"
        onChangeText={setName}
        value={name}
      />

      <Button title="Say Hello to Swift With My Name" onPress={callSayMyName} />

      <Button title="Call Swift Function" onPress={callNativeFunction} />

      <Text style={style.message}>Message from Swift: {message}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  message: {
    marginTop: 20,
    fontSize: 10,
    textAlign: "center",
  },
});
