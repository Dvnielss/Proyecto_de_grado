import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, StatusBar } from "react-native";
import Auth from "./src/components/Auth";
import firebase from "./src/utils/firebase";
import "firebase/auth";
import ListNotas from "./src/components/ListNotas";
import { Button, View } from "react-native-web";

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
        {user ? <ListNotas/>: <Auth />}
        

      </SafeAreaView>
    </>
  );
}

// function Logout(){
//   const logout = () => {
//     firebase.auth().signOut();
//   };
//   return(
//     <View>
//       <Text>
//         Estas Logueado
//       </Text>
//       <Button title="Cerrar Sesion" onPress={logout}/>
//     </View>
//   )
// }

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#35858B",  
    height: "100%",
  },
});
