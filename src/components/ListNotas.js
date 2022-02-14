import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { map } from "lodash";
import ActionBar from "./ActionBar";
import Icon from "react-native-vector-icons/FontAwesome";

// import firebase from "../utils/firebase";
// import "firebase/database";
import Notas from "./Notas";
import Report from "./Report";

export default function ListNotas(props) {
  const { user, expoPushToken, notas} = props;
  const [showList, setShowList] = useState(true);
  // const [notas, setNotas] = useState([]);
  const [contador, setContador] = useState(0);
  const { showList1, setShowList1 } = props;

  // useEffect(() => {
  //   const list = firebase.database().ref(`users/${user.uid}`);
  //   list.on("value", (snapshot) => {
  //     setNotas(snapshot.val());
  //   });
  // }, []);

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
            <View style={{marginLeft: -25}}>
              <Icon
                name="arrow-left"
                size={20}
                style={{ color: "#fff" }}
                onPress={() => setShowList1(!showList1)}
              />
            </View>
            <Text style={styles.textData}>
              {notas.nombre} {notas.apellido}
            </Text>
            <Text style={styles.textData}>{notas.cedula}</Text>
          </View>

          <ScrollView style={styles.scrollView}>
            <Text style={styles.title}>Materias Inscritas</Text>
            <Text style={styles.title}>{notas.periodo}</Text>
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

      <TouchableOpacity></TouchableOpacity>
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
    backgroundColor: "#072227",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  text: {
    fontSize: 18,
    color: "#fff",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    color: "#222",
    fontWeight: "bold",
    textAlign: "center",
  },
  textData: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  viewReport: {
    backgroundColor: "#598392",
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
});
