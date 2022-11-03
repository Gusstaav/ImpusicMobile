import React, { useEffect, useState} from "react";
import { View, Text } from "react-native";
import { Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons, Feather} from '@expo/vector-icons';
import { estiloPerfil } from "./estiloPerfil";
import AsyncStorage from "@react-native-async-storage/async-storage";

import PerfilTabs from "./RotasPerfil.js/RotasPerfil";

export default function Perfil(){
    const [user, setUser] = useState("");
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [idUser, setIdUser] = useState('');
    
    


    /*
        SE TIVER RODANDO NO PRÓPRIO PC: 10.0.2.2
        SE TIVER RODANDO NO EXPO GO: 192.168.1.14 (ipv4 do seu computador)
    */
   const ipBd = '192.168.0.17';
   
   useEffect(() => {
       async function getUser(){
           const response = await AsyncStorage.getItem('userData');
           const json = JSON.parse(response);
           setUser(json);
       }
       getUser();
   },[])

   console.log(user)
   
   useEffect(() => {
       fetch('http://'+ipBd+'/rnmysql/get-channel-by-user.php?channelUser='+user.user)
       .then(response => response.json())
       .then((json) => setData(json))
       .catch((error) => console.error(error))
       .finally(() => setLoading(false));
       
    }, []);
    

   

    return(
        <>
       
        
        
           
        
        <View style={estiloPerfil.container}  >
            <Image style={estiloPerfil.fotoBanner} 
            source={{uri: "http://"+ipBd+"/rnmysql/banner/1.png"}}
            />

            <Image style={estiloPerfil.fotoPerfil}
            source={{uri: "http://"+ipBd+"/rnmysql/icons/profile/"+user.id+".jpg"}}
            />
                <Text style={estiloPerfil.textoPerfil}> {user.name} </Text>
                <Text style={estiloPerfil.textoDescription}> {user.description} </Text>
                <Text style={estiloPerfil.textoDescription}> <Feather name="instagram" size={13} />  {user.instagram}  </Text>
                <Text style={estiloPerfil.textoDescription}> <Feather name="facebook" size={13} /> {user.facebook}  </Text>

        </View>
           
            
        
        <PerfilTabs />
       
        </>
    );
}

