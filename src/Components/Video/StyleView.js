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
    BodyFeedback:{
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 15,
        alignItems: 'center',
    },
    Views: {
        fontSize: 10,
        color: '#A9A9A9',
    },
    Button:{
        marginLeft: 15,
        flexDirection: 'row',
    },
    LikeImage:{
        width: 25,
        height: 25,
        color: "#fff",
    },
    Like:{
        margin: 5,
        fontSize: 10,
        color: '#A9A9A9',
    },
    DesLike:{
        margin: 5,
        marginRight: 20,
        fontSize: 10,
        color: '#A9A9A9',
    },
    Container:{
        flexDirection: "row",
        alignItems: "center",
    },
    fotoUser:{
        marginLeft: 5,
       width: 30,
       height: 30, 
       borderRadius: 50,
    },
    NameUser: {
        fontSize: 10,
        padding: 5,
        color: '#D3D3D3',
    },
    VideoDetails: {
        paddingLeft: 10,
        paddingRight: 10,
    }
})