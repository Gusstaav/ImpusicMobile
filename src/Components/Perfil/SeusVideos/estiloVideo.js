import React from "react";
import { StyleSheet } from "react-native";

export const estiloVideo = StyleSheet.create({
    geral: {
        backgroundColor: '#212121',
    },
    container: {
        width: '100%',
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
        padding:  5,
        fontSize: 15,
        color: '#fff',
    },

})