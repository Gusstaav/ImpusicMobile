import React from "react";
import { StyleSheet } from "react-native";

export const estiloExplorar = StyleSheet.create({
    Geral: {
        flex: 1,
        backgroundColor: '#212121',
    },
    Container: {
        flex: 1,
        alignItems: 'center',
        
    },
    thumbnailVideo: {
        height: 1080/5.5,
        marginHorizontal: 1,
        width: '100%',
        
    },
    tituloVideo:{
        fontSize: 16,
        color: '#fff',
        width: '100%',
        
    },
    canalVideo:{
        fontSize: 14,
        color: '#fff',
        width: '100%',
        marginBottom: 15,
    },
    fotoCanalVideo:{
        borderRadius: 100,
        width: 40,
        height: 40,
    },
    descricaoVideo:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: 6
    },
    descricaoTextosVideo:{
        width: '100%',
        paddingLeft: 6,
        paddingRight: 6
    }
})