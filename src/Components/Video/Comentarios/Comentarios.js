import React from "react";
import {View, Text} from "react-native";
import { Style } from "./Style";
import Coments from "./Coments/ComentariosView";

export default function Comentarios({route}){
  
    return(
        <View style={Style.container}>
            <Text style={Style.Title}>Comentarios</Text>
            <Coments route={route} />
        </View>
    );
}