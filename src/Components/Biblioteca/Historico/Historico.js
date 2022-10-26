import React from "react";
import { Text, ScrollView, Image, View } from "react-native";
import video from '../../../assets/images.jpg';
import { estiloHistorico } from "./estiloHistorico";

export default function Historico (){
    return(
        <ScrollView style={estiloHistorico.geral} >
            <View style={estiloHistorico.container}>
                
                <Image source={video} style={estiloHistorico.video} />
                <Text style={estiloHistorico.textoVideo}>Video sem titulo nao sei o que aconteceu</Text>
            </View>
            
            <View style={estiloHistorico.container}>
                
                <Image source={video} style={estiloHistorico.video} />
                <Text style={estiloHistorico.textoVideo}>Video sem titulo nao sei o que aconteceu</Text>
            </View>
            <View style={estiloHistorico.container}>
                
                <Image source={video} style={estiloHistorico.video} />
                <Text style={estiloHistorico.textoVideo}>Video sem titulo nao sei o que aconteceu</Text>
            </View>

            <View style={estiloHistorico.container}>
                
                <Image source={video} style={estiloHistorico.video} />
                <Text style={estiloHistorico.textoVideo}>Video sem titulo nao sei o que aconteceu</Text>
            </View>

            <View style={estiloHistorico.container}>
                
                <Image source={video} style={estiloHistorico.video} />
                <Text style={estiloHistorico.textoVideo}>Video sem titulo nao sei o que aconteceu</Text>
            </View>

            <View style={estiloHistorico.container}>
                
                <Image source={video} style={estiloHistorico.video} />
                <Text style={estiloHistorico.textoVideo}>Video sem titulo nao sei o que aconteceu</Text>
            </View>
        </ScrollView>
    );
}