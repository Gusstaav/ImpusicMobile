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
    const [avatarUri, setAvatarUri] = useState();
   
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

     /**
      * verificar se user possui foto de perfil
      */
    async function verificarAvatarFoto(){
        let reqs = await fetch('http://'+ipBd+'/rnmysql/verify-fotoPerfil.php?idUser='+idUser, {
            method: 'POST',
            headers:{
                'Accep':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                idUser: idUser
            }) 
        });
        
        const ress = await reqs.json();
        if(ress == "false"){
             setAvatarUri("https://image.shutterstock.com/image-vector/user-avatarUri-icon-sign-profile-260nw-1145752283.jpg");
        }else{
            setAvatarUri("http://"+ipBd+"/rnmysql/icons/profile/"+idUser+".jpg")
        }

       
    }; 
    verificarAvatarFoto();

  return(
    <View style={estiloFeed.Geral}>
        <View style={estiloFeed.Header}>
            <Text style={estiloFeed.textHeader}>Impusic</Text>
                <TouchableOpacity style={estiloFeed.botaoPerfil}
                 onPress={() => navigation.navigate('Perfil')}>
    
                    <Image   style={estiloFeed.imageUser}
                    source={{uri: avatarUri}}/>
    
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
                            channelUser: item.channelUser,
                            channelId: item.channelId
                        });
                        }}>
                            <View style={estiloFeed.Container}>
                                <Image style={estiloFeed.thumbnailVideo}
                                    source={{uri: "http://"+ipBd+"/rnmysql/thumbnail/"+item.thumbnail+".jpg"}}
                                />
                                <TouchableOpacity style={estiloFeed.descricaoVideo}
                                onPress={() => {
                                    navigation.navigate('Channel',{
                                        channelUser: item.channelUser,
                                        videoId: item.id,
                                        channelId: item.channelId,
                                    })
                                }}
                                >
                                    <Image style={estiloFeed.fotoCanalVideo}
                                        source={{uri: "http://"+ipBd+"/rnmysql/icons/profile/"+item.channelId+".jpg"}}
                                    />
                                    <View style={estiloFeed.descricaoTextosVideo}>
                                        <Text style={estiloFeed.tituloVideo}>{ item.title }</Text>
                                        <Text style={estiloFeed.canalVideo}>{ item.channel }</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                    </TouchableOpacity>       
                </>
            )}/>
    </View>
    );
}
