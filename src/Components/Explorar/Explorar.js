import React, {useState, useEffect} from "react";
import { Text, ScrollView, Image, View, RefreshControl, TouchableOpacity } from "react-native";
import video from '../../assets/images.jpg';
import { estiloExplorar } from "./estiloExplorar";

export default function Explorar ({route, navigation}){
    const [isLoading, setLoading] = useState(true);
    const [datas, setData] = useState([]);

    /*
        SE TIVER RODANDO NO PRÓPRIO PC: 10.0.2.2
        SE TIVER RODANDO NO EXPO GO: 192.168.1.14 (ipv4 do seu computador)
    */
   const ipBd = '192.168.0.17';

    useEffect(() => {
        fetch('http://'+ipBd+'/rnmysql/videos.php')
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    }, []);

  
  return(
        <ScrollView style={estiloExplorar.Geral}>
            {isLoading ? <Text>Loading...</Text> : (datas.map((video, index) => 
                <TouchableOpacity key={index} onPress={() => { 
                navigation.navigate('Watch', {
                    videoId: video.id
                });
                }}>
                    <View style={estiloExplorar.Container}>
                        <Image style={estiloExplorar.thumbnailVideo}
                            source={{uri: "http://"+ipBd+"/rnmysql/thumbnail/"+video.thumbnail+".jpg"}}
                        />
                        <View style={estiloExplorar.descricaoVideo}>
                            <Image style={estiloExplorar.fotoCanalVideo}
                                source={{uri: "http://"+ipBd+"/rnmysql/icons/profile"+video.channelId+".jpg"}}
                            />
                            <View style={estiloExplorar.descricaoTextosVideo}>
                                <Text style={estiloExplorar.tituloVideo}>{ video.title }</Text>
                                <Text style={estiloExplorar.canalVideo}>{ video.channel }</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                )
            )}
        </ScrollView>
  );
}