import React from 'react';
import {StyleSheet,TextInput,Button,View} from 'react-native';


export default function Report(props) {
    const{user}=props;

   // console.log(user.uid)
    
    return (
        <>
        <View style={styles.view}>

            <TextInput
            style={styles.input}
            placeholder={"Materia"}
            placeholderTextColor="#AEFEFF"
            />
    
            <TextInput
            style={styles.inputt}
            placeholder="Descripcion"
            placeholderTextColor="#AEFEFF"
            multiline={true}
            textAlignVertical="top"
            />
            <Button title="enviar reporte"/>
       
        </View>
      </>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        color: "#fff",
        width: "100%",
        marginBottom: 25,
        backgroundColor: "#4FBDBA",
        paddingHorizontal: 20,
        borderRadius: 50,
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#4FBDBA",
        marginTop:100
          
    },
    view:{
        marginTop: 50,
        flex: 1,
        alignItems: 'center',
    },
    inputt:{
        height: 200,
        color: "#fff",
        width: "100%",
        marginBottom: 25,
        backgroundColor: "#4FBDBA",
        paddingHorizontal: 20,
        borderRadius: 25,
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#4FBDBA",
      

    }
    
})


