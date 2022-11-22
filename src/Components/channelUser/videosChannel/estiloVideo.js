import React from "react";
import { StyleSheet } from "react-native";

export const estiloVideo = StyleSheet.create({
    geral: {
        flex: 1,
        backgroundColor: 'rgb(14,14,14)' ,
    },
    Container: {
        alignItems: 'center',
        
    },
    thumbnailVideo: {
        height: 200,
        width: '100%',
        
    },
    tituloVideo:{
        fontSize: 16,
        color: '#fff',
        width: '100%',
        
    },
    canalVideo:{
        fontSize: 12,
        color: '#fff',
        width: '100%',
        marginBottom: 20,
    },
    fotoCanalVideo:{
        borderRadius: 100,
        width: 35,
        height: 35,
    },
    header:{
        flex: 1,
        marginLeft: '5%',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: 6
    },
    headerTextosVideo:{
        width: '100%',
        paddingLeft: 6,
        paddingRight: 6,
        backgroundColor: 'rgb(15,15,15)'
    },

})