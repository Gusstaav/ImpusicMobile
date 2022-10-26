import React from "react";
import { StyleSheet } from "react-native";

export const estiloHistorico = StyleSheet.create({
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
        padding:  10,
        fontSize: 15,
        color: '#fff',
    },

})