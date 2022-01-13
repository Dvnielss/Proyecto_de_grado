import React from 'react';
import {View, StyleSheet,Text} from 'react-native';


export default function Notas(props){
    const {nota}=props;
  
 
    return (
        <View style={styles.card}>
            
            <Text style={styles.userName}>{nota.nombre} </Text>
            <Text style={styles.userName}>{nota.calificacion}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    card: {
      justifyContent: "space-between",
      height: 60,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 10,
      margin: 10,
      borderRadius: 15,
      backgroundColor: "#559204",
    },
    actual: {
      
    },
    current: {
      backgroundColor: "#1ea1f2",
    },
    pasat: {
      backgroundColor: "#820000",
    },
    userName: {
      color: "#fff",
      fontSize: 16,
    },
    textCurrent: {
        backgroundColor: "#fff",
        borderRadius: 20,
        width: 50,
        alignItems: "center",
        justifyContent:"center"
    },
  });


