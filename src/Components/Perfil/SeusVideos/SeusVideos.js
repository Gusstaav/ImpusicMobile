import React from "react";
import { Text, ScrollView, Image, View } from "react-native";
import video from '../../../assets/images.jpg';
import { estiloVideo } from "./estiloVideo";

export default function SeusVideos (){
    return(
        <ScrollView style={estiloVideo.geral} >
            <View style={estiloVideo.container}>
                
                <Image source={video} style={estiloVideo.video} />
                <Text style={estiloVideo.textoVideo}>Video sem titulo nao sei o que aconteceu</Text>
            </View>
            
            <View style={estiloVideo.container}>
                
                <Image source={video} style={estiloVideo.video} />
                <Text style={estiloVideo.textoVideo}>Video sem titulo nao sei o que aconteceu</Text>
            </View>
            <View style={estiloVideo.container}>
                
                <Image source={video} style={estiloVideo.video} />
                <Text style={estiloVideo.textoVideo}>Video sem titulo nao sei o que aconteceu</Text>
            </View>

            <View style={estiloVideo.container}>
                
                <Image source={video} style={estiloVideo.video} />
                <Text style={estiloVideo.textoVideo}>Video sem titulo nao sei o que aconteceu</Text>
            </View>

            <View style={estiloVideo.container}>
                
                <Image source={video} style={estiloVideo.video} />
                <Text style={estiloVideo.textoVideo}>Video sem titulo nao sei o que aconteceu</Text>
            </View>

            <View style={estiloVideo.container}>
                
                <Image source={video} style={estiloVideo.video} />
                <Text style={estiloVideo.textoVideo}>Video sem titulo nao sei o que aconteceu</Text>
            </View>
        </ScrollView>
    );
}