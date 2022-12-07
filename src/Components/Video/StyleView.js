import React from "react";
import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
    Body:{
        backgroundColor: "#1C1C1C",
        flex: 1,
    },
    Video:{
        width: '100%',
        height: 200,
        backgroundColor: '#000',
    },
    Title:{
        marginTop: 10,
        color: '#fff',
        fontSize: 20,
    },
    Container:{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
        marginBottom: 5,
    },
    fotoUser:{
        marginLeft: 5,
       width: 30,
       height: 30, 
       borderRadius: 50,
    },
    NameUser: {
        fontSize: 10,
        marginLeft: 5,
        padding: 1,
        color: '#D3D3D3',
    },
    follows: {
        color: 'rgb(215,215,215)', 
        fontSize: 9, 
        marginLeft: 5,
},
    VideoDetails: {
        paddingLeft: 10,
        paddingRight: 10,
    }
})