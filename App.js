import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, StatusBar } from "react-native";
import Auth from "./src/components/Auth";
import firebase from "./src/utils/firebase";
import "firebase/auth";
import ListNotas from "./src/components/ListNotas";


export default function App() {
  const [user, setUser] = useState(undefined);
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged((response) => {
      setUser(response);
    });
  }, []);

  if (user === undefined) return null;

  return (
    
    <>
      <StatusBar barStyle="ligth-content" />
      <SafeAreaView style={styles.background}>
        {user ? <ListNotas user={user}/>: <Auth />}
        

      </SafeAreaView>
    </>
  );
}


const styles = StyleSheet.create({
  background: {
    backgroundColor: "#35858B",  
    height: "100%",
  },
});
