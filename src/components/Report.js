import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Linking,
  Text,
  Alert,
  View,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { map } from "lodash";

export default function Report(props) {
  const { user, notas } = props;
  const [formData, setFormData] = useState(defaultValue());
  const [formError, setFormError] = useState({});
  const [selected, setSelected] = useState();

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  const handleEmailPres = async () => {
    let errors = {};
    if (!formData.descripcion) {
      if (!formData.descripcion) errors.descripcion = true;

      createOneButtonAlert();
    } else if (!selected) {
      if (!selected) errors.selected = true;
      createTwoButtonAlert();
    } else {
      await Linking.openURL(
        `mailto:danielsslenderman1@gmail.com?subject=Reporte_De_Calificacion[${notas.nombre} ${notas.apellido}][${notas.cedula}]
      &body=
      <b>Nombre:</b> ${notas.nombre} ${notas.apellido}<br>
      <b>Materia:</b> ${selected}<br><br>
      <b>Descripción:</b> ${formData.descripcion} 
      `
      );
    }

    setFormError(errors);
  };

  return (
    <>
      <View style={[styles.view, formError.selected && styles.error]}>
        <Picker
          selectedValue={selected}
          onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}
          style={{
            width: 300,
            height: 55,
            color: "#AEFEFF",
            backgroundColor: "#072227",
          }}
        >
          <Picker.Item label="Seleccionar materia"></Picker.Item>
          {map(notas.materiasInscritas, (nota, index) => (
            <Picker.Item
              backgroundColor="#072227"
              label={nota.nombre}
              value={nota.nombre}
            />
          ))}
        </Picker>
      </View>

      <TextInput
        multiline
        numberOfLines={10}
        style={[styles.input, formError.descripcion && styles.error]}
        placeholder="Descripción"
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

const createTwoButtonAlert = () =>
  Alert.alert("Error de Entrada!", "No ha seleccionado una materia", [
    {
      text: "Cancelar",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel",
    },
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);

const styles = StyleSheet.create({
  input: {
    color: "#fff",
    // width: "80%",
    width: 300,
    marginBottom: 10,
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
    marginBottom: 20,
    width: 150,
    alignItems: 'center',
  },
  text: {
    color: "#AEFEFF",
  },
  error: {
    borderColor: "#940c0c",
  },
  view: {
    width: "80%",
    marginTop: 80,
    marginBottom: 10,
    borderWidth: 4,
    borderRadius: 25,
    borderColor: "#35858B",
    overflow: "hidden",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  }
});
