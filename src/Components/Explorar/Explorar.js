import React, {useState, useEffect} from "react";
import { Text, ScrollView, Image, View, FlatList, TouchableOpacity } from "react-native";
import { estiloExplorar } from "./estiloExplorar";
import { ipBd } from "../../../controllerIP";

export default function Explorar ({route, navigation}){
    const {idUser} = route.params;
    const [isLoading, setLoading] = useState(true);
    const [datas, setData] = useState([]);
    const [avatarUri, setAvatarUri] = useState();
   
    /*
        SE TIVER RODANDO NO PRÓPRIO PC: 10.0.2.2
        SE TIVER RODANDO NO EXPO GO: 192.168.1.14 (ipv4 do seu computador)
    */


    useEffect(() => {
        fetch('http://'+ipBd+'/rnmysql/videos.php')
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    }, []);

    /**
     * verificando se user tem foto de perfil
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
        <View style={estiloExplorar.Geral}>
            
                <View style={estiloExplorar.Header}>
                    <Text style={estiloExplorar.textHeader}>Impusic</Text>
                        <TouchableOpacity style={estiloExplorar.botaoPerfil}
                         onPress={() => navigation.navigate('Perfil')}>

                            <Image   style={estiloExplorar.imageUser}
                            source={{uri: avatarUri}}/>

                        </TouchableOpacity>
                </View>

                <FlatList 
            style={estiloExplorar.Geral}
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
                            <View style={estiloExplorar.Container}>
                                <Image style={estiloExplorar.thumbnailVideo}
                                    source={{uri: "http://"+ipBd+"/rnmysql/thumbnail/"+item.thumbnail+".jpg"}}
                                />
                                <View style={estiloExplorar.descricaoVideo}>
                                    <Image style={estiloExplorar.fotoCanalVideo}
                                        source={{uri: "http://"+ipBd+"/rnmysql/icons/profile/"+item.channelId+".jpg"}}
                                    />
                                    <View style={estiloExplorar.descricaoTextosVideo}>
                                        <Text style={estiloExplorar.tituloVideo}>{ item.title }</Text>
                                        <Text style={estiloExplorar.canalVideo}>{ item.channel }</Text>
                                    </View>
                                </View>
                            </View>
                    </TouchableOpacity>       
                </>
            )}/>
            
                    
            
        </View>
  );
}