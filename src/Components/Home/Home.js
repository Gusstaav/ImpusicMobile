import React, { useEffect, useState} from "react";
import { Text, View, ScrollView, Image, FlatList, TouchableOpacity, Alert } from "react-native";
import {estiloFeed} from './estiloFeed';
import { AppRegistry } from "react-native-web";
import {EvilIcons, Ionicons} from '@expo/vector-icons';

import { ipBd } from "../../../controllerIP";


export default function Feed ({route, navigation}){
    const {idUser} = route.params;
    const [isLoading, setLoading] = useState(true);
    const [datas, setDatas] = useState([]);
   
    /*
        SE TIVER RODANDO NO PRÓPRIO PC: 10.0.2.2
        SE TIVER RODANDO NO EXPO GO: 192.168.1.14 (ipv4 do seu computador)
    */


    useEffect(() => {
        async function LoadFeed(){
        await fetch('http://'+ipBd+'/rnmysql/videos.php')
          .then((response) => response.json())
          .then((json) => setDatas(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
        }
        LoadFeed();
    }, []);

  return(
    <View style={estiloFeed.Geral}>
        <View style={estiloFeed.Header}>
            <Text style={estiloFeed.textHeader}>Impusic</Text>
                <TouchableOpacity style={estiloFeed.botaoPerfil}
                 onPress={() => navigation.navigate('Perfil')}>
    
                    <Image   style={estiloFeed.imageUser}
                    source={{uri: "http://"+ipBd+"/rnmysql/icons/profile/"+idUser+".jpg"}}/>
    
                </TouchableOpacity>
        </View>
            <FlatList 
            style={estiloFeed.Geral}
            data={datas} 
            keyExtractor={(element) => element.id}
            renderItem={ ({item}) => (
                <>            
                    <TouchableOpacity  onPress={() => { 
                        navigation.navigate('Watch', {
                            videoId: item.id,
                            channelUser: item.channelUser
                        });
                        }}>
                            <View style={estiloFeed.Container}>
                                <Image style={estiloFeed.thumbnailVideo}
                                    source={{uri: "http://"+ipBd+"/rnmysql/thumbnail/"+item.thumbnail+".jpg"}}
                                />
                                <View style={estiloFeed.descricaoVideo}>
                                    <Image style={estiloFeed.fotoCanalVideo}
                                        source={{uri: "http://"+ipBd+"/rnmysql/icons/profile/"+item.channelId+".jpg"}}
                                    />
                                    <View style={estiloFeed.descricaoTextosVideo}>
                                        <Text style={estiloFeed.tituloVideo}>{ item.title }</Text>
                                        <Text style={estiloFeed.canalVideo}>{ item.channel }</Text>
                                    </View>
                                </View>
                            </View>
                    </TouchableOpacity>       
                </>
            )}/>
    </View>
    );
}
