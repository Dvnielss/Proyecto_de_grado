import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { validateEmail } from "../utils/validations";
import firebase from "../utils/firebase";

export default function LoginForm() {

    const login = () => {
        console.log("Iniciando sesion...");

    };

  return (
    <>
      <TextInput 
      style={styles.input}
      placeholder= "Correo electronico"
      placeholderTextColor="#969696" />

     <TextInput 
      style={styles.input}
      placeholder= "Contraseña"
      placeholderTextColor="#969696"
      secureTextEntry={"true"}  />

      <TouchableOpacity onPress={login} style={styles.btn}>
        <Text>Iniciar Sesión</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  btn: {
    color: "#fff",
    fontSize: 18,
  },
  input:{
    height:50,
    olor:"#fff",
    width: '80%',
    marginBottom: 25,
    backgroundColor: '#35858B',
    paddingHorizontal: 20,
    borderRadius: 50,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#35858B',
  },
  xdxd:{
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 10,



  }
});
