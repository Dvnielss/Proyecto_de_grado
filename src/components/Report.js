import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View, Linking } from "react-native";

export default function Report(props) {
  const { user, notas } = props;
  const [formData, setFormData] = useState(defaultValue());

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  const handleEmailPres = async () => {
    await Linking.openURL(
      `mailto:danielsslenderman1@gmail.com?subject=Reporte_De_Calificacion[${notas.nombre} ${notas.apellido}][${notas.cedula}]
      &body=
      <b>Nombre:</b> ${notas.nombre} ${notas.apellido}<br>
      <b>Materia:</b> ${formData.materia}<br><br>
      <b>Descripcion:</b> ${formData.descripcion} 
      `
    );
  };

  console.log(formData.materia);

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder={"Materia"}
        placeholderTextColor="#AEFEFF"
        onChange={(e) => onChange(e, "materia")}
      />

      <TextInput
        multiline
        numberOfLines={10}
        style={styles.inputt}
        placeholder="Descripcion(Opcional)"
        placeholderTextColor="#AEFEFF"
        onChange={(e) => onChange(e, "descripcion")}
      />

      <Button title="enviar reporte" onPress={handleEmailPres} />
    </>
  );
}
function defaultValue() {
  return {
    materia: "",
    descripcion: "",
  };
}

const styles = StyleSheet.create({
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
    marginTop: 100,
  },
  inputt: {
    color: "#fff",
    width: "80%",
    marginBottom: 25,
    backgroundColor: "#4FBDBA",
    paddingHorizontal: 20,
    borderRadius: 25,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#4FBDBA",
    textAlignVertical: "top",
  },
});
