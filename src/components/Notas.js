import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Notas(props) {
  const { nota } = props;
  return (
    <View style={styles.card}>
      <View style={styles.col}>
        <Text style={styles.userName}>{nota.nombre} </Text>

      </View>

      <View style={styles.col}>
        <Text style={[styles.userName, styles.textCurrent]}>
          {nota.calificacion}
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  col: {
    width: "50%",
    alignItems: "center",

  },


  card: {
    justifyContent: "space-between",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    margin: 10,
    borderRadius: 15,
    backgroundColor: "#072227",
    paddingLeft: 5,
    paddingRight: 5
  },

  userName: {
    color: "#fff",
    fontSize: 16,
  },
});
