import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Linking,
  Text,
  Alert,
} from "react-native";

export default function Report(props) {
  const { user, notas } = props;
  const [formData, setFormData] = useState(defaultValue());
  const [formError, setFormError] = useState({});

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  const handleEmailPres = async () => {
    let errors = {};
    if (!formData.materia || !formData.descripcion) {
      if (!formData.materia) errors.materia = true;
      if (!formData.descripcion) errors.descripcion = true;
      createOneButtonAlert();
    } else {
      await Linking.openURL(
        `mailto:danielsslenderman1@gmail.com?subject=Reporte_De_Calificacion[${notas.nombre} ${notas.apellido}][${notas.cedula}]
        &body=
        <b>Nombre:</b> ${notas.nombre} ${notas.apellido}<br>
        <b>ID:</b> ${user.uid}<br>
        <b>Materia:</b> ${formData.materia}<br><br>
        <b>Descripcion:</b> ${formData.descripcion} 
        `
      );
    }

    setFormError(errors);
  };

  return (
    <>
      <TextInput
        style={[styles.input, formError.materia && styles.error]}
        placeholder={"Materia"}
        placeholderTextColor="#AEFEFF"
        onChange={(e) => onChange(e, "materia")}
      />

      <TextInput
        multiline
        numberOfLines={10}
        style={[styles.inputt, formError.descripcion && styles.error]}
        placeholder="Descripcion"
        placeholderTextColor="#AEFEFF"
        onChange={(e) => onChange(e, "descripcion")}
      />

      <TouchableOpacity onPress={handleEmailPres} style={styles.btn}>
        <Text style={styles.text}>Enviar</Text>
      </TouchableOpacity>
    </>
  );
}
function defaultValue() {
  return {
    materia: "",
    descripcion: "",
  };
}

const createOneButtonAlert = () =>
  Alert.alert("Error de Entrada!", "Evite dejar campos vacios", [
    {
      text: "Cancelar",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel",
    },
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);

const styles = StyleSheet.create({
  input: {
    height: 50,
    color: "#fff",
    width: "80%",
    marginBottom: 25,
    backgroundColor: "#072227",
    paddingHorizontal: 20,
    borderRadius: 15,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#35858B",
    marginTop: 100,
    borderWidth: 6,
  },
  inputt: {
    color: "#fff",
    width: "80%",
    marginBottom: 25,
    backgroundColor: "#072227",
    paddingHorizontal: 20,
    borderRadius: 25,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#35858B",
    textAlignVertical: "top",
    borderWidth: 4,
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
  error: {
    borderColor: "#940c0c",
  },
});
