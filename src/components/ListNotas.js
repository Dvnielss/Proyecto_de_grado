import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ActionBar from './ActionBar';
import Report from './Report';

export default function ListNotas(){

    const [showList, setShowList] = useState(false);
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

                <Text>No found 404</Text>
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


