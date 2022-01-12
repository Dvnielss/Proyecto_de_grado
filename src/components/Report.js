import React from 'react';
import {View, StyleSheet,Text} from 'react-native';

export default function Report(props) {
    const{user}=props;

    console.log(user.uid)
    
    return (
        <View>
            <Text>Report</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({})


