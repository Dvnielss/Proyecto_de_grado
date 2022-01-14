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

export default function LoginForm(props) {
  const [formData, setFormData] = useState(defaultValue());
  const [formError, setFormError] = useState({});

  const login = () => {
    let errors = {};
    if (!formData.email || !formData.password) {
      if (!formData.email) errors.email = true;
      if (!formData.password) errors.password = true;
      console.log("ERROR 1");
    } else if (!validateEmail(formData.email)) {
      errors.email = true;
      console.log("ERROR 2");
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(formData.email, formData.password)
        .catch(() => {
          setFormError({
            email: true,
            password: true,
          });
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
        <Text>Iniciar Sesión</Text>
      </TouchableOpacity>
    </>
  );
}
function defaultValue() {
  return {
    email: "",
    password: "",
  };
}
const styles = StyleSheet.create({
  btn: {
    color: "#fff",
    fontSize: 18,
  },
  input: {
    height: 50,
    color: "#fff",
    width: "80%",
    marginBottom: 25,
    backgroundColor: "#4FBDBA",
    paddingHorizontal: 20,
    borderRadius: 50,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#4FBDBA",
  },
  xdxd: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  error: {
    borderColor: "#940c0c",
  },
});
