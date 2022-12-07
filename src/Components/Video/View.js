import React, { useEffect, useState, useRef} from "react";
import {View, TouchableOpacity, Text, Image, Dimensions, Button} from "react-native";
import { Style } from "./StyleView";
import { AntDesign, Tooltip } from '@expo/vector-icons';
import { ResizeMode, Video } from 'expo-av';
import VideoPlayer from 'expo-video-player';
import { setStatusBarHidden } from 'expo-status-bar';
import * as ScreenOrientation from 'expo-screen-orientation';
import { StatusBar } from 'expo-status-bar';
import Comentarios from "./Comentarios/Comentarios";
import { ipBd } from "../../../controllerIP";
import { styleCadastro } from "../InicialLC/stylesLogin-Cadastro/styleCadastro";



export default function Watch({route, navigation}){
    const { videoId } = route.params;
    const {channelUser} = route.params;
    const {channelId} = route.params;
    const [data, setData] = useState([]);
    const [inFullscreen, setInFullsreen] = useState(false);
    const [loading, setLoading] = useState(true);
    const refVideo = useRef(null);
    const [status, setStatus] = React.useState({});
    const [follows, setFollows] = useState([]);
    const [avatarUri, setAvatarUri] = useState();


    /*
        SE TIVER RODANDO NO PRÓPRIO PC: 10.0.2.2
        SE TIVER RODANDO NO EXPO GO: 192.168.1.14 (ipv4 do seu computador)
    */
    
    useEffect(() => {
        fetch('http://'+ipBd+'/rnmysql/search-video.php?videoId='+videoId)
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error));
    }, []);

    /**
     * buscar seguidores
     */
     useEffect(() => {
        fetch('http://'+ipBd+'/rnmysql/get-follows-by-user.php?id='+channelId)
        .then(response => response.json())
        .then((json) => setFollows(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
        
     }, []);

     /**
      * contador de seguidores
      */
     let counter = 0;
     for (const obj of follows) {
     if (obj.idFollow === channelId) counter++;
     }

      /**
       * verificando se canal tem foto de perfil
       */
    async function verificarAvatarFoto(){
        let reqs = await fetch('http://'+ipBd+'/rnmysql/verify-fotoPerfil.php?idUser='+channelId, {
            method: 'POST',
            headers:{
                'Accep':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                idUser: channelId
            }) 
        });
        
        const ress = await reqs.json();
        if(ress == "false"){
             setAvatarUri("https://image.shutterstock.com/image-vector/user-avatarUri-icon-sign-profile-260nw-1145752283.jpg");
        }else{
            setAvatarUri("http://"+ipBd+"/rnmysql/icons/profile/"+data.channelId+".jpg")
        }

       
    }; 
    verificarAvatarFoto();


    return(
        <View style={Style.Body}>
            <StatusBar 
                style='light'
                backgroundColor="black"
                translucent={false}
            />

            <View >
            <VideoPlayer
            videoProps={{
                shouldPlay: true,
                resizeMode: ResizeMode.CONTAIN,
                // ❗ source is required https://docs.expo.io/versions/latest/sdk/video/#props
                source: {
                    uri: 'http://'+ipBd+'/rnmysql/videos/'+data.video+'.mp4',
                },
                ref: refVideo,
            }}
            slider={{
                visible: true
            }}
            fullscreen={{
                inFullscreen: inFullscreen,
                enterFullscreen: async () => {
                  setStatusBarHidden(true, 'fade')
                  setInFullsreen(!inFullscreen)
                  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT)
                  refVideo.current.setStatusAsync({
                    shouldPlay: true,
                  })
                },
                exitFullscreen: async () => {
                  setStatusBarHidden(false, 'fade')
                  setInFullsreen(!inFullscreen)
                  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP)
                },
              }}
              style={{
                videoBackgroundColor: 'black',
                height: inFullscreen ? Dimensions.get('window').width : 200,
                width: 999999999,
              }}
      />
      
        </View>
                
            
                <>
                    <View style={Style.VideoDetails}>
                        <Text style={Style.Title}>{ data.title }</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Channel', {
                                channelUser: channelUser,
                                videoId: videoId
                            }) } style={Style.Container}>
                                <Image source={{uri: avatarUri}} style={Style.fotoUser}/>
                                <View>
                                <Text style={Style.NameUser}>{ data.channel }</Text>
                                <Text style={Style.follows}> {counter} Seguidores</Text>
                                </View>
                            </TouchableOpacity>
                    </View>
                    <Comentarios route={route} />
                </>
            
        </View>
    );
}