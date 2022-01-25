import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import { validateEmail } from "../utils/validations";
import firebase from "../utils/firebase";
import { Button } from "native-base";

export default function LoginForm() {
  const [formData, setFormData] = useState(defaultValue());
  const [formError, setFormError] = useState({});

  const login = () => {
    let errors = {};
    if (!formData.email || !formData.password) {
      if (!formData.email) errors.email = true;
      if (!formData.password) errors.password = true;
      createThreeButtonAlert();
    } else if (!validateEmail(formData.email)) {
      errors.email = true;
      createTwoButtonAlert();
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(formData.email, formData.password)
        .catch(() => {
          setFormError({
            email: true,
            password: true,
          });
          createOneButtonAlert();
        });
    }
    setFormError(errors);
  };

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  return (
    <>
      <TextInput
        style={[styles.input, formError.email && styles.error]}
        placeholder={"Correo electronico"}
        placeholderTextColor="#AEFEFF"
        onChange={(e) => onChange(e, "email")}
      />

      <TextInput
        style={[styles.input, formError.password && styles.error]}
        placeholder="Contraseña"
        placeholderTextColor="#AEFEFF"
        secureTextEntry={true}
        onChange={(e) => onChange(e, "password")}
      />
      <TouchableOpacity onPress={login} style={styles.btn}>
        <Text style={styles.text}>Iniciar Sesión</Text>
      </TouchableOpacity>

  
    </>
  );
}



const createTwoButtonAlert = () =>
  Alert.alert(
    "Error de Correo!",
    "El correo electronico ingresado es invalido",
    [
      {
        text: "Cancelar",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]
  );

const createThreeButtonAlert = () =>
  Alert.alert("Error de Entrada!", "Por favor evite dejar campos vacios", [
    {
      text: "Cancelar",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel",
    },
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);
const createOneButtonAlert = () =>
  Alert.alert("Error de credeciales!", "Correo o contaseña incorrecta", [
    {
      text: "Cancelar",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel",
    },
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);
function defaultValue() {
  return {
    email: "",
    password: "",
  };
}
const styles = StyleSheet.create({
  input: {
  
    height: 50,
    color: "#fff",
    width: "80%",
    marginBottom: 15,
    backgroundColor: "#072227",
    paddingHorizontal: 20,
    borderRadius: 50,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#4FBDBA",
  },
  error: {
    borderColor: "#940c0c",
  },
  btn: {
    backgroundColor: "#072227",
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
    fontSize: 18,
  },
  text: {
    color: "#AEFEFF",
  },
});
