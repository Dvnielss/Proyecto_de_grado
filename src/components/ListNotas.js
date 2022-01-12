import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ActionBar from './ActionBar';
import Report from './Report';
import firebase from '../utils/firebase';
import 'firebase/database'

export default function ListNotas(props){
    const{user}=props;
    const [showList, setShowList] = useState(false);

    useEffect(() =>{
        const list = firebase.database().ref('users');
        list.on('value', (snapshot) => {
            console.log(snapshot.val())

        });

    },[]);


   
    return (
        <View style={styles.container}>
            {showList ? (
                <>
                    <Text>lista</Text>
                    <Text>lista</Text>
                    <Text>lista</Text>
                    <Text>lista</Text>
                    <Text>lista</Text>
                    <Text>lista</Text> 
                </>
            ):(

                <Report user={user}/>
            )}
            <ActionBar showList ={showList} setShowList={setShowList}/>  
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      height: "100%",
    },
    scrollView: {
      marginBottom: 50,
      width: "100%",
    },
  });


