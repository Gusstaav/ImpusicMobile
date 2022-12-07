import React, { useEffect, useState} from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Feather, Entypo} from '@expo/vector-icons';
import { estiloChannel } from "./estiloChannel";
import { ipBd } from "../../../controllerIP";
import RotasChannel from "./rotasChannel/rotasChannel";

export default function Channel({route, navigation}){
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [follows, setFollows] = useState([]);
    const [avatarUri, setAvatarUri] = useState();
    const [bannerUri, setBannerUri] = useState();
    const {channelUser} = route.params;
    const {channelId} = route.params;
   

    
    
   /**
    * buscar canal
    */
   
   useEffect(() => {
       fetch('http://'+ipBd+'/rnmysql/get-channel-by-user.php?channelUser='+channelUser)
       .then(response => response.json())
       .then((json) => setData(json.find(obj => {
        return obj.user === channelUser;
      })))
       .catch((error) => console.error(error))
       .finally(() => setLoading(false));
       
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
     * verificando se existe foto de canal
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
            setAvatarUri("http://"+ipBd+"/rnmysql/icons/profile/"+data.id+".jpg")
        }

       
    }; 
    verificarAvatarFoto();

    /**
     * verificando se a banner no canal
     */

    async function verificarBannerFoto(){
        let reqs = await fetch('http://'+ipBd+'/rnmysql/verify-fotoBanner.php?idUser='+channelId, {
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
             setBannerUri("http://"+ipBd+"/rnmysql/banner/bannerDefault.jpg")
        }else{
            setBannerUri("http://"+ipBd+"/rnmysql/banner/"+data.id+".jpg")
        }
      
    }; 
    verificarBannerFoto();

    return(
        <>
        <View style={{backgroundColor: 'rgb(20,20,20)'}}>
        <View style={estiloChannel.Header}>
            <Text style={{color: '#fff'}}>Impusic</Text>
        <TouchableOpacity onPress={() => navigation.goBack('Feed')} style={estiloChannel.botaoGoBack}>
            <Text style={estiloChannel.botaoVoltar}><Entypo name="back" size={14} color="#fff" /> Voltar</Text>
        </TouchableOpacity>
       </View>
       </View>
        <View style={estiloChannel.container}>
           
            <Image style={estiloChannel.fotoBanner} 
            source={{uri: bannerUri}}
            />
            
            
            <Image style={estiloChannel.fotoChannel}
            source={{uri: avatarUri }}
            />
            
                <View style={estiloChannel.containerDados}>
                    <Text style={estiloChannel.textoChannel}> {data.name} </Text>
                    <Text style={estiloChannel.follows}>{counter} seguidores</Text>
                    {!! data.description &&
                    <Text style={estiloChannel.textoDescription}> {data.description} </Text>
                    }
                        <View style={estiloChannel.dados}>
                            
                            {!!data.instagram && 
                            <Text style={estiloChannel.textoDescription}> <Feather name="instagram" size={13} />{data.instagram} </Text>
                            }
                            {!! data.facebook &&
                            <Text style={estiloChannel.textoDescription}> <Feather name="facebook" size={13} /> {data.facebook}  </Text>
                            }
                        </View>
                </View>
        </View>
                
        
        <RotasChannel route={route} />
       
        </>
    );
}

