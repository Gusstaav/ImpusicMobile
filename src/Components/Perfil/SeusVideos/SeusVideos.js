import React, {useState, useEffect} from "react";
import { Text, ScrollView, Image, View, TouchableOpacity, FlatList } from "react-native";
import { estiloVideo } from "./estiloVideo";

import { ipBd } from "../../../../controllerIP";

export default function SeusVideos ({route, navigation}){
    const {user} = route.params;
    const {idUser} = route.params;
    const [data, setData] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [avatarUri, setAvatarUri] = useState();
    
  

   useEffect(() => {
       fetch('http://'+ipBd+'/rnmysql/get-videos-by-user.php?channelUser='+user)
       .then(response => response.json())
       .then((json) => setData(json))
       .catch((error) => console.error(error))
       .finally(() => setLoading(false));
       
    }, []);

     /**
     * buscando foto de avatar do canal do usuario
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
       
       <FlatList 
        style={estiloVideo.geral}
        data={data}
        keyExtractor={(element) => element.id}
        renderItem={ ({item}) => (
                <TouchableOpacity onPress={() => { 
                    navigation.navigate('Watch', {
                        videoId: item.id,
                        channelUser: item.channelUser
                    });
                    }}>
                        <View style={estiloVideo.Container}>
                            <Image style={estiloVideo.thumbnailVideo}
                                source={{uri: "http://"+ipBd+"/rnmysql/thumbnail/"+item.thumbnail+".jpg"}}
                            />
                                <View style={estiloVideo.header}>
                                    <Image style={estiloVideo.fotoCanalVideo}
                                        source={{uri: avatarUri}}
                                    />
                                    <View style={estiloVideo.headerTextosVideo}>
                                        <Text style={estiloVideo.tituloVideo}>{ item.title }</Text>
                                        <Text style={estiloVideo.canalVideo}>{ item.channel }</Text>
                                    </View>
                                </View>
                        </View>
                    </TouchableOpacity>
        )
        }
    
        />
  
           
    );
}