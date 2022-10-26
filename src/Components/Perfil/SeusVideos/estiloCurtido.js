import React from "react";
import { StyleSheet } from "react-native";

export const estiloCurtido = StyleSheet.create({
    geral: {
        backgroundColor: '#212121',
    },
    container: {
        flexDirection: 'row',
        margin: 5,
        border: 'solid',
        borderTopColor: '#fff',
        borderBottomColor: '#fff',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderWidth: 1,
        
    },
    video: {
        width: '50%', 
        height: 150,
    },
    textoVideo: {
        color: '#fff',
        padding:  10,
        fontSize: 15,
    },

})