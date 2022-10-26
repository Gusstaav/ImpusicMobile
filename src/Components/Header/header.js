import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

export default function Header (){
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.textHeader}>Impusic</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        marginTop: 20,
        height: 55,
        padding: 10,
    },
    textHeader:{
        color: "#939",
        fontSize: 15,
    }
})