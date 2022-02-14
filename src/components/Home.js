import { React, useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import firebase from "../utils/firebase";
import Icon from "react-native-vector-icons/FontAwesome";
import "firebase/database";

// import ConsNotas from './ConsNotas';
// import Horario from './Horario';
import ListNotas from "./ListNotas";

export default function Home(props) {
  const { user, expoPushToken } = props;
  const [notas, setNotas] = useState([]);
  const [showList1, setShowList1] = useState(false);
  const [showList2, setShowList2] = useState(false);
  const [showList3, setShowList3] = useState(false);
  const [showList4, setShowList4] = useState(false);

  useEffect(() => {
    const list = firebase.database().ref(`users/${user.uid}`);
    list.on("value", (snapshot) => {
      setNotas(snapshot.val());
    });
  }, []);

  return (
    <View style={styles.container}>
      <>
        {showList1 ? (
          <>
            <ListNotas
              user={user}
              expoPushToken={expoPushToken}
              showList1={showList1}
              setShowList1={setShowList1}
              notas={notas}
            />
          </>
        ) : showList2 ? (
          <>
            <View style={styles.viewHeader}>
              <View style={{ marginLeft: -25 }}>
                <Icon
                  name="arrow-left"
                  size={30}
                  style={styles.textDataCard}
                  onPress={() => setShowList2(!showList2)}
                />
              </View>
              <Text style={styles.textData}>
                {notas.nombre} {notas.apellido}
              </Text>
              
              <Text style={styles.textData}>{notas.cedula}</Text>
            </View>
          

            <Text style={{marginTop: 320}}>COSTANCIAS DE NOTAS</Text>
           
          </>
        ) : showList3 ? (
          <>
            <View style={styles.viewHeader}>
              <View style={{ marginLeft: -25 }}>
                <Icon
                  name="arrow-left"
                  size={30}
                  style={styles.textDataCard}
                  onPress={() => setShowList3(!showList3)}
                />
              </View>
              <Text style={styles.textData}>
                {notas.nombre} {notas.apellido}
              </Text>
              <Text style={styles.textData}>{notas.cedula}</Text>
            </View>
            <Text style={{marginTop: 320}} >HORARIO</Text>
          </>
        ) : showList4 ? (
          <>
            <View style={styles.viewHeader}>
              <View style={{ marginLeft: -25 }}>
                <Icon
                  name="arrow-left"
                  size={300}
                  style={styles.textDataCard}
                  onPress={() => setShowList4(!showList4)}
                />
              </View>
              <Text style={styles.textData}>
                {notas.nombre} {notas.apellido}
              </Text>
              <Text style={styles.textData}>{notas.cedula}</Text>
            </View>
            <Text style={{marginTop: 320}} >COSTANCIAS DE INSCRIPCION</Text>
          </>
        ) : (
          <View>
            {/* <FlatList
            
              data={[{ key: "a" }]}
              renderItem={({ item }) => (
                <View style={{justifyContent:"space-between"}}>
                  <TouchableOpacity onPress={() => setShowList1(!showList1)}>
                    <View style={styles.card}>
                      <Text style={styles.textDataCard}>
                        Materias Inscritas
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setShowList2(!showList2)}>
                    <View style={styles.card}>
                      <Text style={styles.textDataCard}>
                        Constancia de Notas
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setShowList3(!showList3)}>
                    <View style={styles.card}>
                      <Text style={styles.textDataCard}>Horario</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setShowList4(!showList4)}>
                    <View style={styles.card}>
                      <Text style={styles.textDataCard}>
                        Constancia de Inscripcion
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            /> */}
            <View style={styles.viewHeader1}>
              <Text style={styles.textData}>
                {notas.nombre} {notas.apellido}
              </Text>
              <Text style={styles.textData}>{notas.cedula}</Text>
            </View>
            <TouchableOpacity onPress={() => setShowList1(!showList1)}>
              <View style={styles.card}>
                <Text style={styles.textDataCard}>Materias Inscritas</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowList2(!showList2)}>
              <View style={styles.card}>
                <Text style={styles.textDataCard}>Constancia de Notas</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowList3(!showList3)}>
              <View style={styles.card}>
                <Text style={styles.textDataCard}>Horario</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowList4(!showList4)}>
              <View style={styles.card}>
                <Text style={styles.textDataCard}>
                  Constancia de Inscripcion
                </Text>
              </View>
            </TouchableOpacity>

            <View style={styles.viewClose}>
              <Text
                style={styles.textDataCard}
                onPress={() => firebase.auth().signOut()}
              >
                Cerrar Sesión
              </Text>
            </View>
          </View>
        )}
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    alignItems: "center",
    height: "100%",
  },
  card: {
    justifyContent: "space-around",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    paddingHorizontal: 10,
    margin: 10,
    borderRadius: 15,
    backgroundColor: "#072227",
    paddingLeft: 5,
    paddingRight: 5,
  },
  viewClose: {
    position: "absolute",
    bottom: "-98%",
    right: "25%",
    backgroundColor: "#F05454",
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
    margin: 10,
  },
  viewReport: {
    backgroundColor: "#598392",
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
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
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  viewHeader1: {
    top: 0,
    flexDirection: "row",
    width: "95%",
    height: 50,
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 30,
    backgroundColor: "#072227",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  textData: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  textDataCard: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
