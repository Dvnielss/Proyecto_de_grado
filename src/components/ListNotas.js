import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text,ScrollView,Button} from 'react-native';
import {map} from "lodash"
import ActionBar from './ActionBar';
import Report from './Report';
import firebase from '../utils/firebase';
import 'firebase/database'
import Notas from './Notas';



export default function ListNotas(props){
    const{user,expoPushToken}=props;
    const [showList, setShowList] = useState(true);
    const [notas, setNotas] = useState([]);
    console.log("notas", notas)
    

    
    useEffect(() =>{
        const list = firebase.database().ref(`users/${user.uid}`);
            list.on('value', (snapshot) => {
            setNotas(snapshot.val())   
        });

    },[]);

        
    useEffect(() => {
       
        if(notas == 'undefined'){
            console.log('entr0');
            sendMesaage(expoPushToken)
           
        }else {
            console.log('no undefined');
        }

        // if(EmpName == 'undefined'){
        //     console.log("EmpName no está definido");
        //   } else {
        //     console.log("EmpName está definido");
        //   }
        
        

    }, [notas]);



   
    return (
        <View style={styles.container}>
            {showList ? (
               <ScrollView style={styles.scrollView}>
                   <View>
                        <Text>Materias Inscritas</Text>
                        <Text>{notas.nombre}</Text>
                        <Text>{notas.apellido}</Text>
                        <Text>{notas.cedula}</Text>
                   </View>
                  
                   {map(notas.materiasInscritas,(nota,index) => (
                    <Notas key={index} nota={nota} notas={notas} expoPushToken={expoPushToken}/>
                   ))}  
    
               </ScrollView>
            ):(
 
                <Report user={user}/>
            )}
            <ActionBar showList ={showList} setShowList={setShowList}/>  
            
        </View>
    );
}



const sendMesaage = (token) => {
    fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: token,
        title: 'UNERG',
        body: 'Calificacion Cargada',
        data: { data: 'goes here' },
        _displayInForeground: true,
      }),
    });
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


