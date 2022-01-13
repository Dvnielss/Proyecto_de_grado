import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text,ScrollView} from 'react-native';
import {map} from "lodash"
import ActionBar from './ActionBar';
import Report from './Report';
import firebase from '../utils/firebase';
import 'firebase/database'
import Notas from './Notas';


export default function ListNotas(props){
    const{user}=props;
    const [showList, setShowList] = useState(true);
    const [notas, setNotas] = useState([]);
    
    useEffect(() =>{
        const list = firebase.database().ref(`users/${user.uid}`);
            list.on('value', (snapshot) => {
            setNotas(snapshot.val())
            
        });
        

    },[]);
   
    return (
        <View style={styles.container}>
            {showList ? (
               <ScrollView style={styles.scrollView}>
                   <Text>{notas.nombre}</Text>
                   <Text>{notas.apellido}</Text>
                   <Text>{notas.cedula}</Text>
                   <Text> </Text>
                   
                   <Text>Materias Inscritas</Text>
                   {map(notas.materiasInscritas,(nota,index) => (
                    <Notas key={index} nota={nota}/>
                   ))}
                  
                   
               </ScrollView>
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


