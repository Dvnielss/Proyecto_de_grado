import React, { useState,useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import firebase from "./src/utils/firebase";
import "firebase/auth";

export default function App() {
  const [user, setUser] = useState(undefined)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((response) => {
      setUser(response)
    });
  }, []);
  if (user === undefined) return null;
  return (
    <SafeAreaView>
     {user ? <Text>Estas logueado</Text> : <Text>No estas logeado</Text>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
