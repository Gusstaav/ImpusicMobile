import React, { useEffect, useState} from "react";
import { Text, View, ScrollView, Image, RefreshControl, TouchableOpacity, Alert } from "react-native";
import {estiloFeed} from './estiloFeed';
import Header from "../Header/header";
import { AppRegistry } from "react-native-web";

export default function Feed ({route, navigation}){
    const [isLoading, setLoading] = useState(true);
    const [datas, setData] = useState([]);

    /*
        SE TIVER RODANDO NO PRÓPRIO PC: 10.0.2.2
        SE TIVER RODANDO NO EXPO GO: 192.168.1.14 (ipv4 do seu computador)
    */
   const ipBd = '172.16.4.7';

    useEffect(() => {
        fetch('http://'+ipBd+'/rnmysql/videos.php')
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    }, []);

  
  return(
        <ScrollView style={estiloFeed.Geral}>
            {isLoading ? <Text>Loading...</Text> : (datas.map((video, index) => 
                <TouchableOpacity key={index} onPress={() => { 
                navigation.navigate('Watch', {
                    videoId: video.id
                });
                }}>
                    <View style={estiloFeed.Container}>
                        <Image style={estiloFeed.thumbnailVideo}
                            source={{uri: "http://"+ipBd+"/rnmysql/thumbnail/"+video.thumbnail+".png"}}
                        />
                        <View style={estiloFeed.descricaoVideo}>
                            <Image style={estiloFeed.fotoCanalVideo}
                                source={{uri: "http://"+ipBd+"/rnmysql/icons/profile/"+video.channelId+".jpg"}}
                            />
                            <View style={estiloFeed.descricaoTextosVideo}>
                                <Text style={estiloFeed.tituloVideo}>{ video.title }</Text>
                                <Text style={estiloFeed.canalVideo}>{ video.channel }</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                )
            )}
        </ScrollView>
        
    );
}