import React from "react";
import { View, StyleSheet, Text } from "react-native";
import firebase from "../utils/firebase";

export default function ActionBar(props) {
  const { showList, setShowList } = props;

  return (
    <View style={styles.viewFooter}>
      <View style={styles.viewReport}>
        <Text style={styles.text} onPress={() => setShowList(!showList)}>
          {showList ? "Reporte" : "Cancelar"}
        </Text>
      </View>
      <View style={styles.viewClose}>
        <Text style={styles.text} onPress={() => firebase.auth().signOut()}>
          Cerrar Sesión
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewFooter: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    width: "100%",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  viewClose: {
    backgroundColor: "#F05454",
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  text: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  viewReport: {
    backgroundColor: "#30475E",
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
});
