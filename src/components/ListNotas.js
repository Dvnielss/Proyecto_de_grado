import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Button,
  Header,
} from "react-native";
// import {Header,Body,Title} from "native-base"
import { map } from "lodash";
import ActionBar from "./ActionBar";
import Report from "./Report";
import firebase from "../utils/firebase";
import "firebase/database";
import Notas from "./Notas";

export default function ListNotas(props) {
  const { user, expoPushToken } = props;
  const [showList, setShowList] = useState(true);
  const [notas, setNotas] = useState([]);
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const list = firebase.database().ref(`users/${user.uid}`);
    list.on("value", (snapshot) => {
      setNotas(snapshot.val());
    });
  }, []);

  useEffect(() => {
    if (notas.length === 0) {
      console.log("EmpName no está definido");
    } else {
      setContador(contador + 1);
      if (contador === 0) {
        console.log("no notify");
      } else {
        sendMesaage(expoPushToken);
      }
    }
  }, [notas]);

  return (
    <View style={styles.container}>
      {showList ? (
        <>
          <View style={styles.viewHeader}>
            <Text>{notas.nombre} {notas.apellido}</Text>
            <Text>{notas.cedula}</Text>
          </View>
          <Text style={styles.text}>Materias Inscritas</Text>
          <ScrollView style={styles.scrollView}>
            {map(notas.materiasInscritas, (nota, index) => (
              <Notas
                key={index}
                nota={nota}
                notas={notas}
                expoPushToken={expoPushToken}
              />
            ))}
          </ScrollView>
        </>
      ) : (
        <Report user={user} notas={notas} />
      )}
      <ActionBar showList={showList} setShowList={setShowList} />
    </View>
  );
}

const sendMesaage = (token) => {
  fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      to: token,
      title: "UNERG",
      body: "Calificacion Cargada",
      data: { data: "goes here" },
      _displayInForeground: true,
    }),
  });
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
  },
  scrollView: {
    marginBottom: 50,
    width: "100%",
  },
  viewHeader: {
    top: 0,
    flexDirection: "row",
    width: "100%",
    height: 50,
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  text:{
    fontSize: 18,
    color: "#fff"
  }
});
