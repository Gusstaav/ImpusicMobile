import React from "react";
import {View, Text, ScrollView} from "react-native";
import { Style } from "./Style";

export default function Coments(){
    return(
        <ScrollView>
            <View style={Style.container}>
            <Text style={Style.Name}>User019</Text>
            <Text style={Style.comentario}>Manda salve pro meu tio</Text>
            </View>
            
        </ScrollView>
    );
}