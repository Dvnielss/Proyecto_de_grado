import React, {useState} from "react";
import {StyleSheet,View, Text, Image} from "react-native";
import LoginForm from "./LoginForm";

export default function Auth() {
    const [isLogin, setIsLogin] = useState(true);


    return(
        <View style={styles.view}>
            <Image style={styles.logo} source={require("../assets/logo.png")}/>
            <LoginForm/> 
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        
    },
    logo:{
        width:"80%",
        height: 120,
        marginTop: 50,
        marginBottom:50

    }
})