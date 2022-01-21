import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import LoginForm from "./LoginForm";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <View style={styles.view}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />

      <LoginForm />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    width: "80%",
    height: 120,
    marginBottom: 100,
    marginTop: 100,
  },
  login: {
    color: "#fff",
    marginBottom: 50,
    fontSize: 18,
  },
});
