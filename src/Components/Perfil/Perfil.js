import React, { useEffect, useState} from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import {EvilIcons, Ionicons, Feather} from '@expo/vector-icons';
import { estiloPerfil } from "./estiloPerfil";
import { ipBd } from "../../../controllerIP";

import PerfilTabs from "./RotasPerfil.js/RotasPerfil";

export default function Perfil({route, navigation}){
    const {user} = route.params;
    const {idUser} = route.params;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [follows, setFollows] = useState([]);
    const [avatarUri, setAvatarUri] = useState();
    const [bannerUri, setBannerUri] = useState();


    /*
        SE TIVER RODANDO NO PRÓPRIO PC: 10.0.2.2
        SE TIVER RODANDO NO EXPO GO: 192.168.1.14 (ipv4 do seu computador)
    */

   
   
   useEffect(() => {
       fetch('http://'+ipBd+'/rnmysql/get-channel-by-user.php?channelUser='+user)
       .then(response => response.json())
       .then((json) => setData(json.find(obj => {
        return obj.user === user;
      })))
       .catch((error) => console.error(error))
       .finally(() => setLoading(false));
       
    }, []);

    /**
     * buscar seguidores
     */
    useEffect(() => {
        fetch('http://'+ipBd+'/rnmysql/get-follows-by-user.php?id='+idUser)
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
     if (obj.idFollow === idUser) counter++;
     }


    
    /**
     * verificando se existe foto de canal
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
            setAvatarUri("http://"+ipBd+"/rnmysql/icons/profile/"+data.id+".jpg")
        }

       
    }; 
    verificarAvatarFoto();

    /**
     * verificando se a banner no canal
     */

    async function verificarBannerFoto(){
        let reqs = await fetch('http://'+ipBd+'/rnmysql/verify-fotoBanner.php?idUser='+idUser, {
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
             setBannerUri("http://"+ipBd+"/rnmysql/banner/bannerDefault.jpg")
        }else{
            setBannerUri("http://"+ipBd+"/rnmysql/banner/"+data.id+".jpg")
        }
      
    }; 
    verificarBannerFoto();

      
     
   
 
    return(
        <>
        <View style={{  backgroundColor: 'rgb(15,15,15)' }}>
        <View style={estiloPerfil.Header}>
            <Text style={estiloPerfil.textHeader}>Impusic</Text>
                <TouchableOpacity style={estiloPerfil.botaoSair}
                 onPress={() => navigation.reset({
                    index: 1,
                    routes: [
                        { name: 'Login' },
                    ]
                  })}
                 >
                    <Text style={{color: "#C0C0C0", padding: 2,}}>exit</Text>
                    <Ionicons name="log-out-sharp" size={24} color="#DCDCDC" />
    
                </TouchableOpacity>
        </View>
       </View>
        <View style={estiloPerfil.container}  >
        {!! data.id &&(
            <Image style={estiloPerfil.fotoBanner} 
            source={{uri: bannerUri}}
            />
            )}
            {!! data.id &&(
            <Image style={estiloPerfil.fotoPerfil}
            source={{uri: avatarUri}}
            />
            )}
                <View style={estiloPerfil.containerDados}>
                    <Text style={estiloPerfil.textoPerfil}> {data.name} </Text>
                    <Text style={{ color: 'rgb(220,220,220)', fontSize: 12,}}> {counter} seguidores </Text>
                    {!! data.description &&(
                    <Text style={estiloPerfil.textoDescription}> {data.description} </Text>
                    )}
                        <View style={estiloPerfil.dados}>
                            {!! data.instagram &&(
                            <Text style={estiloPerfil.textoDescription}> <Feather name="instagram" size={13} />  {data.instagram}  </Text>
                            )}
                            {!! data.facebook &&(
                            <Text style={estiloPerfil.textoDescription}> <Feather name="facebook" size={13} /> {data.facebook}  </Text>
                            )}
                        </View>
                </View>
        </View>
                
        
        <PerfilTabs route={route} > </PerfilTabs>


       
        </>
    );
}

