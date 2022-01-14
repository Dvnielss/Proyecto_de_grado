import React from 'react';
import {View, StyleSheet,Text} from 'react-native';



export default function Notas(props){
    const {nota}=props;
    return (
        <View  style={styles.card} >
            
            <Text style={styles.userName}>{nota.nombre} </Text>
            <Text style={[styles.userName, styles.textCurrent]}>{nota.calificacion}</Text>


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
      backgroundColor: "#1ea1f2",
    },
    
    userName: {
      color: "#fff",
      fontSize: 16,
    },
    
  });


