import React, { useEffect, useState} from "react";
import { View, Text } from "react-native";
import { Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons, Feather} from '@expo/vector-icons';
import { estiloPerfil } from "./estiloPerfil";
import AsyncStorage from "@react-native-async-storage/async-storage";

import PerfilTabs from "./RotasPerfil.js/RotasPerfil";

export default function Perfil({ route }){
    const { user } = route.params;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    
    /*
        SE TIVER RODANDO NO PRÓPRIO PC: 10.0.2.2
        SE TIVER RODANDO NO EXPO GO: 192.168.1.14 (ipv4 do seu computador)
    */
   const ipBd = '172.16.4.7';
   
   useEffect(() => {
       fetch('http://'+ipBd+'/rnmysql/get-channel-by-user.php?channelUser='+user)
       .then(response => response.json())
       .then((json) => setData(json.find(obj => {
        return obj.name === user
    })))
       .catch((error) => console.error(error))
       .finally(() => setLoading(false));
    }, []);  

   

    return(
        <>
            <View style={estiloPerfil.container}  >
                <Image style={estiloPerfil.fotoBanner} 
                source={{uri: "http://"+ipBd+"/rnmysql/banner/"+data.id+".jpg"}}
                />

                <Image style={estiloPerfil.fotoPerfil}
                source={{uri: "http://"+ipBd+"/rnmysql/icons/profile/"+data.id+".jpg"}}
                />
                    <Text style={estiloPerfil.textoPerfil}> {data.name} </Text>
                    <Text style={estiloPerfil.textoDescription}> {data.description} </Text>
                    <Text style={estiloPerfil.textoDescription}> <Feather name="instagram" size={13} />  {data.instagram}  </Text>
                    <Text style={estiloPerfil.textoDescription}> <Feather name="facebook" size={13} /> {data.facebook}  </Text>

            </View>
            
        <PerfilTabs />
       
        </>
    );
}

