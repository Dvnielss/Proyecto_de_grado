import React from 'react';
import {View, StyleSheet,Text} from 'react-native';


export default function Notas(props){
    const {nota}=props;
  
 
    return (
        <View>
            <Text>{nota.nombre} </Text>
            <Text>{nota.calificacion}</Text>

        </View>
    );
}

const styles = StyleSheet.create({})


