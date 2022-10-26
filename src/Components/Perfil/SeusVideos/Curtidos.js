import React from "react";
import { Text, ScrollView, Image, View } from "react-native";
import video from '../../../assets/images.jpg';
import { estiloCurtido } from "./estiloCurtido";

export default function SeusVideos (){
    return(
        <ScrollView style={estiloCurtido.geral} >
            <View style={estiloCurtido.container}>
                
                <Image source={video} style={estiloCurtido.video} />
                <Text style={estiloCurtido.textoVideo}>Video sem titulo nao sei o que aconteceu</Text>

            </View>

            <View style={estiloCurtido.container}>
                
                <Image source={video} style={estiloCurtido.video} />
                <Text style={estiloCurtido.textoVideo}>Video sem titulo nao sei o que aconteceu</Text>

            </View>
            <View style={estiloCurtido.container}>
                
                <Image source={video} style={estiloCurtido.video} />
                <Text style={estiloCurtido.textoVideo}>Video sem titulo nao sei o que aconteceu</Text>

            </View>
            <View style={estiloCurtido.container}>
                
                <Image source={video} style={estiloCurtido.video} />
                <Text style={estiloCurtido.textoVideo}>Video sem titulo nao sei o que aconteceu</Text>

            </View>
            <View style={estiloCurtido.container}>
                
                <Image source={video} style={estiloCurtido.video} />
                <Text style={estiloCurtido.textoVideo}>Video sem titulo nao sei o que aconteceu</Text>

            </View>
            <View style={estiloCurtido.container}>
                
                <Image source={video} style={estiloCurtido.video} />
                <Text style={estiloCurtido.textoVideo}>Video sem titulo nao sei o que aconteceu</Text>

            </View>
            
            
        </ScrollView>
    );
}